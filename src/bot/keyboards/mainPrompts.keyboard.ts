import { InlineKeyboard } from "grammy";

export class PromptsKeyboard {
    static getpromptsMenu(): InlineKeyboard {
        return new InlineKeyboard()
        .text("✨ Створити промт", "create_prompt")
        .row()
        .text("📂 Збережені промти", "save_prompts")
        .row()
        .text("🔙 Назад", "back_to_main")
    }
}