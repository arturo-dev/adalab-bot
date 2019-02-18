const config = require('./../config');

module.exports = message => {
  const commands = require(`${__dirname}/../commands/_commands`);
  const commando = message.content.replace('!', '');
  let found = false;

  if (config.dev) {
    require(`${__dirname}/../commands/${config.command}`)(message, commands[i]);
    return;
  }

  for (let i in commands) {
    const cmd = commands[i].cmd;
    if (cmd === commando) {
      found = true;
      require(`${__dirname}/../commands/${commando}`)(message, commands[i]);
    }
  }

  if (!found) {
    message.channel.send(
      'Command not found whrite !help to show what commans are available'
    );
  }
};
