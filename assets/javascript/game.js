// array of 3-letter words
var words = [
  ["d", "o", "g"],
  ["c", "a", "t"],
  ["p", "i", "g"],
  ["f", "o", "o", "d"],
];

// computer chooses random word from array of words and stores it in a variable
var item = words[Math.floor(Math.random() * words.length)];

// placeholder variables "_,_,_"
var placeholder = ""

function wordReplace(word) {
  for (var i = 0; i < item.length; i++) {
    placeholder = placeholder + "_ ";
  }
  return placeholder;
};

// set available guesses to 9
var guesses = 9;

console.log(item);

function letterReplace(word) {
  document.getElementById("placeholder").innerHTML = playerGuess
}

function getPosition(element, array) {
  for (i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return i;
    }
  }
}

// start a loop

document.onkeyup = function (event) {
  var playerGuess = event.key;
  if (item.includes(playerGuess)) {
    for (j = 0; j < item.length; j++) {
      
      console.log(getPosition(playerGuess, item));
    }
    console.log("yes");
  }
  else {
    console.log("no");
  }
};



// player types a letter to guess

// if guess is in word, print letter in its position in the word

// if guess is not in word, capture and print to list of incorrect guesses

// restart game when available guesses reaches 0