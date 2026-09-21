const { analisar } = require("../../backend/src/calculadora/analisar");

test("Teste de analise", () => {
    expect(analisar("2x + 5")).toEqual({
        grau: 1,
        resultado: {
            coeficientes: {
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
        },
    });
    expect(analisar("2x² - 6x + 8")).toEqual({
        grau: 2,
        resultado: {
            coeficientes: {
                a: 2,
                b: -6,
                c: 8,
            },
            concavidade: "Concavidade para cima",
            delta: -28,
            raizes: "delta menor que 0, logo nao toca o eixo x",
            intersecao:
                "A parábola não intercepta o eixo X, ficando totalmente acima",
            vertice: {
                xv: 1.5,
                yv: 3.5,
            },
            eixoSimetria: {
                x: 1.5,
            },
            pontos: [
                { x: -5, y: 88 },
                { x: -4, y: 64 },
                { x: -3, y: 44 },
                { x: -2, y: 28 },
                { x: -1, y: 16 },
                { x: 0, y: 8 },
                { x: 1, y: 4 },
                { x: 2, y: 4 },
                { x: 3, y: 8 },
                { x: 4, y: 16 },
                { x: 5, y: 28 },
            ],
        },
    });
});

test("Teste de analise de expressoes invalidas", () => {
        expect(analisar("abc")).toBe("funcao invalida");
        expect(analisar("2x + abc")).toBe("funcao invalida");
        expect(analisar("2x² + abc")).toBe("funcao invalida");
        expect(analisar("0x² + 3x + 4")).toBe("funcao invalida");
    });

    test("Teste de analise com termos em outra ordem", () => {
        expect(analisar("5 + 2x")).toMatchObject({
            grau: 1,
            resultado: {
                coeficientes: {
                    a: 2,
                    b: 5,
                },
                comportamento: "crescente",
                raiz: -2.5,
            },
        });

        expect(analisar("4 + 10x + 2x²")).toMatchObject({
            grau: 2,
            resultado: {
                coeficientes: {
                    a: 2,
                    b: 10,
                    c: 4,
                },
            },
        });
    });
