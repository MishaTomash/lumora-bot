import { Bot } from "grammy";
import { BotCommands } from "./commands/index";
import { Callback } from "./callbacks";

const setupBot = (token: string) => {
    const bot = new Bot(token);
    const botCommands = new BotCommands(bot);
    botCommands.render();

    const botCallbacks = new Callback(bot);
    botCallbacks.render()

    return bot;
};

export {setupBot}