import { setupBot } from "../bot/bot";
import { Bot } from "grammy";
import { BotCommands } from "../bot/commands";

jest.mock('grammy');
jest.mock("../bot/commands");

describe('setupBot', () => {
    const mockToken = "testTelegramToken";

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("повинен ініціалізувати бота з переданим токеном", () => {
        setupBot(mockToken);

        expect(Bot).toHaveBeenCalledTimes(1);
        expect(Bot).toHaveBeenCalledWith(mockToken);
    });

    it("повинен створити екземпляр BotCommands та викликати метод render", () => {
        const bot = setupBot(mockToken);

        expect(BotCommands).toHaveBeenCalledTimes(1);
        expect(BotCommands).toHaveBeenCalledWith(bot);

        const mockBotCommandsInstance = jest.mocked(BotCommands).mock.instances[0];

        expect(mockBotCommandsInstance.render).toHaveBeenCalledTimes(1);
    })
})