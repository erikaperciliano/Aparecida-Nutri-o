/*var titulo = document.querySelector(".titulo");
titulo.addEventListener("click", function(){
    titulo.textContent = "Mudei!";
})*/
//teste
$(".titulo").click(function(){
    $(".titulo").text("Mudei!");
});

//seleciona todas as trs do 1ª formulario
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];
  
  
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;

 
    var tdImc = paciente.querySelector(".info-imc");
    console.log(tdImc);
   // var imc = tdImc.textContent;

    var pesoEhValido = true;
    var alturaEhValida = true;


    if (peso <= 0 || peso >= 1000) {
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        //paciente.classList.add("paciente-invalido");//adiciona a classe paciente-invalido
    }

    if (altura <= 0 || altura >= 3.00) {
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        //paciente.classList.add("paciente-invalido");
    }

    if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;//passa para o campo html o valor do calculo 
        }
    }

    function calculaImc(peso, altura) {
        var imc = 0;

        imc = peso / (altura * altura);

        return imc.toFixed(2);
    }
