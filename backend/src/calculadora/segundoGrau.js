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

    return{coeficientes: {a, b, c}, concavidade};
}

function calcularDelta(a, b, c){
    return (b*b) - 4*a*c;
}

function calcularRaizes(a, b, delta){
    let raizDelta = Math.sqrt(delta);
    let erro;

    if(raizDelta * raizDelta === delta){
        if(delta > 0){
            let raizUm = ((b*(-1))+raizDelta) / (2*a);
            let raizDois = ((b*(-1))-raizDelta) / (2*a);

            return {x1: raizUm, x2: raizDois};

        } else if (delta === 0){
            let raiz = (b*(-1)) / (2*a);

            return {"raizes reais e iguais a": raiz};

        }
    } else{
        return erro = "delta menor que 0, logo nao toca o eixo x";
    }
}

function tipoIntersecao(a, b, c){
    let concavidade = calcularFuncaoSegundoGrau(a, b, c);
    let delta = calcularDelta(a,b,c);
    let raizes = calcularRaizes(a,b, delta);
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

        return intersecao;
    
}

function calcularVertice(a,b,c){
    let xv = (b * (-1)) / (2*a);
    let delta = calcularDelta(a,b,c);
    let yv = (delta * (-1)) / (4*a);

    return {xv, yv};
}

function calcularEixoSimetria(a,b){
    let x = (b / (2*a)) * (-1);

    return {x};
}

function gerarPontos(a,b,c, inicio = -5, fim = 5){
    let pontos = [];
    for (let i = inicio;i <= fim; i++){
        let y = a * (i ** 2) + b*i + c;
        pontos.push({x: i, y});
    }

    return pontos;
}

function analisarFuncaoSegundoGrau(a,b,c, inicio = -5, fim = 5){
    let funcao = calcularFuncaoSegundoGrau(a,b,c);
    let delta = calcularDelta(a,b,c);
    let raizes = calcularRaizes(a,b, delta);
    let intersecao =  tipoIntersecao(a,b,c);
    let vertice = calcularVertice(a,b,c);
    let eixoSimetria = calcularEixoSimetria(a,b);
    let pontos = gerarPontos(a,b,c,inicio,fim);

    return {
        ...funcao,
        delta,
        raizes,
        intersecao,
        vertice,
        eixoSimetria,
        pontos
    };
}

module.exports = {
    calcularFuncaoSegundoGrau,
    calcularDelta,
    calcularRaizes,
    tipoIntersecao,
    calcularVertice,
    calcularEixoSimetria,
    gerarPontos,
    analisarFuncaoSegundoGrau
};