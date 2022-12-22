// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Check to see if the entered data is numeric.
function isNumeric(myString) {
  const numerals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  for (i = 0; i < myString.length; i++) {
    myChar = myString[i];
    if (!numerals.includes(myChar)) {
      return false;
    } else {
      return true;
    }
  }
}

//prompt for password criteria.
function getPasswordLength() {
  var passwordLength = prompt("How many characters would you like? (8 to 128)");
  if (isNumeric(passwordLength)) {
    console.log("password is numeric.")
    numericLength = Number(passwordLength);
    if (numericLength > 7 && numericLength < 129) {
      console.log("password is valid number.")
    } else {
      console.log("password is not a valid number.")
    }
  } else {
    console.log("password is not numeric.");
  }
}

getPasswordLength();
