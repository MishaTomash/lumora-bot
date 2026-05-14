// import { Bot, Context, InlineKeyboard } from "grammy";

// function setupBotCallbacks(bot: Bot<Context>): void {

//     bot.callbackQuery("click_btn", async (ctx) => {
//         await ctx.answerCallbackQuery();

//         await ctx.reply("Ти натиснув кнопку");
//     })

//     bot.hears('Налаштування', async (ctx) => {
//         await ctx.reply("<b>Жирний текст</b>",
//             {
//                 parse_mode: "HTML"
//             })
//     })
// }

// export { setupBotCallbacks };