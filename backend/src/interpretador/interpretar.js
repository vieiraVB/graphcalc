const { identificarGrau } = require("./identificarGrau");
const { interpretarFuncao } = require("./primeiroGrau");
const { interpretarFuncaoSegundoGrau } = require("./segundoGrau");

function interpretar(expressao) {
    let grau = identificarGrau(expressao);
    let erro = "funcao invalida";
    let resultado;

    if (grau === 1) {
        resultado = interpretarFuncao(expressao);
    } else if (grau === 2) {
        resultado = interpretarFuncaoSegundoGrau(expressao);
    } else {
        return erro;
    }

    return { grau, resultado };
}

module.exports = {
    interpretar,
};
