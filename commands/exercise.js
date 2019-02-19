module.exports = (message, command) => {
  const exercises = [
    'Copy a small page and validate with https://validator.w3.org/',
    'Make a form ajax and comunicate with https://www.mocky.io/',
    'Take and idea and start it with the UI',
    'Copy a functionality on other framework',
    "Learn something like you don't know well on https://developer.mozilla.org/es/",
    'Create an scaffolding'
  ];
  message.author.send(
    `
    Here we go:
    ------------------------
    *** ${exercises[Math.floor(Math.random() * exercises.length) + 0]} ***
    ------------------------
    If you want to add an exercise for others tell us and we add it.
    `
  );
};
