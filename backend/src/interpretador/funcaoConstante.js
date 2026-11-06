function interpretarFuncaoConstante(expressao) {
    expressao = expressao.replaceAll(" ", "");

    if (!/^[+-]?\d+(\.\d+)?$/.test(expressao)) {
        return "nao eh uma expressao constante valida";
    }

    let b = Number(expressao);

    return { a: 0, b };
}

module.exports = {
    interpretarFuncaoConstante,
};
