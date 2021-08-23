// Functions For generating Passwords called GP in Short
// ====================================================
var generator = require("generate-password");

module.exports = {
  GenerateRandomPassword: function GenerateRandomPassword() {
    var password = generator.generate({
      length: 16,
      uppercase: true,
      numbers: true,
      lowercase: true,
      exclude: true,
      symbols: true,
      strict: true,
      excludeSimilarCharacters: false,
    });
    return password;
    console.log(password);
  },
  generateMultiplePasswords: function generateMultiplePasswords(
    passwordCount,
    passwordlength
  ) {
    var passwords = generator.generateMultiple(passwordCount, {
      length: 16,
      uppercase: true,
      numbers: true,
      lowercase: true,
      exclude: true,
      symbols: true,
      strict: true,
      excludeSimilarCharacters: false,
    });

    return passwords;
  },
};
