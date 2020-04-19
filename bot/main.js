require('dotenv').config();
const Telegraf = require('telegraf');
const logMessage = require('./util');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(async context => {
    let messageContent = `I am a simple dockerized version of Echo Bot (https://github.com/macielti/EchoBotDocker).
    I will reply to every message that you send to me with the same content that you sended.`;
    context.reply(messageContent);

    logMessage(context);

});

bot.on('text', async context => {
    let messageTextContent = await context.update.message.text;
    context.reply(messageTextContent);

    logMessage(context);

});

// start bot
bot.launch();