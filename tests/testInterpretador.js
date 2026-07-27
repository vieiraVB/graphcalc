const { interpretarFuncao } = require("../backend/src/interpretador/interpretarFuncao");

console.log(interpretarFuncao("x"));

console.log(interpretarFuncao("2x+5"));

console.log(interpretarFuncao("2x - 5"));

console.log(interpretarFuncao("-x+8"));

console.log(interpretarFuncao("x-3"));

console.log(interpretarFuncao("2x"));

console.log(interpretarFuncao("abc"));

console.log(interpretarFuncao("2x+abc"));

