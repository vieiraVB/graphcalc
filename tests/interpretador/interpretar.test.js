const { interpretar } = require("../../backend/src/interpretador/interpretar");

test("Teste de integração", () => {
    expect(interpretar("2x + 5")).toEqual({
        grau: 1,
        resultado: {
            a: 2,
            b: 5,
        },
    });
    expect(interpretar("2x² - 6x + 8")).toEqual({
        grau: 2,
        resultado: {
            a: 2,
            b: -6,
            c: 8,
        },
    });
    expect(interpretar("abc")).toEqual({
        erro: true,
    });
});

test("Teste de expressões invalidas", () => {
    expect(interpretar("abc")).toEqual({
        erro: true,
    });

    expect(interpretar("2x + abc")).toEqual({
        erro: true,
    });

    expect(interpretar("2x² + abc")).toEqual({
        erro: true,
    });

    expect(interpretar("0x² + 3x + 4")).toEqual({
        erro: true,
    });
});

test("Teste de termos em outra ordem", () => {
    expect(interpretar("5 + 2x")).toEqual({
        grau: 1,
        resultado: {
            a: 2,
            b: 5,
        },
    });

    expect(interpretar("4 + 10x + 2x²")).toEqual({
        grau: 2,
        resultado: {
            a: 2,
            b: 10,
            c: 4,
        },
    });
});
