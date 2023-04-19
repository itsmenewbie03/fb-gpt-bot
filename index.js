import { readFileSync } from "fs";
import login from "fca-unofficial";
import { ai } from "./utils/ai.js";
login({ appState: JSON.parse(readFileSync('appstate.json', 'utf8')) }, (err, api) => {
    if (err) return console.error(err);
    api.setOptions({ listenEvents: true, selfListen: false });
    api.listen(async (err, event) => {
        if (err) return console.error(err);
        switch(event.type){
            case "message":
                await ai(event,api,null);
                break;
            default:
                break;
        }
    });
    // Here you can use the api
});