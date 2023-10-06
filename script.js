var numbers = [0,1,2,3,4,5,6,7,8,9];
var symbols = "!@#$%^&*()_+=".split("")
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("")
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword () {
  var passwordOptions = []
  var finalPassword = []
  var length = prompt("Please choose the length of your Password. Passwords must be between 8 and 128 characters.")
  console.log(length)

  length = Number(length)
  if (length <= 8 && length >=128){
    alert ("Please pick a password between 8 and 128 characters.")
    generatePassword()
  }

  var containsUpper = confirm("Would you like upper case letters in your password?")
  var containsLower = confirm("Would you like lower case letters in your password?")
  var containsSpecial = confirm("Would you like special characters in your password?")
  var containsNumbers = confirm("Would you like numbers in your password?")


  if (containsUpper === true){
    passwordOptions = passwordOptions.concat(uppercaseLetters)
  }
  if (containsLower === true){
    passwordOptions = passwordOptions.concat(lowerCase)
  }
  if (containsSpecial === true){
    passwordOptions = passwordOptions.concat(symbols)
  }
  if (containsNumbers === true){
    passwordOptions = passwordOptions.concat(numbers)
  }
  console.log(passwordOptions)

  for (let index = 0; index < length; index++) {
    finalPassword.push(passwordOptions[ Math.floor(Math.random()*passwordOptions.length)])
    console.log(finalPassword)
  }
  return finalPassword.join("")

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
