function interpretarFuncaoSegundoGrau(expressao) {
    expressao = expressao.replaceAll(" ", "");
    expressao = expressao.toLowerCase();

    let posicaoX = expressao.indexOf("x");
    let segundoX = expressao.indexOf("x", posicaoX + 1);
    let erro = "nao eh uma expressao valida";

    if (posicaoX === -1) {
        return erro;
    }

    let a = expressao.substring(0, posicaoX);
    let b = expressao.substring(posicaoX + 2, segundoX);
    let c;
    let textoC;
    let expoente = expressao.substring(posicaoX + 1, posicaoX + 2);
    a = Number(a);

    if (expoente === "²") {
        if (expressao[0] === "x") {
            a = 1;
        } else if (Number.isNaN(a)) {
            if (expressao[0] === "-") {
                a = -1;
            } else if (expressao[0] === "+") {
                a = 1;
            } else {
                return erro;
            }
        }

        if (b === "") {
            if (expressao[segundoX - 1] === "-") {
                b = -1;
            } else if (expressao[segundoX - 1] === "+") {
                b = 1;
            } else {
                b = 0;
            }
        } else {
            b = Number(b);
        }

        if (segundoX > 0) {
            textoC = expressao.substring(segundoX + 1);

            if (textoC === "") {
                c = 0;
            } else {
                c = Number(textoC);

                if (Number.isNaN(c)) {
                    return erro;
                }
            }
        } else {
            textoC = expressao.substring(posicaoX + 2);
            if (textoC === "") {
                c = 0;
            } else {
                c = Number(textoC);

                if (Number.isNaN(c)) {
                    return erro;
                }
            }

            b = 0;
        }
    } else {
        return erro;
    }

    if (a === 0) {
        return erro;
    }

    if (Number.isNaN(b)) {
        return erro;
    }

    return { a, b, c };
}

module.exports = {
    interpretarFuncaoSegundoGrau,
};
