var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.getElementById("form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);//retorna os valores dos campos do form
    console.log(paciente);
 
    //cria uma nova tr e tds do paciente
    var pacienteTr = document.createElement("tr");
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
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

    //adiciona a nova tr dentro da tabela já existente
    var tabela = document.querySelector("#tabela-pacientes"); 
    tabela.appendChild(pacienteTr);   
});
//pega todos os valores e extrai para variáveis
    function obtemPacienteDoFormulario(form) {
        var paciente = {
            nome: form.nome.value,
            peso: form.peso.value,
            altura: form.altura.value,
            gordura: form.gordura.value,
            imc: calculaImc(form.peso.value, form.altura.value)//pega o valor do peso e da altura e realiza o cálculo
        }
        return paciente; // a função retorna o obj paciente c/ seus valores
    }
    