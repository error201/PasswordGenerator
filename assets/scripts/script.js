// Assignment Code
// Globals (yuck!)
const numerals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var myNumbers = ["0123456789"];
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var specialChar = ["!\"#$%&'()*+,-./:;<=>?@[\\]^_{|}~"]

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var password = generatePassword();
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Check to see if the entered data is numeric.
function isNumeric(myString) {
  for (i = 0; i < myString.length; i++) {
    myChar = myString[i];
    if (!numerals.includes(myChar)) {
      return false;
    } else {
      return true;
    }
  }
}

//prompt for password length.
function getPasswordLength() {
  var passwordLength = prompt("How many characters would you like? (8 to 128)");
  if (isNumeric(passwordLength)) {
    numericLength = Number(passwordLength);
    if (numericLength > 7 && numericLength < 129) {
      return numericLength;
    } else {
      return 0;
    }
  } else {
    return 0;
  }
}

// Main entry point of script.
function generatePassword() {
  var availableCharacters = [];
  var myPasswordLength = getPasswordLength();
  console.log(myPasswordLength);
  var myPassword = "";
  if (myPasswordLength == 0) {
    return '';
  }
  var myLowercase = confirm("Would you like to include lower case letters?");
  var myUppercase = confirm("Would you like to include upper case letters?");
  var myNumeric = confirm("Would you like to include numbers?");
  var mySpecialChars = confirm("Would you like to include special characters?");
  if (myLowercase) {
    availableCharacters = availableCharacters.concat(lowerCase);
  }
  if (myUppercase) {
    availableCharacters = availableCharacters.concat(upperCase);
  }
  if (myNumeric) {
    availableCharacters = availableCharacters.concat(myNumbers);
  }
  if (mySpecialChars) {
    availableCharacters = availableCharacters.concat(specialChar);
  }
  availableCharacters = availableCharacters.join('');
  if (!availableCharacters) {
    alert("You must pick at least one type of character.")
    return '';
  } else {
    passwordArray = []
    for (i = 1; i <= myPasswordLength; i++) {
      randomIndex = Math.floor(Math.random() * availableCharacters.length);
      passwordArray.push(availableCharacters[randomIndex]);
    }
    myPassword = passwordArray.join('');
    return myPassword;
  }
}

