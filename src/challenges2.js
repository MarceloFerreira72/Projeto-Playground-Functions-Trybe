// Desafio 11
function checkPhoneNumber(arrayNumbers) {
  if (arrayNumbers.length !== 11) return '1';
}
function checkPhoneNumber2(arrayNumbers) {
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] < 0 || arrayNumbers[index] > 9) return '1';
    let repeticao = 0;
    for (let i = index + 1; i < arrayNumbers.length; i += 1) {
      if (arrayNumbers[index] === arrayNumbers[i]) repeticao += 1;
    }
    if (repeticao >= 2) return '1';
  }
}
function generatePhoneNumber(arrayNumbers) {
  if (checkPhoneNumber(arrayNumbers) === '1') return 'Array com tamanho incorreto.';
  if (checkPhoneNumber2(arrayNumbers) === '1') {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let phoneNumber = '('
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (phoneNumber.length === 3) phoneNumber += ') ';
    if (phoneNumber.length === 10) phoneNumber += '-';
    phoneNumber += arrayNumbers[i];  
  }
  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  function compararNumeros(a, b) {
    return a - b;
  }
  let array = [lineA, lineB, lineC].sort(compararNumeros);
  if (array[2] > array[0] + array[1]) return false;
  return true;
}

// Desafio 13
function justNumbers(text) {
  let numbers = text.replace(/[^0-9]/g,'');
  return numbers;
}
function hydrate(string) {
  let numbersString = justNumbers(string);
  let arrayNumbers = numbersString.split('');
  let coupsOfWater = 0;
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    coupsOfWater += parseInt(arrayNumbers[i], 10);
  }
  if (coupsOfWater === 1) return "1 copo de água";
  return `${coupsOfWater} copos de água`;
}
module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
