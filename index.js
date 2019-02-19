const TOKEN = 'NTQ2ODExNjg0NzYxODk0OTMz.D0trLA.CsC4JA9bkKxITCED_yHSdtI1gPg';
const Discord = require('discord.js');
const client = new Discord.Client();
const dispatcher = require('./dispatcher/dispatcher');
const CHANNEL_GENERAL = '546693851243479053';

client.once('ready', () => {
  console.log(`Ready ${client.user.username}`);
  setInterval(() => {
    client.channels.get(CHANNEL_GENERAL).send(
      `
      Try the ADALAB bot can be helpfull (type !help for available commands)
      Try the Google bot (type g!help for available commands)
      If you wanna contribute tell it to an admin'
      `
    );
  }, 540000);
});

client.on('message', message => {
  if (message.content.indexOf('!') === 0) {
    dispatcher(message, client);
  }
});

client.login(TOKEN);
