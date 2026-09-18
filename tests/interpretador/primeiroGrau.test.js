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

test("Teste de expressoes invalidas", () => {
    expect(interpretarFuncao("abc")).toBe("nao eh uma expressao valida");

    expect(interpretarFuncao("2x + abc")).toBe("nao eh uma expressao valida");
});
