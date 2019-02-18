module.exports = (message, command) => {
  message.channel.send(`
    Description: ${command.desc}
    - Search in docs, google example, stackoverflow before ask
    - Scope the error to locate where is it
    - Debug might be enablee always
    - Learn how to works with DevTools (Ex: Google Chorme F12) ¡It's so powerfull!
`);
};
