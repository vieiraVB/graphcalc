function calcularFuncaoPrimeiroGrau(a, b) {

    let comportamento;
    if(a>0){
        comportamento = "crescente";
    } else if(a<0){
        comportamento ="decrescente";
    } else {
        comportamento = "constante";
    }

    return {Coeficientes:{a, b}, comportamento};
}


function calcularPonto(a, b, x) {
    return a * x + b;
}

function calcularRaiz(a, b){
    let x;
    if(a===0){
        x = "nao eh uma funcao de primeiro grau";
    }else{
        x = (b * (-1))/a;
    }

    return x;
}

function gerarPontos(a, b, inicio, fim){
    let pontos = [];
    for (let i = inicio;i <= fim; i++){
        let y = a * i + b;
        pontos.push({x: i, y});
    }

    return pontos;
}

function analisarFuncaoPrimeiroGrau(a, b, inicio = -10, fim = 10){
    let funcao = calcularFuncaoPrimeiroGrau(a, b);
    let raiz = calcularRaiz(a, b);
    let pontos = gerarPontos (a, b, inicio, fim);

    return{
        ...funcao, 
        raiz, 
        pontos
    }
}

module.exports = {
    calcularFuncaoPrimeiroGrau,
    calcularPonto,
    calcularRaiz,
    gerarPontos,
    analisarFuncaoPrimeiroGrau
};