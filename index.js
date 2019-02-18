const TOKEN = 'NTQ2ODExNjg0NzYxODk0OTMz.D0trLA.CsC4JA9bkKxITCED_yHSdtI1gPg';
const Discord = require('discord.js');
const client = new Discord.Client();
const embed = new Discord.RichEmbed();
const dispatcher = require('./dispatcher/dispatcher');

client.once('ready', () => {
  console.log(`Ready ${client.user.username}`);
});

client.on('message', message => {
  if (message.content.indexOf('!') === 0) {
    dispatcher(message);
  }
});

client.login(TOKEN);

setInterval(() => {
  console.log('Keep alive');
}, 1000);
