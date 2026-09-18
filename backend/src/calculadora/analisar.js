const { interpretar } = require("../interpretador/interpretar");
const { analisarFuncaoPrimeiroGrau } = require("./primeiroGrau");
const { analisarFuncaoSegundoGrau } = require("./segundoGrau");

function analisar(expressao) {
    let interpretacao = interpretar(expressao);
    let erro = "funcao invalida";
    let resultado;

    if (interpretacao.erro) {
        return erro;
    } else {
        if (interpretacao.grau === 1) {
            resultado = analisarFuncaoPrimeiroGrau(
                interpretacao.resultado.a,
                interpretacao.resultado.b,
                -10,
                10,
            );
        } else if (interpretacao.grau === 2) {
            resultado = analisarFuncaoSegundoGrau(
                interpretacao.resultado.a,
                interpretacao.resultado.b,
                interpretacao.resultado.c,
                -5,
                5,
            );
        }
    }

    return { ...interpretacao, resultado };
}

module.exports = {
    analisar,
};
