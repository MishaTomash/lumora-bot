import { BalanceKeyboard } from "../../bot/keyboards/balance.keyboard";

describe("BalanceKeyboard", () => {
    it("getBalanceMenu має повертати правильну структуру кнопок", () => {
        const keyboard = BalanceKeyboard.getBalanceMenu();

        const rows = keyboard.inline_keyboard;
        expect(rows.length).toBe(2);

        expect(rows[0][0]).toEqual({
            text: "Збільшити баланс",
            callback_data: "tariffs"
        });

        expect(rows[1][0]).toEqual({
            text: "🔙 Назад",
            callback_data: "back_to_main"
        });
    });

})