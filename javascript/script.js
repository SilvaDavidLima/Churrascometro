// Fornece a quantidade de pessoas diferenciando o sexo e se é adulto ou criança e escolhendo o tipo da carne e se consomem alcool ou não.

// Carne - H = 500g, M = 350g por pessoa + de 6h - H = 800g, M = 650g 
// Cerveja - H = 1200ml, M = 800ml por Pessoa + 6h - H = 2000ml, M = 1500ml
// Refrigerante/água - 1000 ml por pessoa + 6h - 1500ml

// Crianças valem por 0,5



function calc(){

    let homensValor = parseFloat(document.getElementById("homem").value);
    let mulheresValor = parseFloat(document.getElementById("mulher").value);
    let alcoolValor = parseFloat(document.getElementById("bebidaAlcoolica").value);
    let criancasValor = parseFloat(document.getElementById("crianca").value);
    let duracaoValor = parseFloat(document.getElementById("duracao").value);

    let result = document.getElementsByClassName("result")[0];
    let resultCarne = document.getElementById("carne");
    let resultAlcool = document.getElementById("alcool");
    let resultBebidas = document.getElementById("bebidas");

    if(duracaoValor <= 6){
        let homemMult = (homensValor * 500) / 1000;
        let mulherMult = (mulheresValor * 350) / 1000;
        let alcoolMult = Math.ceil((alcoolValor * 1000) / 350);
        let criancaMult = homemMult / 2;
        let bebidasMult = homensValor + mulheresValor + (criancasValor / 2);

        let carne = homemMult + mulherMult + criancaMult;

      
        let salvar = [carne, alcoolMult, bebidasMult];

        localStorage.setItem("resultado", JSON.stringify(salvar));
    }
    else{
        let homemMult = (homensValor * 800) / 1000;
        let mulherMult = (mulheresValor * 650) / 1000;
        let alcoolMult = Math.ceil((alcoolValor * 1500) / 350);
        let criancaMult = homemMult / 2;
        let bebidasMult = homensValor + mulheresValor + (criancasValor / 2);

        let carne = homemMult + mulherMult + criancaMult;


        let salvar = [carne, alcoolMult, bebidasMult];

        localStorage.setItem("resultado", JSON.stringify(salvar));
    }

    result.style.display = "block";

    let resultValor = JSON.parse(localStorage.getItem("resultado"));

    resultCarne.innerHTML = resultValor[0] + "Kg";
    resultAlcool.innerHTML = resultValor[1] + " latas";
    resultBebidas.innerHTML = resultValor[2] + " litros";

}