import { InlineKeyboard } from "grammy";

export class ProfileKeyboard {
    static getProfile():InlineKeyboard {
        return new InlineKeyboard()
        .text("🔙 Назад", "back_to_main")
    }
}