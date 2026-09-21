const {
    interpretarFuncao,
} = require("../../backend/src/interpretador/primeiroGrau");

test("Teste de funções completas", () => {
    expect(interpretarFuncao("2x + 5")).toEqual({
        a: 2,
        b: 5,
    });
    expect(interpretarFuncao("10x + 10")).toEqual({
        a: 10,
        b: 10,
    });
});

test("Teste de coeficientes negativos", () => {
    expect(interpretarFuncao("-3x - 2")).toEqual({
        a: -3,
        b: -2,
    });
    expect(interpretarFuncao("-14x - 21")).toEqual({
        a: -14,
        b: -21,
    });
});

test("Teste de coeficientes implícitos", () => {
    expect(interpretarFuncao("x + 5")).toEqual({
        a: 1,
        b: 5,
    });
    expect(interpretarFuncao("-x - 5")).toEqual({
        a: -1,
        b: -5,
    });
});

test("Teste termo b ausente", () => {
    expect(interpretarFuncao("2x")).toEqual({
        a: 2,
        b: 0,
    });
    expect(interpretarFuncao("-x")).toEqual({
        a: -1,
        b: 0,
    });
});

test("Teste expressao sem espaco", () => {
    expect(interpretarFuncao("2x+5")).toEqual({
        a: 2,
        b: 5,
    });
});

test("Teste expressao com espaco incosistente", () => {
    expect(interpretarFuncao("2x+ 5")).toEqual({
        a: 2,
        b: 5,
    });
});

test("Teste expressao com constante antes do termo", () => {
    expect(interpretarFuncao("5+2x")).toEqual({
        a: 2,
        b: 5,
    });
});

test("Teste expressao termo x depois da constante", () => {
    expect(interpretarFuncao("5+x")).toEqual({
        a: 1,
        b: 5,
    });
});

test("Teste expressao com termo negativo em outra ordem", () => {
    expect(interpretarFuncao("-5+2x")).toEqual({
        a: 2,
        b: -5,
    });
});

test("Teste de coeficiente implícito em outra ordem", () => {
    expect(interpretarFuncao("5+x")).toEqual({
        a: 1,
        b: 5,
    });

    expect(interpretarFuncao("5-x")).toEqual({
        a: -1,
        b: 5,
    });
});

test("Teste de coeficientes maiores", () => {
    expect(interpretarFuncao("100x+500")).toEqual({
        a: 100,
        b: 500,
    });

    expect(interpretarFuncao("-100x-500")).toEqual({
        a: -100,
        b: -500,
    });
});

test("Teste de expressoes invalidas", () => {
    expect(interpretarFuncao("abc")).toBe("nao eh uma expressao valida");

    expect(interpretarFuncao("2x + abc")).toBe("nao eh uma expressao valida");

    expect(interpretarFuncao("5")).toBe("nao eh uma expressao valida");

    expect(interpretarFuncao("abc + 2x")).toBe("nao eh uma expressao valida");

    expect(interpretarFuncao("2xx + 5")).toBe("nao eh uma expressao valida");
});
