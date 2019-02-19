module.exports = (message, command) => {
  message.channel.send(`
    ${message.author}, here are the tips:
    - It's better to learn HTML, JS and CSS than a framework. Frameworks are created or modified every day.
    - Search in docs, google example, stackoverflow before ask.
    - Scope the error to locate where is it.
    - Debug might be enabled always.
    - Learn how to works with DevTools (Ex: Google Chorme F12) ¡It's so powerfull!
    - Learn something on material desing. It's googles's UI / UX (https://material.io/)
    - If the framework have a cli, work with it, you where able to be more faster in a future.
    - If you are stucked, take a coffee, and relax to clear the mind.
`);
};
