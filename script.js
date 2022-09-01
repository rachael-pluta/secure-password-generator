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
  var passwordSize = prompt("How many characters do you want your password to be?");
  if (passwordSize >= 8 && passwordSize <= 128) {
    var checkLowerCase = confirm("Do you want lowercase characters?");
    var checkUpperCase = confirm("Do you want uppercase characters?");
    var checkNumber = confirm("Do you want numbers?");
    var checkSymbol = confirm("Do you want symbols?");
    for (var i = 0; i < passwordSize; i++) {
      if (checkLowerCase === true && finalPassword.length < passwordSize) {
        var position = Math.floor(Math.random() * 26);
        finalPassword = finalPassword + lowerCase[position];
      }
      if (checkUpperCase === true && finalPassword.length < passwordSize) {
        var position = Math.floor(Math.random() * 26);
        finalPassword = finalPassword + upperCase[position];
      }
      if (checkNumber === true && finalPassword.length < passwordSize) {
        var position = Math.floor(Math.random() * 10);
        finalPassword = finalPassword + number[position];
      }
      if (checkSymbol === true && finalPassword.length < passwordSize) {
        var position = Math.floor(Math.random() * 10);
        finalPassword = finalPassword + symbol[position];
      }
    }
  }
  else {
    alert("Invalid entry.")
  }
  return finalPassword
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

