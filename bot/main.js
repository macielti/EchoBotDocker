require('dotenv').config();
const Telegraf = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.on('text', context => {
        let messageTextContent = context.update.message.text;
        context.reply(messageTextContent);
    }
);

// start bot
bot.launch();