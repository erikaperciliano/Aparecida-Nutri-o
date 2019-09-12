/*var titulo = document.querySelector(".titulo");
titulo.addEventListener("click", function(){
    titulo.textContent = "Mudei!";
})*/
$(".titulo").click(function(){
    $(".titulo").text("Mudei!");
});

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];
  
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;

    var imc = peso / (altura * altura);

    var tdImc = paciente.querySelector(".info-imc");
    tdImc.textContent = imc

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
        var imc = peso / (altura * altura);
        tdImc.textContent = imc;
    }
}
function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}
