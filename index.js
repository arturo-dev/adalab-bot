const TOKEN = 'NTQ2ODExNjg0NzYxODk0OTMz.D0trLA.CsC4JA9bkKxITCED_yHSdtI1gPg';
const Discord = require('discord.js');
const client = new Discord.Client();
const dispatcher = require('./dispatcher/dispatcher');
const CHANNEL_BOT = '547413680892149761';

const MESSAGES_BOT = [
  `
  Try the ADALAB bot can be helpfull (type !help for available commands)
  Try the Google bot (type g!help for available commands)
  If you wanna contribute tell it to an admin'
  `,
  'If you are bored do an exercise or learn more',
  'You can watch and contribute me, my code is on https://github.com/arturo-dev/adalab-bot'
];

client.once('ready', () => {
  console.log(`Ready ${client.user.username}`);
  setInterval(() => {
    client.channels
      .get(CHANNEL_BOT)
      .send(MESSAGES_BOT[Math.floor(Math.random() * MESSAGES_BOT.length) + 0]);
  }, 540000);
});

client.on('message', message => {
  if (message.content.indexOf('!') === 0) {
    dispatcher(message, client);
  }
});

client.login(TOKEN);
