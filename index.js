const TOKEN = 'NTQ2ODExNjg0NzYxODk0OTMz.D0trLA.CsC4JA9bkKxITCED_yHSdtI1gPg';
const Discord = require('discord.js');
const client = new Discord.Client();
const dispatcher = require('./dispatcher/dispatcher');
const CHANNEL_GENERAL = '546693851243479053';

client.once('ready', () => {
  console.log(`Ready ${client.user.username}`);

  setInterval(() => {
    client.channels
      .get(CHANNEL_GENERAL)
      .send(
        'Try the ADALAB bot can be helpfull (type !help for available commands), and if you wanna contribute tell to a admin'
      );
  }, 10000000);
});

client.on('message', message => {
  if (message.content.indexOf('!') === 0) {
    dispatcher(message);
  }
});

client.login(TOKEN);
