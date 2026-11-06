const {
    identificarGrau,
} = require("../../backend/src/interpretador/identificarGrau");

test("Identificar funções de primeiro e segundo grau", () => {
    expect(identificarGrau("x+5")).toBe(1);
    expect(identificarGrau("2x - 10")).toBe(1);
    expect(identificarGrau("x² + 3x + 2")).toBe(2);
    expect(identificarGrau("5x² - 8")).toBe(2);
});

test("Teste de identificacao de funcao constante", () => {
    expect(identificarGrau("5")).toBe(0);
    expect(identificarGrau("0")).toBe(0);
});
