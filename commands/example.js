module.exports = (message, command) => {
  message.author.send(
    `
    Here are the examples:
    ------------------------
    *** NodeJS: https://github.com/arturo-dev/adalab-bot ***
    *** Spring-boot: https://github.com/arturo-dev/aerine-api ***
    *** Ionic (Angular): https://github.com/arturo-dev/aerine-ui ***
    *** Angular / Material: https://github.com/arturo-dev/san-hiring ***  
    ------------------------
    If you want to add an exercise for others tell us and we add it.
    `
  );
};
