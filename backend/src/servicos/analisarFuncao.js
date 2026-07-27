const { interpretarFuncao } = require("../interpretador/interpretarFuncao");
const primeiroGrau = require("../calculadora/primeiroGrau");


function analisarFuncao(expressao){

    let coeficientes = interpretarFuncao(expressao);

    if(typeof coeficientes === "string"){
        return coeficientes;
    }

    let resultado = primeiroGrau.analisarFuncaoPrimeiroGrau(
        coeficientes.a,
        coeficientes.b,
        coeficientes.c
    );

    return {
        Funcao: expressao,
        ...resultado,
    }
}


module.exports = {
    analisarFuncao
};