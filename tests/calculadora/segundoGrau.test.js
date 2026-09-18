const segundoGrau = require("../../backend/src/calculadora/segundoGrau");

test("Teste de calculo da funcao", () => {
    expect(segundoGrau.calcularFuncaoSegundoGrau(-2, 8, -1)).toEqual({
        coeficientes: {
            a: -2,
            b: 8,
            c: -1,
        },
        concavidade: "Concavidade para baixo",
    });
    expect(segundoGrau.calcularFuncaoSegundoGrau(2, 8, -1)).toEqual({
        coeficientes: {
            a: 2,
            b: 8,
            c: -1,
        },
        concavidade: "Concavidade para cima",
    });
    expect(segundoGrau.calcularFuncaoSegundoGrau(0, 8, -1)).toBe(
        "nao eh uma funcao de segundo grau",
    );
});

test("Teste de calculo do delta", () => {
    expect(segundoGrau.calcularDelta(1, 5, 4)).toBe(9);
    expect(segundoGrau.calcularDelta(1, 4, 4)).toBe(0);
    expect(segundoGrau.calcularDelta(1, 2, 4)).toBe(-12);
});

test("Teste de calculo de raizes", () => {
    expect(segundoGrau.calcularRaizes(1, -5, 1)).toEqual({
        x1: 3,
        x2: 2,
    });
    expect(segundoGrau.calcularRaizes(1, -4, 0)).toEqual({
        "raizes reais e iguais a": 2,
    });
    expect(segundoGrau.calcularRaizes(1, 2, -16)).toBe(
        "delta menor que 0, logo nao toca o eixo x",
    );

    expect(segundoGrau.calcularRaizes(1, -5, 1)).toEqual({
        x1: 3,
        x2: 2,
    });
});

test("Teste de tipo de interesecao", () => {
    expect(segundoGrau.tipoIntersecao(1, -5, 1)).toBe(
        "A parábola corta o eixo X em dois pontos reais e distintos",
    );

    expect(segundoGrau.tipoIntersecao(1, -4, 4)).toBe(
        "A parábola toca o eixo X em um único ponto real",
    );

    expect(segundoGrau.tipoIntersecao(1, 2, 5)).toBe(
        "A parábola não intercepta o eixo X, ficando totalmente acima",
    );

    expect(segundoGrau.tipoIntersecao(-1, 2, -5)).toBe(
        "A parábola não intercepta o eixo X, ficando totalmente abaixo",
    );
});
test("Teste do calculo do vertice", () => {
    expect(segundoGrau.calcularVertice(1, -4, 3)).toEqual({
        xv: 2,
        yv: -1,
    });
    expect(segundoGrau.calcularVertice(-1, 4, -3)).toEqual({
        xv: 2,
        yv: 1,
    });
    expect(segundoGrau.calcularVertice(2, -3, 1)).toEqual({
        xv: 0.75,
        yv: -0.125,
    });
});

test("Teste de calculo do eixo de simetria", () => {
    expect(segundoGrau.calcularEixoSimetria(1, -4)).toEqual({
        x: 2,
    });
    expect(segundoGrau.calcularEixoSimetria(2, -3)).toEqual({
        x: 0.75,
    });
    expect(segundoGrau.calcularEixoSimetria(-2, 8)).toEqual({
        x: 2,
    });
});

test("Teste de geração de pontos", () => {
    expect(segundoGrau.gerarPontos(1, -4, 3, -2, 2)).toEqual([
        { x: -2, y: 15 },
        { x: -1, y: 8 },
        { x: 0, y: 3 },
        { x: 1, y: 0 },
        { x: 2, y: -1 },
    ]);
    expect(segundoGrau.gerarPontos(-1, 4, -3, -2, 2)).toEqual([
        { x: -2, y: -15 },
        { x: -1, y: -8 },
        { x: 0, y: -3 },
        { x: 1, y: 0 },
        { x: 2, y: 1 },
    ]);
    expect(segundoGrau.gerarPontos(2, -3, 1, 0, 3)).toEqual([
        { x: 0, y: 1 },
        { x: 1, y: 0 },
        { x: 2, y: 3 },
        { x: 3, y: 10 },
    ]);
});

test("Teste de analise da funcao", () => {
    expect(segundoGrau.analisarFuncaoSegundoGrau(1, -5, 6, 0, 3)).toEqual({
        coeficientes: {
            a: 1,
            b: -5,
            c: 6,
        },
        concavidade: "Concavidade para cima",
        delta: 1,
        raizes: {
            x1: 3,
            x2: 2,
        },
        intersecao:
            "A parábola corta o eixo X em dois pontos reais e distintos",
        vertice: {
            xv: 2.5,
            yv: -0.25,
        },
        eixoSimetria: {
            x: 2.5,
        },
        pontos: [
            { x: 0, y: 6 },
            { x: 1, y: 2 },
            { x: 2, y: 0 },
            { x: 3, y: 0 },
        ],
    });
});
