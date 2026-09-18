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
