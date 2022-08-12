// Assignment code here


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
prompt("Please enter the number of characters (OBS. It requires a minimum of 8 characters and maximun of 128");
confirm("Would you like to include lowercase letters in your new password?");
confirm("Would you like to include UPPERCASE leters in your password?");
confirm ("Would you like to include numbers in your new password?");
confirm ("Would you like to include special characters in your new password?")
  
}


