// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  let totalArea = (base * height) / 2;
  return totalArea;
}

// Desafio 3
function splitSentence(sentence) {
  let array = sentence.split(' ');
  return array;
}

// Desafio 4
function concatName(arrayString) {
  let string = `${arrayString[arrayString.length - 1]}, ${arrayString[0]}`;
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties;
  return points;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let biggestNumber = arrayNumbers.reduce(function (a, b) {
    return Math.max(a, b);
  }, -Infinity);
  let timesRepeat = 0;
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (biggestNumber === arrayNumbers[i]) timesRepeat += 1;
  }
  return timesRepeat;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
