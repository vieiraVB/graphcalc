function identificarGrau(expressao) {
    expressao = expressao.replaceAll(" ", "");
    expressao = expressao.toLowerCase();

    let expoente = expressao.indexOf("x²");

    if (expoente === -1) {
        return 1;
    } else {
        return 2;
    }
}

module.exports = {
    identificarGrau,
};
