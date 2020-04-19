const log4js = require('log4js');

const logger = log4js.getLogger();
logger.level = 'info';

function logMessage(context) {
    let messageTextContent = context.update.message.text;

    // first name of the sender user
    let firstNameFrom = context.update.message.from.first_name;
    // username of the sender user
    let username = context.update.message.from.username;
    // select username or first name
    let userInfo = username? username:firstNameFrom;

    logger.info(`Echoed to ${userInfo}: ${messageTextContent}`);
}

module.exports = logMessage;