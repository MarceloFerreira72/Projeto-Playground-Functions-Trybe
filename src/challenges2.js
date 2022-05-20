// Desafio 11
function checkPhoneNumber(arrayNumbers) {
  if (arrayNumbers.length !== 11) return '1';
}
function generatePhoneNumber(arrayNumbers) {
  if (checkPhoneNumber(arrayNumbers) === '1') return 'Array com tamanho incorreto.';
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
