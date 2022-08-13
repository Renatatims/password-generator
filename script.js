// Variables - lowerCase, UpperCase, numbers and special Characters //

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var UpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"]

// Random Variables - lowerCase, UpperCase, numbers and special Characters//

var randomLowerCase = lowerCase[Math.floor(Math.random() * lowerCase.length)];
var randomUpperCase = UpperCase[Math.floor(Math.random() * UpperCase.length)];
var randomNumbers = numbers[Math.floor(Math.random() * numbers.length)];
var randomSpecialCharacters = specialCharacters [Math.floor(Math.random() * specialCharacters.length)];

// Console.log random variables - check if it's working in the console //

console.log(randomLowerCase);
console.log(randomUpperCase);
console.log(randomNumbers);
console.log(randomSpecialCharacters);


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Function - Generate Password //

function generatePassword () {

// Window Prompts and Confirm messages:

confirm ("Your password must contain at least 8 characters (no more than 128) and also include at least 1 element of the following types:\nLowercase letter,\nUppercase letter, \nNumber and/or\nSpecial character. ")
var passwordLength = prompt("Please enter the number of characters (OBS. It requires a minimum of 8 characters and maximun of 128");
var lowerCaseUser = confirm("Would you like to include lowercase letters in your new password?");
var UpperCaseUser = confirm("Would you like to include UPPERCASE leters in your password?");
var numbersUser = confirm ("Would you like to include numbers in your new password?");
var specialCharactersUser = confirm ("Would you like to include special characters in your new password?")

// Variables to track the user's response.//
// "passwordCount" variable refers to the total number of characters that will be included in the Password, depending on the user's choice //

var passwordCount = 0
var lowerCaseCount = "";
var UpperCaseCount = "";
var numbersCount = "";
var specialCharactersCount="";


// If statements for each Character type. If they are chosen by the user, it will have an increment in the passwordCount variable//
  
if (lowerCaseUser) {
  lowerCaseCount = randomLowerCase;
  passwordCount++;
} 

if (UpperCaseUser) {
  UpperCaseCount = randomUpperCase;
  passwordCount++;
}

if (numbersUser) {
  numbersCount = randomNumbers;
  passwordCount++;
}

if (specialCharactersUser){
  specialCharactersCount = randomSpecialCharacters;
  passwordCount++;
}



// Loop to get random Characters:

var randomPassword = "";

for (var i = 0; i < passwordLength - passwordCount; i++) {

//* Included an if statement in case the user decides not to include Numbers in the password *//  

  if (numbersUser===false) {
    var randomNoNumber = lowerCase[Math.floor(Math.random() * lowerCase.length)]
    randomPassword += randomNoNumber;

  } else {
    var randomCharacters = numbers[Math.floor(Math.random() * numbers.length)];
    randomPassword += randomCharacters;
  }
         
  }

// LowerCase, Upper Case and Special Characters inside the Password //
  randomPassword += lowerCaseCount;
  randomPassword += UpperCaseCount;
  randomPassword += numbersCount;
  randomPassword += specialCharactersCount;

  return randomPassword;
}






//for (var i = 0; i < (passwordLength - passwordCount); i++);
 // if (!numbersUser){
//    var randomNoNumber = lowerCase[Math.floor(Math.random() * lowerCase.length)];
  
//    randomPassword += randomNoNumber;

  
//} else { 
//  var randomCharacters = Math.floor(Math.random() * 10);




