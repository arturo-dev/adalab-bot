module.exports = (message, command, client) => {
  const tips = require(`${__dirname}/../commands/tips`);
  const CHANNEL_DUDES = '547096054575923231';

  client.channels.get(CHANNEL_DUDES).send(`
    @everyone, ${message.author} is blocked. ¿Someone can help?
  `);
  tips(message, command);
};
