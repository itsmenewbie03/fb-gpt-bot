### Introduction
------------
 - This repo will allow you to easily deploy your own facebook chatbot (account not page) that will answer queries using **OpenAI's gpt-3.5-turbo model**

### Requirements
------------
To deploy locally you need to install the following
1.  [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git "git")
2. [node](https://nodejs.org/en "node")

### Installation
------------

[![Fork me on replit](https://img.shields.io/static/v1?label=Replit&message=Fork%20me%20on%20replit!&color=brightgreen&style=for-the-badge&logo=replit 'Fork Me')](https://replit.com/@itsmenewbie03/fb-gpt-bot)<br>
or deploy locally
```bash
git clone https://github.com/itsmenewbie03/fb-gpt-bot
cd fb-gpt-bot
npm i
```
### Configuration
------------
- After installing all the dependecies edit the .env file or if you are on replit edit the **[secrets](https://docs.replit.com/programming-ide/workspace-features/storing-sensitive-information-environment-variables "secrets")**
- Get your OPENAI_API_KEY **[here](https://platform.openai.com/account/api-keys "here")**, if you do not have an account just signup for one.
- The BOT_TRIGGER will trigger the bot to answer by default it is **bot** but you can change it to what you like
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
