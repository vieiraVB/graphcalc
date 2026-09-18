const { identificarGrau } = require("../../backend/src/interpretador/identificarGrau");

console.log(identificarGrau("x + 5"));
console.log(identificarGrau("2x - 10"));
console.log(identificarGrau("x² + 3x + 2"));
console.log(identificarGrau("5x² - 8"));