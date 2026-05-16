import { InlineKeyboard } from "grammy";

export class ImgKeyboard {
    static getImgMenu(): InlineKeyboard {
        return new InlineKeyboard()
        .text("Скасувати", "back_to_main")
    }
}