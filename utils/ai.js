import * as dotenv from 'dotenv'
dotenv.config();

const chat_completion = async (message) => {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
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
    if (!event?.body?.trim()) return;

    const regex = new RegExp(`^${process.env.BOT_TRIGGER}\s`, 'i')
    if (!regex.test(event.body)) return;

    const data = event.body.split(" ");
    data.shift();
    const resp = await chat_completion(data.join(" "))
    api.sendMessage(resp, event.threadID, event.messageID);
}

export { chat_completion, ai }