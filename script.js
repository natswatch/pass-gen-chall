
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var generatePassword = function() {
    
    var length = getLength();


};

var getLength = function () {

    var slider = document.getElementById("range");
    var output = document.getElementById("number");
    output.innerHTML = slider.value;

    let update = () => output.innerHTML = slider.value;


    slider.addEventListener('input', update);
    return update();
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);