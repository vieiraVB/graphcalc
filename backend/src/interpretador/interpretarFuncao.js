function interpretarFuncao(expressao) {
    expressao = expressao.replaceAll(" ", "");

    let posicaoX = expressao.indexOf("x");

    let erro = "nao eh uma expressao valida";

    let a = expressao.substring(0, posicaoX);
    let b = expressao.substring(posicaoX + 1);
    b = Number(b);
    a = Number(a);

    if(expressao[0] === "x"){
        a = 1;
    } else if (Number.isNaN(a)){
        if(expressao[0] === "-"){
            a = -1;
        } else {
            return erro;
        }
    }

    return {a, b};

}

module.exports = {
    interpretarFuncao
};