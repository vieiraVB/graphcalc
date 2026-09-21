const { interpretar, analisar } = require("../backend/src/index");

test("Teste de entrega de funções", () => {
    expect(interpretar("2x + 5")).toEqual({
        grau: 1,
        resultado: {
            a: 2,
            b: 5,
        },
    });
    expect(analisar("2x + 5")).toMatchObject({
        grau: 1,
        resultado: {
            Coeficientes: {
                a: 2,
                b: 5,
            },

            comportamento: "crescente",
            raiz: -2.5,
        },
    });
});

test("Teste de entgrega de funcoes - invalidas", () => {
    expect(interpretar("abc")).toEqual({
        erro: true,
    });
    expect(analisar("abc")).toBe("funcao invalida");
});
