require('dotenv').config();
const Telegraf = require('telegraf');
const log4js = require('log4js');

const logger = log4js.getLogger();
logger.level = 'info';

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.on('text', async context => {
        let messageTextContent = await context.update.message.text;
        context.reply(messageTextContent);

        // first name of the sender user
        let firstNameFrom = context.update.message.from.first_name;
        // username of the sender user
        let username = context.update.message.from.username;
        // select username or first name
        let userInfo = username? username:firstNameFrom;

        logger.info(`Echoed to ${userInfo}: ${messageTextContent}`);
    }
);

// start bot
bot.launch();