var botao = document.querySelector("#buscar-paciente");

botao.addEventListener("click", function(){
    
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){

        if(xhr.status == 200){

            var resposta = xhr.responseText; // é uma string
            
            
            var pacientes = JSON.parse(resposta);
            console.log(pacientes);
            
            pacientes.forEach(function(paciente){
                adicionaPacienteTabela(paciente);
            })
            
        }else {
            console.log(xhr.status);
            console.log(xhr.responseText);

            var erroAjax = document.querySelector("#erro-ajax");
            console.log(erroAjax);
            
            erroAjax.classList.remove("invisivel");

            
        }

        
    });

    xhr.send();
});