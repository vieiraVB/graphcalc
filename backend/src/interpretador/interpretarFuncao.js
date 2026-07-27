function interpretarFuncao(expressao) {
    expressao = expressao.replaceAll(" ", "");
    expressao = expressao.toLowerCase();

    let posicaoX = expressao.indexOf("x");

    let erro = "nao eh uma expressao valida";

    if (posicaoX === -1) {
        return erro;
    }

    let a = expressao.substring(0, posicaoX);
    let b = expressao.substring(posicaoX + 1);
    let textoB = expressao.substring(posicaoX + 1);
    b = Number(b);
    a = Number(a);

    if (expressao[0] === "x") {
        a = 1;
    } else if (Number.isNaN(a)) {
        if (expressao[0] === "-") {
            a = -1;
        } else {
            return erro;
        }
    }

    if (textoB === "") {
        b = 0;
    } else {
        b = Number(textoB);

        if (Number.isNaN(b)) {
            return erro;
        }
    }

    return { a, b };
}

module.exports = {
    interpretarFuncao
};