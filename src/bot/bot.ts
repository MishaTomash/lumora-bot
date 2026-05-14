import { Bot } from "grammy";
import { BotCommands } from "./commands/index";

const setupBot = (token: string) => {
    const bot = new Bot(token);
    const botCommands = new BotCommands(bot);
    botCommands.render();

    return bot;
};

export {setupBot}