var gp = require("./generatePasswordFunctions");

module.exports = {
  // Get Password Count
  // getPasswordscount: async function getPasswordscount(ctx, bot, passwordCount) {
  //   await ctx.reply(
  //     "How many passwords you want to create? Please enter a number"
  //   );
  //   bot.on("message",  (ctx) => {
  //     passwordCount = await ctx.message.text;
  //     console.log(passwordCount);
  //   });
  //   verifyNumber(passwordCount);
  //   // Verify number
  //   function verifyNumber(number) {
  //     if (isNaN(number)) {
  //       ctx.reply(
  //         `${number} is a invalid number. :( Please enter a valid number!`
  //       );
  //     }
  //     return true;
  //   }
  // },
  // Get password Length
  getPasswordLength: async function getPasswordLength(ctx, bot) {
    await ctx.reply(
      "◉ Enter password Length (How long the password should be 16 is recommended)"
    );
    console.log("HIIIIIIIIIIIIII");

    await bot.on("message", (ctx) => {
      console.log(ctx.message);
      // passwordLength = ctx.message.text;
      // console.log(passwordLength);
    });
    // `Generating ${passwordCount} Passwords.`;
  },

  // get Passwords and check number type
  GetPaswords: async function GetPaswords(ctx, passwordCount) {
    // GetPaswords: async function GetPaswords(ctx, passwordCount, passwordLength) {
    // if (isNaN(passwordCount)) {
    //   await ctx.reply(
    //     `${passwordCount} is a invalid number. :( Please enter a valid number!`
    //   );
    // if (await passwordLength) {
    //   ctx.reply(
    //     `${passwordLength} is a invalid number. :( Please enter a valid number!`
    //   );
    // }
    // } else {
    //   await ctx.reply(
    //     `Generating ${passwordCount} Passwords.`
    //     // `Generating ${passwordCount} Passwords With ${passwordLength} Characters`
    //   );
    //   await gp
    //     .generateMultiplePasswords(passwordCount)
    //     // .generateMultiplePasswords(passwordCount, passwordLength)
    //     .forEach((password) => {
    //       ctx.reply(password);
    //     });
    // }
  },
  // Send Welcome Message
  sendWelcomeMessage: async function sendWelcomeMessage(ctx) {
    ctx.reply(
      `Hello ${ctx.from.username}
       \nWelcome! How can I help You? This are the available commands I can perform.\n
    ‣ ${"/generatepassword"}
    ‣ ${"/generateMultiplePasswords"}
    `
    );
  },
  // Generate Single Password
  generatepassword: async function generatePassword(ctx) {
    ctx.reply("◉ Generating Secure password...");
    await ctx.reply(gp.GenerateRandomPassword());
    ctx.reply(
      `Click ‣ ${"/generatepassword"} to generate password again.\nor generate multiple passwords ‣ ${"/generateMultiplePasswords"}`
    );
  },
};
