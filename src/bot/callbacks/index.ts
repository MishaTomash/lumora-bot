import { Bot, Context, InlineKeyboard, Keyboard } from "grammy";
import { PromptsKeyboard } from "../keyboards/mainPrompts.keyboard";
import { MainKeyboard } from "../keyboards/main.keyboard";
import { ImgKeyboard } from "../keyboards/mainImg.keyboard";
import { ProfileKeyboard } from "../keyboards/profile.keyboard";
import { BalanceKeyboard } from "../keyboards/balance.keyboard";

export class Callback {
    private bot: Bot<Context>;
    private balance: number = 32;

    constructor(bot: Bot<Context>) {
        this.bot = bot;
    }

    render(): void {
        this.eventsMainPrompts();
        this.eventsCreateImg();
        this.eventsProfile();
        this.eventsBalance();
    }

    private eventsMainPrompts() {
        this.bot.callbackQuery("main_prompts", async (ctx) => {
            await ctx.editMessageText("Ви перейшли у розділ Промти. Оберіть дію:", {
                reply_markup: PromptsKeyboard.getpromptsMenu()
            })
        })
        this.bot.callbackQuery("create_prompt", async (ctx) => {
            await ctx.editMessageText("Опиши яка має бути картина 👇", {
                reply_markup: new InlineKeyboard()
                    .text("Скасувати", "main_prompts")
            })
        })

        this.bot.callbackQuery("back_to_main", async (ctx) => {
            await ctx.editMessageText("Обери потрібну дію в меню нижче 👇", {
                reply_markup: MainKeyboard.getMainMenu()
            })
        })
        this.bot.callbackQuery("cancel_prompt", async (ctx) => {
            await ctx.editMessageText("Ви перейшли у розділ Промти. Оберіть дію:", {
                reply_markup: PromptsKeyboard.getpromptsMenu()
            }
            )
        })
        this.bot.callbackQuery("save_prompts", async (ctx) => {
            await ctx.editMessageText("У вас немає збережені промти :(", {
                reply_markup: new InlineKeyboard()
                    .text("🔙 Назад", "main_prompts")
            })
        })
    }

    eventsCreateImg(): void {
        this.bot.callbackQuery("main_create_img", async (ctx) => {
            await ctx.editMessageText("Надішліть промт для фото:", {
                reply_markup: ImgKeyboard.getImgMenu()
            })
        })
    }

    eventsProfile(): void {
        this.bot.callbackQuery("main_profile", async (ctx) => {

            const userName: string = String(ctx.chat?.username)
            const photosAvailable: number = Math.floor(this.balance / 5);

            const profileText: string =
                `👤 <b>Профіль:</b> ${userName}\n\n` +
                `💰 <b>Ваш баланс:</b> ${this.balance} монет\n` +
                `🖼 <b>Можна створити:</b> ~${photosAvailable} фото`;

            await ctx.editMessageText(profileText, {
                parse_mode: 'HTML',
                reply_markup: ProfileKeyboard.getProfile()
            })
        })
    }

    eventsBalance(): void {
        this.bot.callbackQuery('main_balance', async (ctx) => {
            ctx.editMessageText(`У вас на балансі: ${this.balance}`, {
                reply_markup: BalanceKeyboard.getBalanceMenu()
            })
        })
    }
}