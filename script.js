// Assignment Code
var generateBtn = document.querySelector("#generate");
const alLet = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  symbol: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~", };
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 function generatePassword () {
  var passSet = "";
  var length = Number(prompt("How many characters would you like your password to be?"));
  while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));
  
  var uppers = confirm("Would you like to use uppercase letters?")
  if (uppers) {
    passSet += alLet.uppercase; 
  };
  var lowers = confirm("Would you like to use lowercase letters?")
  if (lowers) {
    passSet += alLet.lowercase;
  };
  var numbers = confirm("Would you like to use numbers?");
  if (numbers) {
    passSet += alLet.number;
  };
  var symbols = confirm("Would you like to use special characters?");
  if (symbols) {
    passSet += alLet.symbol
  }
  while (!uppers && !lowers && !numbers && !symbols) {
    alert("You must select at least one character type!");
    uppers = confirm("Would you like to use uppercase letters?");
    lowers = confirm("Would you like to use lowercase letters?");
    numbers = confirm("Would you like to use numbers?");
    symbols = confirm("Would you like to use special characters?");
  }
  var password = "";
  for (let i = 0; i < length; i++) {
    password += passSet[Math.floor(Math.random() * passSet.length)]
  }
  return password;
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
