import { Bot, Context, InlineKeyboard, Keyboard } from "grammy";

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
            const keyboard = new Keyboard()
                .text(" ")
                .text("Налаштування")
                .row()
                .text("Допомога")
                .resized();

            await ctx.reply("hello", {
                reply_markup: keyboard
            })
        })
    }
}
export { BotCommands };