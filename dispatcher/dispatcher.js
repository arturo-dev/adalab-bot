const config = require('./../config');

module.exports = (message, client) => {
  const commands = require(`${__dirname}/../commands/_commands`);
  const commando = message.content.replace('!', '');
  let found = false;

  if (config.dev) {
    require(`${__dirname}/../commands/${config.command}`)(
      message,
      commands[i],
      client
    );
    return;
  }

  for (let i in commands) {
    const cmd = commands[i].cmd;
    if (cmd === commando) {
      found = true;
      require(`${__dirname}/../commands/${commando}`)(
        message,
        commands[i],
        client
      );
    }
  }

  if (!found) {
    message.channel.send(
      'Command not found whrite !help to show what commans are available'
    );
  }
};
