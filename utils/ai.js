// PLEASE ENTER YOUR API KEY HERE
const OPENAI_API_KEY = 'ADD_YOUR_OPENAI_API_KEY_HERE';
const chat_completion = async (message) => {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: message }]
        })
    }).then(res => res.json());
    const reply = response?.choices?.[0]?.message?.content;
    return reply ? reply.trim() : '❎ Failed to get response';
};

const ai = async (event, api, _) => {
    if (event.body !== undefined) {
        if (event.body.trim() !== "") {
            // YOU MAY CHANGE THE `bot` to YOUR PREFERRED TRIGGER KEYWORD
            if (/^bot\s/i.test(event.body)) {
                let data = event.body.split(" ");
                data.shift();
                let resp = await chat_completion(data.join(" "))
                api.sendMessage(resp, event.threadID, event.messageID);
            }
        }
    }
}
export { chat_completion, ai }
