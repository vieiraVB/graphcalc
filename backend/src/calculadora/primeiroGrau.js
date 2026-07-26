function calcularFuncaoPrimeiroGrau(a, b) {

    let tipo;
    if(a>0){
        tipo = "crescente";
    } else if(a<0){
        tipo ="decrescente";
    } else {
        tipo = "constante";
    }

    return {a, b, tipo};
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

module.exports = {
    calcularFuncaoPrimeiroGrau,
    calcularPonto,
    calcularRaiz,
    gerarPontos
};