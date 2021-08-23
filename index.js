const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 8000;
// const { Telegraf } = require("telegraf");
const { Composer } = require("micro-bot");

var generator = require("generate-password");
var bf = require("./botFunctions");
var gp = require("./generatePasswordFunctions");

// BOT
// const bot = new Telegraf(process.env.BOT_TOKEN);
const bot = new Composer();

bot.start((ctx) => bf.sendWelcomeMessage(ctx));

// Single Password
bot.command("generatepassword", (ctx) => {
  bf.generatepassword(ctx);
});
//Multiple
var passwordCount;
bot.command("generateMultiplePasswords", async (ctx) => {
  await ctx.reply(
    "◉ How many passwords you want to create? Please enter a number"
  );
  bot.on("message", async (ctx) => {
    passwordCount = await ctx.message.text;
    if (isNaN(passwordCount)) {
      await ctx.reply(
        `${passwordCount} is a invalid number. :( Please enter a valid number!`
      );
    } else {
      ctx.reply(`◉ Generating ${passwordCount} secure Passwords...`);
      gp.generateMultiplePasswords(passwordCount).forEach((password) => {
        ctx.reply(password);
      });
    }
  });
  await bf.GetPaswords(ctx, passwordCount);
});

bot.command("quit", (ctx) => {
  ctx.reply(
    `Make sure to keep your passwords secured and in safe 🔐\nHave a good day ${ctx.from.first_name}\nSee you soon 😉`
  );
  ctx.reply(`Click ‣ ${"/start"} to begin again.`);
  process.once("SIGINT", () => bot.stop("SIGINT"));
  process.once("SIGTERM", () => bot.stop("SIGTERM"));
});
// bot.launch();
module.exports = bot;

// Bot End

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
