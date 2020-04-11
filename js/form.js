
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function() {
    event.preventDefault(); //limpa o padrao do botao

    //pega o formulario
    var form = document.querySelector("#formulario");

    //cria o objeto paciente
    var paciente = obtemPacienteFormulario(form);
    
    //cria-se as trs e tds
    var pacienteTr = montaTr(paciente);

    //erro
    var erro = validaPaciente(paciente);

    //validando as infos dos novos pacientes
    if(erro.length > 0){
        exibeMensagensErro(erro)
        return
    }

    //add o paciente na tabela
    adicionaPacienteTabela(paciente);


    form.reset(); //reseta o formulario
    var mensagemErro = document.querySelector("#mensagensErro");
    mensagemErro.innerHTML = "";
})


function adicionaPacienteTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

}

function obtemPacienteFormulario(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,           
        gordura: form.gordura.value,
        imc: calcImc(form.peso.value, form.altura.value)
    }

    return paciente;

}

function montaTr (paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    var nomeTd = montaTd(paciente.nome, "info-nome");
    var pesoTd = montaTd(paciente.peso, "info-peso");
    var alturaTd = montaTd(paciente.altura, "info-altura");
    var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    var imcTd = montaTd(paciente.imc, "info-imc")

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;

}


function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td
}

function validaPaciente(paciente){
    
    var erros = [];
    
    if(!validaPeso(paciente.peso)) erros.push("Peso inválido!");

    if(!validaAltura(paciente.altura)) erros.push("Altura inválida!");

    if(paciente.nome.length == 0) erros.push("Nome não pode ser em branco!");

    if(paciente.gordura.length == 0) erros.push("% de gordura não pode ser em branco!");

    if(paciente.peso.length == 0) erros.push("Peso não pode ser em branco!");

    if(paciente.altura.length == 0) erros.push("Altura não pode ser em branco!");

    return erros;
}

function exibeMensagensErro(erros){
    var ul = document.querySelector("#mensagensErro");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });


}