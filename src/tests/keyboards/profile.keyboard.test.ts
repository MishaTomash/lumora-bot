import { ProfileKeyboard } from "../../bot/keyboards/profile.keyboard";

describe("ProfileKeyboard tests", () => {
    it("getProfile має повертати правильну структуру кнопок", () => {
        const keyboard = ProfileKeyboard.getProfile();
        const rows = keyboard.inline_keyboard;

        expect(rows.flat().length).toBe(1);

        expect(rows[0][0]).toEqual({
            text: "🔙 Назад",
            callback_data: "back_to_main",
        });
    });
})