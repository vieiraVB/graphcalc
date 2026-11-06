const {
    interpretarFuncaoConstante,
} = require("../../backend/src/interpretador/funcaoConstante");

test("Teste de interpretacao de constantes", () => {
    expect(interpretarFuncaoConstante("5")).toEqual({ a: 0, b: 5 });
    expect(interpretarFuncaoConstante("-3")).toEqual({ a: 0, b: -3 });
    expect(interpretarFuncaoConstante("0")).toEqual({ a: 0, b: 0 });
    expect(interpretarFuncaoConstante("2.5")).toEqual({ a: 0, b: 2.5 });
});

test("Teste de expressoes constantes invalidas", () => {
    expect(interpretarFuncaoConstante("abc")).toBe(
        "nao eh uma expressao constante valida",
    );

    expect(interpretarFuncaoConstante("5+3")).toBe(
        "nao eh uma expressao constante valida",
    );

    expect(interpretarFuncaoConstante("x³")).toBe(
        "nao eh uma expressao constante valida",
    );
});
