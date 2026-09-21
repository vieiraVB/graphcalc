function interpretarFuncaoSegundoGrau(expressao) {
    expressao = expressao.replaceAll(" ", "");
    expressao = expressao.toLowerCase();

    let termos = expressao.split(/(?=[+-])/);

    let a = 0;
    let b = 0;
    let c = 0;

    for (let termo of termos) {
        if (termo === "+" || termo === "-") {
            return "nao eh uma expressao valida";
        }

        if (termo.includes("x²")) {
            a = termo;
        } else if (termo.includes("x")) {
            b = termo;
        } else {
            c = termo;
        }
    }

    if (a === 0) {
        return "nao eh uma expressao valida";
    }

    if (a === "x²" || a === "+x²" || a === "-x²") {
        if (a === "-x²") {
            a = -1;
        } else {
            a = 1;
        }
    } else {
        a = a.replace("x²", "");
        a = Number(a);
    }

    if (a === 0) {
        return "nao eh uma expressao valida";
    }

    if (b !== 0) {
        if (b === "x" || b === "+x" || b === "-x") {
            if (b === "-x") {
                b = -1;
            } else {
                b = 1;
            }
        } else {
            b = b.replace("x", "");
            b = Number(b);
        }
    }

    c = Number(c);

    if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c)) {
        return "nao eh uma expressao valida";
    }

    return { a, b, c };
}

module.exports = {
    interpretarFuncaoSegundoGrau,
};
