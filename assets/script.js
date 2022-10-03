// Assignment code here
// List of password character options
var lowercaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "=", "<", ">", "_", "-", "?"];
var possibleChar = [];

// User submitted vaules for password length or canceling out of initial window prompt
function generatePassword() {
var passwordLength = prompt("How many characters would you like in your password?");
if (!passwordLength) {
  return};

if (passwordLength < 8 || passwordLength > 128) {
  alert("Password must be between 8 and 128 characters.")
  var passwordLength = prompt("How many characters would you like in your password?");
  } else (isNaN(passwordLength)) {
  alert("Please enter a valid number.");
  var passwordLength = prompt("How many characters would you like in your password?");
} 
  alert("Your password will have "+ passwordLength +" characters.");



//User confirmation of password options
confirmLowercase = confirm("Would you like to add lower-case letters?");
if (confirmLowercase) {
  alert("Your password will have lower-case letters.");
} else {
   alert("Your password will not have lower-case letters.");
}

confirmUppercase = confirm("Would you like to add upper-case letters?");
if (confirmUppercase) {
  alert("Your password will have upper-case letters.");
} else {
  alert("Your password will not have upper-case letters.");
}

confirmNumbers = confirm("Would you like to add numbers?");
if (confirmNumbers) {
  alert("Your password will have numbers.");
} else {
  alert("Your password will not have numbers.")
}

confirmSpecialchars = confirm("Would you like to add special characters?");
if (confirmSpecialchars) {
  alert("Your password will have special characters.");
} else {
  alert("Your password will not have special characters.")
}

// If user does not select any options, will be prompted to select at least one
if (confirmLowercase === false && confirmUppercase === false && confirmNumbers === false && confirmSpecialchars === false) {
  alert("You must choose at least one option.");

  confirmLowercase = confirm("Would you like to add lower-case letters?");
  if (confirmLowercase) {
    alert("Your password will have lower-case letters.");
  } else {
     alert("Your password will not have lower-case letters.");
  }
  
  confirmUppercase = confirm("Would you like to add upper-case letters?");
  if (confirmUppercase) {
    alert("Your password will have upper-case letters.");
  } else {
    alert("Your password will not have upper-case letters.");
  }
  
  confirmNumbers = confirm("Would you like to add numbers?");
  if (confirmNumbers) {
    alert("Your password will have numbers.");
  } else {
    alert("Your password will not have numbers.")
  }
  
  confirmSpecialchars = confirm("Would you like to add special characters?");
  if (confirmSpecialchars) {
    alert("Your password will have special characters.");
  } else {
    alert("Your password will not have special characters.")
  }
}

//Combining the user selected options
if (confirmLowercase) {
  possibleChar = possibleChar.concat(lowercaseChar);
}

if (confirmUppercase) {
  possibleChar = possibleChar.concat(uppercaseChar);
}

if (confirmNumbers) {
  possibleChar = possibleChar.concat(numbers);
}

if (confirmSpecialchars) {
  possibleChar = possibleChar.concat(specialChar);
}


// Creation of user password
let randomPassword = ""
for (let i = 0; i < passwordLength; i++) {
  let rng = [Math.floor(Math.random() * possibleChar.length)];
  randomPassword = randomPassword + possibleChar[rng];
  }
  return randomPassword;
}


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
