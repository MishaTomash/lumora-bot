import "dotenv/config";
import {setupBot} from "./bot/bot"


const token = process.env.TELEGRAM_TOKEN as string;

const bot = setupBot(token);
bot.start();

