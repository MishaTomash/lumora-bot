import { PromptsKeyboard } from "../../bot/keyboards/mainPrompts.keyboard";

describe("PromptsKeyboard test", () => {
    it("getpromptsMenu() має повертати правильну структуру кнопок", () => {
        const keyboard = PromptsKeyboard.getpromptsMenu();
        const rows = keyboard.inline_keyboard;

        expect(rows.flat().length).toBe(3);

        expect(rows[0][0]).toEqual({
            text: "✨ Створити промт",
            callback_data: "create_prompt"
        });

        expect(rows[1][0]).toEqual({
            text: "📂 Збережені промти",
            callback_data: "save_prompts"
        });

        expect(rows[2][0]).toEqual({
            text: "🔙 Назад",
            callback_data: "back_to_main"
        })
    })
})