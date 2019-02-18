module.exports = message => {
  const commands = require(`${__dirname}/../commands/_commands`);
  const commando = message.content.replace('!', '');
  let found = false;
  for (let i in commands) {
    const cmd = commands[i].cmd;
    if (cmd === commando) {
      found = true;
      require(`${__dirname}/../commands/${commando}`)(message, commands[i]);
    }
  }

  if (!found) {
    message.channel.send(
      'Command not found whrite !help to show what commans aree available'
    );
  }
};
