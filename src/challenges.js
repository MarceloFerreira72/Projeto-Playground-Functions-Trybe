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
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) return 'cat1';
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) return 'cat2';
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
// tentar com for/of ou for/in, tentar com replace
function fizzBuzz(arrayNumbers) {
  let arrayString = [''];
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (arrayNumbers[i] % 15 === 0) {
      arrayString[i] = 'fizzBuzz';
    } else if (arrayNumbers[i] % 3 === 0) {
      arrayString[i] = 'fizz';
    } else if (arrayNumbers[i] % 5 === 0) {
      arrayString[i] = 'buzz';
    } else {
      arrayString[i] = 'bug!';
    }
  }
  return arrayString;
}

// Desafio 9
function encode(string) {
  let encondedString;
  encondedString = string.replace(/a/g, '1');
  encondedString = encondedString.replace(/e/g, '2');
  encondedString = encondedString.replace(/i/g, '3');
  encondedString = encondedString.replace(/o/g, '4');
  encondedString = encondedString.replace(/u/g, '5');
  return encondedString;
}
function decode(encodedString) {
  let decodedString;
  decodedString = encodedString.replace(/1/g, 'a');
  decodedString = decodedString.replace(/2/g, 'e');
  decodedString = decodedString.replace(/3/g, 'i');
  decodedString = decodedString.replace(/4/g, 'o');
  decodedString = decodedString.replace(/5/g, 'u');
  return decodedString;
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
