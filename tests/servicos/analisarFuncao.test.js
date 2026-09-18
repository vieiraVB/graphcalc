const { analisarFuncao } = require("../../backend/src/servicos/analisarFuncao");

test("Teste de analise da Funcao", () => {
    expect(analisarFuncao("2x + 5")).toEqual({
        Funcao: "2x + 5",
        Coeficientes: {
            a: 2,
            b: 5,
        },
        comportamento: "crescente",
        raiz: -2.5,
        pontos: [
            { x: -10, y: -15 },
            { x: -9, y: -13 },
            { x: -8, y: -11 },
            { x: -7, y: -9 },
            { x: -6, y: -7 },
            { x: -5, y: -5 },
            { x: -4, y: -3 },
            { x: -3, y: -1 },
            { x: -2, y: 1 },
            { x: -1, y: 3 },
            { x: 0, y: 5 },
            { x: 1, y: 7 },
            { x: 2, y: 9 },
            { x: 3, y: 11 },
            { x: 4, y: 13 },
            { x: 5, y: 15 },
            { x: 6, y: 17 },
            { x: 7, y: 19 },
            { x: 8, y: 21 },
            { x: 9, y: 23 },
            { x: 10, y: 25 },
        ],
    });
    expect(analisarFuncao("abc")).toBe("nao eh uma expressao valida");
});
