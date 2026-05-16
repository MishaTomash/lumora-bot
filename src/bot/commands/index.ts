import { Bot, Context, InlineKeyboard, Keyboard } from "grammy";
import { MainKeyboard } from "../keyboards/main.keyboard";

class BotCommands {
    private bot: Bot<Context>;

    constructor(bot: Bot<Context>) {
        this.bot = bot;
    }

    render(): void {

        this.startCommand();

    }

    private startCommand(): void {
        this.bot.command("start", async (ctx) => {
            await ctx.reply("👋 <b>Привіт!</b>\n\nОбери потрібну дію в меню нижче 👇", {
                reply_markup: MainKeyboard.getMainMenu(),
                parse_mode: "HTML"
            })
        })
    }
}
export { BotCommands };