const { analisar } = require("../../backend/src/calculadora/analisar");

console.dir(analisar("2x + 5"), { depth: null });
console.dir(analisar("2x² - 6x + 8"), { depth: null });