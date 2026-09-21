const {
    interpretarFuncaoSegundoGrau,
} = require("../../backend/src/interpretador/segundoGrau");

test("Teste de funções completas", () => {
    expect(interpretarFuncaoSegundoGrau("2x² + 10x + 4")).toEqual({
        a: 2,
        b: 10,
        c: 4,
    });
    expect(interpretarFuncaoSegundoGrau("10x² + 4x + 2")).toEqual({
        a: 10,
        b: 4,
        c: 2,
    });
});

test("Teste de coeficientes negativos", () => {
    expect(interpretarFuncaoSegundoGrau("-3x² - 12x - 1")).toEqual({
        a: -3,
        b: -12,
        c: -1,
    });
    expect(interpretarFuncaoSegundoGrau("-14x² - 5x - 3")).toEqual({
        a: -14,
        b: -5,
        c: -3,
    });
});

test("teste de coeficientes implícitos", () => {
    expect(interpretarFuncaoSegundoGrau("x² + x + 1")).toEqual({
        a: 1,
        b: 1,
        c: 1,
    });
    expect(interpretarFuncaoSegundoGrau("-x² - x - 2")).toEqual({
        a: -1,
        b: -1,
        c: -2,
    });
});

test("teste de termos ausentes", () => {
    expect(interpretarFuncaoSegundoGrau("2x² + 3")).toEqual({
        a: 2,
        b: 0,
        c: 3,
    });
    expect(interpretarFuncaoSegundoGrau("x² + 2x")).toEqual({
        a: 1,
        b: 2,
        c: 0,
    });
});

test("teste de expressoes invalidas", () => {
    expect(interpretarFuncaoSegundoGrau("abcX² + 2x - 2")).toBe(
        "nao eh uma expressao valida",
    );

    expect(interpretarFuncaoSegundoGrau("0x² + 3x + 4")).toBe(
        "nao eh uma expressao valida",
    );

    expect(interpretarFuncaoSegundoGrau("abc")).toBe(
        "nao eh uma expressao valida",
    );

    expect(interpretarFuncaoSegundoGrau("2x + 4")).toBe(
        "nao eh uma expressao valida",
    );

    expect(interpretarFuncaoSegundoGrau("2x² + abc")).toBe(
        "nao eh uma expressao valida",
    );

    expect(interpretarFuncaoSegundoGrau("2x² + +5x + 8")).toBe(
        "nao eh uma expressao valida",
    );

    expect(interpretarFuncaoSegundoGrau("2x² --5x + 8")).toBe(
        "nao eh uma expressao valida",
    );

    expect(interpretarFuncaoSegundoGrau("2x² + 5x abc")).toBe(
        "nao eh uma expressao valida",
    );
});

test("teste de termos em outra ordem", () => {
    expect(interpretarFuncaoSegundoGrau("4 + 10x + 2x²")).toEqual({
        a: 2,
        b: 10,
        c: 4,
    });

    expect(interpretarFuncaoSegundoGrau("10x + 4 + 2x²")).toEqual({
        a: 2,
        b: 10,
        c: 4,
    });

    expect(interpretarFuncaoSegundoGrau("4 + 2x² + 10x")).toEqual({
        a: 2,
        b: 10,
        c: 4,
    });
});

test("teste de sinais em outra ordem", () => {
    expect(interpretarFuncaoSegundoGrau("-4 + 10x + 2x²")).toEqual({
        a: 2,
        b: 10,
        c: -4,
    });

    expect(interpretarFuncaoSegundoGrau("4 - 10x + 2x²")).toEqual({
        a: 2,
        b: -10,
        c: 4,
    });

    expect(interpretarFuncaoSegundoGrau("-4 - 10x - 2x²")).toEqual({
        a: -2,
        b: -10,
        c: -4,
    });
});
