const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 8000;
const { Telegraf } = require("telegraf");
var generator = require("generate-password");
var bf = require("./botFunctions");
var gp = require("./generatePasswordFunctions");

// BOT
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => bf.sendWelcomeMessage(ctx));

// Bot Commands
// Single Password
bot.command("generatepassword", (ctx) => {
  bf.generatepassword(ctx);
});

//Multiple
var passwordCount;
var passwordLength;
bot.command("generateMultiplePasswords", async (ctx) => {
  // Get user input for password count
  await ctx.reply(
    "◉ How many passwords you want to create? Please enter a number"
  );
  bot.on("message", async (ctx) => {
    passwordCount = await ctx.message.text;
    // console.log(passwordCount);
    if (isNaN(passwordCount)) {
      await ctx.reply(
        `${passwordCount} is a invalid number. :( Please enter a valid number!`
      );
    } else {
      // await ctx
      //   .reply
      // Get user input for password length
      // await bf.getPasswordLength(ctx, bot)
      // `Generating ${passwordCount} Passwords With ${passwordLength} Characters`
      // ();
      ctx.reply(`◉ Generating ${passwordCount} secure Passwords...`);
      gp.generateMultiplePasswords(passwordCount)
        // .generateMultiplePasswords(passwordCount, passwordLength)
        .forEach((password) => {
          ctx.reply(password);
        });
    }
  });
  // Get user input for password length
  // await bf.getPasswordLength(ctx);
  // bot.on("message", (ctx) => {
  //   passwordLength = ctx.message.text;
  //   console.log(passwordLength);
  // });
  // Call final Function to get passwords.
  await bf.GetPaswords(ctx, passwordCount);
  // await bf.GetPaswords(ctx, passwordCount, passwordLength);
});

bot.launch();
bot.command("quit", (ctx) => {
  ctx.reply(
    `Make sure to keep your passwords secured and in safe 🔐\nHave a good day ${ctx.from.first_name}\nSee you soon 😉`
  );
  ctx.reply(`Click ‣ ${"/start"} to begin again.`);
  // Enable graceful stop
  process.once("SIGINT", () => bot.stop("SIGINT"));
  process.once("SIGTERM", () => bot.stop("SIGTERM"));
});
// Bot End

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
