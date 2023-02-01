// Fornece a quantidade de pessoas diferenciando o sexo e se é adulto ou criança e escolhendo o tipo da carne e se consomem alcool ou não.

// Carne - H = 500g, M = 350g por pessoa + de 6h - H = 800g, M = 650g 
// Cerveja - 900ml por Pessoa; +6h - 1800ml
// Refrigerante/água - 1000 ml por pessoa + 6h - 1500ml

// Crianças valem por 0,5


let homens = document.getElementById("homem");
let mulheres = document.getElementById("mulher");
let alcool = document.getElementById("bebidaAlcoolica");
let criancas = document.getElementById("crianca");
let duracao = document.getElementById("duracao");


function calc(){

    let homensValor = parseFloat(homens.value);
    let mulheresValor = parseFloat(mulheres.value);
    let alcoolValor = parseFloat(alcool.value);
    let criancasValor = parseFloat(criancas.value);
    let duracaoValor = parseFloat(duracao.value);


    let result = document.getElementsByClassName("result")[0];
    let resultCarne = document.getElementById("carne");
    let resultLinguica = document.getElementById("linguica");
    let resultAlcool = document.getElementById("alcool");
    let resultBebidas = document.getElementById("bebidas");

    let carneH = tempoCarneH(duracaoValor);
    let carneM = tempoCarneM(duracaoValor);
    let alcoolico = tempoAlcool(duracaoValor);
    let bebidas = tempoBebidas(duracaoValor);

        let homemMult = homensValor * carneH;
        let mulherMult = mulheresValor * carneM;
        let alcoolMult = alcoolValor * alcoolico;
        let criancaMult = (criancasValor * carneH) / 2;
        let bebidasSoma = homensValor + mulheresValor + (criancasValor / 2);

        let carneqtd = (homemMult + mulherMult + criancaMult) / 1000;
        let carneBoi = (carneqtd * 0.7).toFixed(1);
        let carneLinguica = (carneqtd * 0.3).toFixed(1);

        let alcoolqtd = Math.ceil(alcoolMult / 350);
        let bebidasqtd = Math.ceil((bebidasSoma * bebidas) / 1000);
        
        let salvar = [carneBoi, carneLinguica, alcoolqtd, bebidasqtd];
        localStorage.setItem("resultado", JSON.stringify(salvar));
    

    result.style.display = "block";

    let resultValor = JSON.parse(localStorage.getItem("resultado"));

    resultCarne.innerHTML = resultValor[0] + "Kg";
    resultLinguica.innerHTML = resultValor[1] + "Kg";
    resultAlcool.innerHTML = resultValor[2] + " latas";
    resultBebidas.innerHTML = resultValor[3] + " litros";

}


function tempoCarneH(duracao){
    if(duracao >= 6 ){
        return 800;
    }
    else{
        return 500;
    }
}

function tempoCarneM(duracao){
    if(duracao >= 6 ){
        return 650;
    }
    else{
        return 350;
    }
}

function tempoAlcool(duracao){
    if(duracao >= 6 ){
        return 1800;
    }
    else{
        return 900;
    }
}

function tempoBebidas(duracao){
    if(duracao >= 6 ){
        return 1500;
    }
    else{
        return 1000;
    }
}