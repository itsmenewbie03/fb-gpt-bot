### Introduction
------------
 - This repo will allow you to easily deploy your own facebook chatbot (account not page) that will answer queries using **OpenAI's gpt-3.5-turbo model**


### Installation
------------
> If you deploy this on replit skip the step below and proceed to [configuration](#configuraton "configuration")
```bash
git clone https://github.com/itsmenewbie03/fb-gpt-bot
cd fb-gpt-bot
npm i
```
### Configuration
------------
- After installing all the dependecies edit the .env file
- Get your OPENAI_API_KEY **[here](https://platform.openai.com/account/api-keys "here")**, if you do not have an account just signup for one.
- The BOT_TRIGGER will trigger the bot to answer by default it is **zuck** but you can change it to what you like
- Paste your fb state contents to the appstate.json, you can generate it **[here](https://github.com/c3cbot/c3c-fbstate "here")**

### Starting
------------
- We are now ready to start the bot
```bash
npm run start
```

### Resources
------------
- [OpenAI Chat Completion](https://platform.openai.com/docs/guides/chat "OpenAI Chat Completion")
- [fca-unofficial docs](https://github.com/VangBanLaNhat/fca-unofficial/blob/master/DOCS.md "fca-unofficial docs")

### Disclaimer
------------
- ⚠️ **I AM NOT RESPONSIBLE FOR ANY CASES OF ACCOUNTS BEING BANNED, DO IT AT YOUR OWN RISK**