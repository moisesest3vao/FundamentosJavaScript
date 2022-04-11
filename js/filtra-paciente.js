var filtroDoPaciente = document.querySelector("#filtro-paciente");

filtroDoPaciente.addEventListener("input",function(){
    var filtro = this.value;
    var pacientes = document.querySelectorAll(".paciente");

    if(filtro.length > 0){
        for(i = 0; pacientes.length; i++){
            var paciente = pacientes[i];
            var nomeTd = paciente.querySelector(".info-nome");
            var nomePaciente = nomeTd.textContent;
            if(nomePaciente != filtro){
                paciente.classList.add("fadeOut");
            }else{
                paciente.classList.add("fadeIn");
            }
        }
    }
    
})