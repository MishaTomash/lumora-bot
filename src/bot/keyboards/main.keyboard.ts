import { Keyboard, InlineKeyboard } from "grammy";

export class MainKeyboard {

    static getMainMenu(): InlineKeyboard {
        return new InlineKeyboard()
            .text("📝 Промти", 'main_prompts')
            .row()
            .text("🎨 Створити зображення", "main_create_img")
            .row()
            .text("💰 Баланс", "main_balance")
            .text("Профіль", "main_profile")
    }
}