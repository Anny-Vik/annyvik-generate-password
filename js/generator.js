var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var arr3 = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var arr4 = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  " Y",
  "Z",
];
var arr5 = ["!", "#", "$", "%", "&", "@", "^"];

document.getElementById("passwordLength").oninput = function () {
  //slider generation - array length
  document.getElementById("password-length").innerHTML = this.value;
}

generatePassword(); // run the generator

document.getElementById("generate").onclick = generatePassword;
function generatePassword() {
  //check if numbers are included
  var result = [];
  if (document.getElementById("checkNumbers").checked) {
    result = result.concat(arr2);
  }
  //check if lower case are included
  if (document.getElementById("checkLowerCase").checked) {
    result = result.concat(arr3);
  }
  // check if upper case are included
  if (document.getElementById("checkUpperCase").checked) {
    result = result.concat(arr4);
  }
  // check if characters are  included
  if (document.getElementById("checkCharacters").checked) {
    result = result.concat(arr5);
  }
  result.sort(compareRandom); // shuffle array result
 // console.log(result);
 document.getElementById('output').innerHTML = '';
 for (var k = 0; k < 6; k++) {
  var pass = ""; //future password
  var passLength = parseInt(document.getElementById("passwordLength").value); //password length
  for (var i = 0; i < passLength; i++) {
    //cycle through password length
    //pick a random value from an array result
    pass += result[randomInteger(0, result.length - 1)];
  }
  // console.log(pass);
  document.getElementById('output').innerHTML += "<p>" + pass + "</p>";
}
}
function compareRandom(a, b) {
  return Math.random() - 0.5;
}
function randomInteger(min, max) {

  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}