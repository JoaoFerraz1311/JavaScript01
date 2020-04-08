var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


var primeiroPaciente = document.querySelector("#primeiro-paciente");
var tdNome = primeiroPaciente.querySelector(".info-nome");
var tdPeso = primeiroPaciente.querySelector(".info-peso");
var tdAltura = primeiroPaciente.querySelector(".info-altura");
var tdImc = primeiroPaciente.querySelector(".info-imc");
console.log(tdImc);


var nome = tdNome.textContent;
var peso = tdPeso.textContent;
var altura = tdAltura.textContent;
var imc = tdImc.textContent;
console.log(imc);


var imcRes = peso / (altura*altura);
console.log(imcRes);

tdImc.textContent = imcRes;
console.log(imc.textContent);
