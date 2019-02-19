module.exports = (message, command) => {
  const commands = require(`${__dirname}/../commands/_commands`);
  const info = [];

  for (var i in commands) {
    info.push(`- !${commands[i].cmd}: ${commands[i].desc}`);
  }

  message.channel.send(`
    ${message.author.username} I've DM'd you a list of my commands.
  `);
  message.author.send(
    `
    Description: ${command.desc}
    Prefix for commands are: !
    Available commands: \n${info.join('\n')}
    `
  );
};
