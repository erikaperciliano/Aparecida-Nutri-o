//responsável por cuidar de todos os arquivos que tenham a ver com o formulário

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    // Extrai as informacoes do paciente do form

    var paciente = obtemPacienteDoFormulario(form);
    
    //cria os novos elementos
    var pacienteTr = document.createElement("tr");
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");
    
    //atribui as variáveis criadas acima, os valores do objeto paciente(que se encontra dentro da função)
    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;

    //adiciona todas as tds dentro da tr
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    //acrescenta a tr c/ as tds dentro da tabela já existente
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
});

function obtemPacienteDoFormulario(form){
    //Atribui os valores do form p/ as novas variáveis criadas
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc:calculaImc(form.peso.value, form.altura.value)
    }
    
    return paciente;
}