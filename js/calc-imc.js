var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (let index = 0; index < pacientes.length; index++) {
    var paciente = pacientes[index];

    var tdNome = paciente.querySelector(".info-nome");
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdImc = paciente.querySelector(".info-imc");


    var nome = tdNome.textContent;
    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;
    var imc = tdImc.textContent;
    var validacaoPeso = validaPeso(peso);
    var validacaoAltura = validaAltura(altura);
    console.log(validacaoPeso);
    

    if(!validacaoPeso){
        tdImc.textContent = "Peso inválido!"
        paciente.classList.add("infos-invalidas");
    }
    if(!validacaoAltura){
        tdImc.textContent = "Altura inválido!";
        paciente.classList.add("infos-invalidas");
    }

    if (validacaoPeso && validacaoAltura) {
        
        imc = calcImc(peso, altura);
        tdImc.textContent = imc;
    }
}


function calcImc(peso, altura){
    imc = peso / (altura*altura);
    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso > 0 && peso < 200){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura > 0 && altura < 3.00){
        return true;
    }else{
        return false;
    }
}