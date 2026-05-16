import { MainKeyboard } from "../../bot/keyboards/main.keyboard";

describe("MainKeyboard test", () => {
    it("getMainMenu має повертати правильну структуру кнопок", () => {
        const keyboard = MainKeyboard.getMainMenu();

        const rows = keyboard.inline_keyboard;
        const totalButtons = rows.flat();

        expect(totalButtons.length).toBe(4);
        
        expect(totalButtons[0]).toEqual({
            text: "📝 Промти",
            callback_data: 'main_prompts',
        });
        
        expect(totalButtons[1]).toEqual({
            text: "🎨 Створити зображення",
            callback_data: "main_create_img",
        });

        expect(totalButtons[2]).toEqual({
            text: "💰 Баланс",
            callback_data: "main_balance",
        });

        expect(totalButtons[3]).toEqual({
            text: "Профіль",
            callback_data: "main_profile",
        });
    });
});