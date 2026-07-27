function calcularFuncaoSegundoGrau(a, b, c){
    let concavidade;
    let erro = "nao eh uma funcao de segundo grau";

    if(a === 0){
        return erro;
    }
    if(a>0){
        concavidade = "Concavidade para cima"
    } else {
        concavidade = "Concavidade para baixo"
    }

    return{Coeficientes: {a, b, c}, comportamento};
}

function calcularDelta(a, b, c){
    return (b*b) - 4*a*c;
}

function calcularRaizes(a, b, delta){
    let raizDelta = Math.sqrt(delta);
    let erro = "delta menor que 0 logo nao possui raiz";

    if(raizDelta * raizDelta === delta){
        if(delta > 0){
            let raizUm = ((b*(-1))+raizDeltaX) / (2*a);
            let raizDois = ((b*(-1))-raizDeltaX) / (2*a);

            return {x1: raizUm, x2: raizDois};

        } else if (delta === 0){
            let raiz = (b*(-1)) / (2*a);

            return {"raizes reais e iguais a": raiz};

        } else {
            return erro;
        }
    }
}

function tipoIntersecao(a, b, c){
    let concavidade = calcularFuncaoSegundoGrau(a, b, c);
    let delta = calcularDelta(a,b,c);
    let intersecao;

    if(delta > 0){
        intersecao = "A parábola corta o eixo X em dois pontos reais e distintos";
    } else if(delta === 0){
        intersecao = "A parábola toca o eixo X em um único ponto real";
    } else{
        if(a>0){
            intersecao = "A parábola não intercepta o eixo X, ficando totalmente acima";
        } else{
            intersecao = "A parábola não intercepta o eixo X, ficando totalmente abaixo";
        }
    }

    if(delta > 0){
        return{
            ...concavidade,
            delta,
            intersecao
        }
    }
}

module.exports = {
    calcularFuncaoSegundoGrau,
    calcularDelta,
    calcularRaizes,
    tipoIntersecao
};