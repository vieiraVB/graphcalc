# Melhorias Técnicas

Este documento reúne melhorias que não são obrigatórias para o funcionamento do GraphCalc, mas tornam o código mais organizado, reutilizável e fácil de manter.

---

# Arquitetura

## Padronizar retorno dos módulos

Primeiro grau:

```js
{
    a,
    b,
    tipo,
    raiz,
    pontos
}
```

Segundo grau deverá seguir exatamente o mesmo padrão.

---

## Criar constantes globais

Criar um arquivo:

backend/src/constants.js

Exemplo:

- intervalo padrão dos gráficos
- mensagens de erro
- configurações gerais

---

## Melhorar nomes

Evitar nomes muito genéricos.

Exemplo:

dados

↓

funcao

---

# Interpretador

## Melhorias

- aceitar multiplicação explícita

Exemplo:

2*x+5

---

## Validação

Detectar expressões inválidas.

Exemplos:

2xx+5

abc

++2x

x++


---

## Raízes

Adicionar informação se:

- raízes reais
- raízes complexas
- raiz do delta exata
- raiz do delta irracional

---

# Testes

Criar testes para todos os cenários possíveis.

Exemplo:

Primeiro grau

- crescente
- decrescente
- constante
- a = 0
- b = 0
- negativos

Segundo grau

- delta > 0
- delta = 0
- delta < 0

Interpretador

- entradas válidas
- entradas inválidas
- espaços
- letras maiúsculas

---

# Frontend

Criar interface para:

- inserir expressão
- escolher intervalo
- exibir gráfico
- exibir cálculos
- exibir explicações

---

# Código

Melhorar documentação usando JSDoc.

Exemplo:

/**
 * Calcula o delta da função do segundo grau.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {number}
 */

---

# Futuro

Quando houver React:

Separar backend e frontend completamente.

Backend:

- responsável apenas pelos cálculos.

Frontend:

- responsável apenas pela interface.

Isso permitirá trocar a interface sem alterar a lógica matemática.