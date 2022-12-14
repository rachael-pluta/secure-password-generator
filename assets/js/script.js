// Characters for password
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "1234567890";
const symbol = "!@#$%^&*()";


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var finalPassword = "";
  var passwordSize = prompt("How long do you want your password to be?");

  // Sets the length parameters of the password and asks the user what type of characters they want
  if (passwordSize >= 8 && passwordSize <= 128) {
    var checkLowerCase = confirm("Do you want lowercase characters in your password?");
    var checkUpperCase = confirm("Do you want uppercase characters in your password?");
    var checkNumber = confirm("Do you want numbers in your password?");
    var checkSymbol = confirm("Do you want symbols in your password?");

  // Includes lowercase characters in final password if selected
    for (var i = 0; i < passwordSize; i++) {
      if (checkLowerCase === true && finalPassword.length < passwordSize) {
        var position = Math.floor(Math.random() * 26);
        finalPassword = finalPassword + lowerCase[position];
      }
  // Includes uppercase characters in final password if selected
      if (checkUpperCase === true && finalPassword.length < passwordSize) {
        var position = Math.floor(Math.random() * 26);
        finalPassword = finalPassword + upperCase[position];
      }
  // Includes numbers in final password if selected
      if (checkNumber === true && finalPassword.length < passwordSize) {
        var position = Math.floor(Math.random() * 10);
        finalPassword = finalPassword + number[position];
      }
  // Includes symbols in final password if selected
      if (checkSymbol === true && finalPassword.length < passwordSize) {
        var position = Math.floor(Math.random() * 10);
        finalPassword = finalPassword + symbol[position];
      }
    }
  }

  // Alerts invalid entry and ends function if requested password length does not meet length parameters
  else {
    alert("Sorry!  Your password must be between 8 and 128 characters long!")
  }
  return finalPassword
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

