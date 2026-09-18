const { identificarGrau } = require("./identificarGrau");
const { interpretarFuncao } = require("./primeiroGrau");
const { interpretarFuncaoSegundoGrau } = require("./segundoGrau");

function interpretar(expressao) {
    let grau = identificarGrau(expressao);
    let resultado;

    if (grau === 1) {
        resultado = interpretarFuncao(expressao);
    } else if (grau === 2) {
        resultado = interpretarFuncaoSegundoGrau(expressao);
    } else {
        return { erro: true };
    }

    if (typeof resultado === "string") {
        return { erro: true };
    }

    return { grau, resultado };
}

module.exports = {
    interpretar,
};
