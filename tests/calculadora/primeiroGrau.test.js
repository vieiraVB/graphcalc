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

test("Teste de precisao com coeficientes decimais", () => {
    const raiz = primeiroGrau.calcularRaiz(0.1, -0.3);
    const pontos = primeiroGrau.gerarPontos(0.1, -0.3, 2, 3);

    expect(Math.abs(raiz - 3)).toBeLessThan(1e-10);

    expect(Math.abs(pontos[0].y + 0.1)).toBeLessThan(1e-10);
    expect(Math.abs(pontos[1].y)).toBeLessThan(1e-10);
});

test("Teste de funcao constante como caso especial", () => {
    const resultado = primeiroGrau.analisarFuncaoPrimeiroGrau(0, 5);

    expect(resultado.casoEspecial).toBe(true);
    expect(resultado.classificacao).toBe("funcao constante");
    expect(resultado.raizes).toBe("nao possui raizes reais");
    expect(resultado.pontos.every((ponto) => ponto.y === 5)).toBe(true);
});

test("Teste de funcao nula como caso especial", () => {
    const resultado = primeiroGrau.analisarFuncaoPrimeiroGrau(0, 0);

    expect(resultado.casoEspecial).toBe(true);
    expect(resultado.classificacao).toBe("funcao nula");
    expect(resultado.raizes).toBe("infinitas raizes reais");
    expect(resultado.pontos.every((ponto) => ponto.y === 0)).toBe(true);
});
