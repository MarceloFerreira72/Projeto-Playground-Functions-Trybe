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

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
