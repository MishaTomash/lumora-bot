import { ImgKeyboard } from "../../bot/keyboards/mainImg.keyboard";

describe("ImgKeyboard test", () => {

    it("getImgMenu() має повертати правильну структуру кнопок", () => {
        const keyboard = ImgKeyboard.getImgMenu();

        const rows = keyboard.inline_keyboard;
        expect(rows.length).toBe(1);

        expect(rows[0][0]).toEqual({
            text: "Скасувати",
            callback_data: "back_to_main",
        });
    })
})