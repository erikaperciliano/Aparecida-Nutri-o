
var botaoAdiciona = document.querySelector("#adicionar-paciente");
botaoAdiciona.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.getElementById("form-adiciona");
     //Extraindo informacoes do paciente do form
    var paciente = obtemPacienteDoFormulario(form);
    // Cria a tr e a td do paciente
    var pacienteTr = montaTr(paciente);
   
    function obtemPacienteDoFormulario(form){
        var paciente = {
            nome: form.nome.value,
            peso: form.peso.value,
            altura: form.altura.value,
            gordura: form.gordura.value,
            imc: calculaImc(form.peso.value, form.altura.value)
        }
        return paciente;
    }

    function montaTr(paciente) {
        var pacienteTr = document.createElement("tr");
        //cria a tr e a td do paciente
        pacienteTr.classList.add("paciente");

        var nomeTd = document.createElement("td");
        var pesoTd = document.createElement("td");
        var alturaTd = document.createElement("td");
        var gorduraTd = document.createElement("td");
        gorduraTd.classList.add("info-gordura");
        var imcTd = document.createElement("td");

        //os novos campos recebem o valor digitado
        nomeTd.textContent = nome;
        pesoTd.textContent = peso;
        alturaTd.textContent = altura;
        gorduraTd.textContent = gordura;
        imcTd.textContent = calculaImc(peso, altura);//chama a função presente no calcula-imc.js

        //adiciona as novas tds dentro da tr
        pacienteTr.appendChild(nomeTd);
        pacienteTr.appendChild(pesoTd);
        pacienteTr.appendChild(alturaTd);
        pacienteTr.appendChild(gorduraTd);
        pacienteTr.appendChild(imcTd);
        return pacienteTr;
    }

    

 



   

   //adicionando o paciente na tabela.
    var tabela = document.querySelector("#tabela-pacientes"); 
    tabela.appendChild(pacienteTr);   
});
    