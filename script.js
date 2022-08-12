// Assignment code here



var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var randomNumbers = numbers[Math.floor(Math.random() * numbers.length)];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randomLowerCase = lowerCase[Math.floor(Math.random() * lowerCase.length)];
var UpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var randomUpperCase = UpperCase[Math.floor(Math.random() * UpperCase.length)];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"]
var randomSpecialCharacters = specialCharacters [Math.floor(Math.random() * specialCharacters.length)];


console.log(randomNumbers);
console.log(randomLowerCase);
console.log(randomUpperCase);
console.log(randomSpecialCharacters);


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword () {
confirm ("Your password must contain at least 8 characters (no more than 128) and also include at least 1 element of the following types:\nLowercase letter,\nUppercase letter, \nNumber and/or\nSpecial character. ")
var length = prompt("Please enter the number of characters (OBS. It requires a minimum of 8 characters and maximun of 128");
var lowerCaseUser = confirm("Would you like to include lowercase letters in your new password?");
var upperCaseUser = confirm("Would you like to include UPPERCASE leters in your password?");
var numbersUser = confirm ("Would you like to include numbers in your new password?");
var specialCharactersUser = confirm ("Would you like to include special characters in your new password?")
  

}





