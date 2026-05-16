import { InlineKeyboard } from "grammy";

export class BalanceKeyboard {
    static getBalanceMenu(): InlineKeyboard {
        return new InlineKeyboard()
        .text("Збільшити баланс","tariffs")
        .row()
        .text("🔙 Назад", "back_to_main")
    }
    static getListTariffs(): InlineKeyboard {
        return new InlineKeyboard
    }
}