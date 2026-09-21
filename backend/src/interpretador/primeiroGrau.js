function interpretarFuncao(expressao) {
    expressao = expressao.replaceAll(" ", "");
    expressao = expressao.toLowerCase();

    let termos = expressao.split(/(?=[+-])/);
    let a;
    let b;

    if (termos.length < 2) {
        if (termos[0].includes("x")) {
            a = termos[0];
            b = 0;
        } else {
            return "nao eh uma expressao valida";
        }
    } else {
        if (termos[0].includes("x")) {
            a = termos[0];
            b = termos[1];
        } else {
            a = termos[1];
            b = termos[0];
        }
    }

    if (a === "x" || a === "+x" || a === "-x") {
        if (a === "-x") {
            a = -1;
        } else {
            a = 1;
        }
    } else {
        a = a.replace("x", "");
    }

    a = Number(a);
    b = Number(b);

    if (Number.isNaN(a) || Number.isNaN(b)) {
        return "nao eh uma expressao valida";
    }

    return { a, b };
}

module.exports = {
    interpretarFuncao,
};
