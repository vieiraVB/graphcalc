const primeiroGrau = require("../../backend/src/calculadora/primeiroGrau");

test("Teste de calculo da funcao", () => {
    expect(primeiroGrau.calcularFuncaoPrimeiroGrau(2, 5)).toEqual({
        coeficientes: {
            a: 2,
            b: 5,
        },
        comportamento: "crescente",
    });
    expect(primeiroGrau.calcularFuncaoPrimeiroGrau(-2, 5)).toEqual({
        coeficientes: {
            a: -2,
            b: 5,
        },
        comportamento: "decrescente",
    });
    expect(primeiroGrau.calcularFuncaoPrimeiroGrau(0, 5)).toEqual({
        coeficientes: {
            a: 0,
            b: 5,
        },
        comportamento: "constante",
    });
});

test("Teste de calculo do ponto", () => {
    expect(primeiroGrau.calcularPonto(2, 5, 10)).toBe(25);
    expect(primeiroGrau.calcularPonto(-2, 5, 10)).toBe(-15);
    expect(primeiroGrau.calcularPonto(2, 5, 0)).toBe(5);
});

test("Teste de calculo de raiz", () => {
    expect(primeiroGrau.calcularRaiz(2, 5)).toBe(-2.5);
    expect(primeiroGrau.calcularRaiz(-2, 5)).toBe(2.5);
    expect(primeiroGrau.calcularRaiz(0, 5)).toBe(
        "nao eh uma funcao de primeiro grau",
    );
});

test("Teste de geracao de pontos", () => {
    expect(primeiroGrau.gerarPontos(2, 5, -2, 2)).toEqual([
        { x: -2, y: 1 },
        { x: -1, y: 3 },
        { x: 0, y: 5 },
        { x: 1, y: 7 },
        { x: 2, y: 9 },
    ]);
    expect(primeiroGrau.gerarPontos(-2, 5, -2, 2)).toEqual([
        { x: -2, y: 9 },
        { x: -1, y: 7 },
        { x: 0, y: 5 },
        { x: 1, y: 3 },
        { x: 2, y: 1 },
    ]);
});

test("Teste de analise da funcao", () => {
    expect(primeiroGrau.analisarFuncaoPrimeiroGrau(2, 5, -2, 2)).toEqual({
        coeficientes: {
            a: 2,
            b: 5,
        },
        comportamento: "crescente",
        raiz: -2.5,
        pontos: [
            { x: -2, y: 1 },
            { x: -1, y: 3 },
            { x: 0, y: 5 },
            { x: 1, y: 7 },
            { x: 2, y: 9 },
        ],
    });
});

test("Teste de funcao constante", () => {
    expect(primeiroGrau.calcularFuncaoPrimeiroGrau(0, 5)).toEqual({
        coeficientes: {
            a: 0,
            b: 5,
        },
        comportamento: "constante",
    });
});

test("Teste de raiz com coeficiente negativo", () => {
    expect(primeiroGrau.calcularRaiz(-2, 6)).toBe(3);
});

test("Teste de raiz com b igual a zero", () => {
    expect(primeiroGrau.calcularRaiz(5, 0)).toBe(-0);
});

test("Teste de geração de pontos", () => {
    expect(primeiroGrau.gerarPontos(2, 5, -2, 2)).toEqual([
        { x: -2, y: 1 },
        { x: -1, y: 3 },
        { x: 0, y: 5 },
        { x: 1, y: 7 },
        { x: 2, y: 9 },
    ]);
});