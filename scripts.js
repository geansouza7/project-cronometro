
let minutos = 0;
let segundos = 0;
let cronometro;

function atualizarCronometro() {
    segundos++;
    if (segundos == 60) {
        segundos = 0;
        minutos++
    }
    document.getElementById('minutos').innerText = minutos.toString().padStart(2, '0');
    document.getElementById('segundos').innerText = segundos.toString().padStart(2, '0');
}

document.getElementById('iniciar').addEventListener('click', function () {
    if (!cronometro) {
        cronometro = setInterval(atualizarCronometro, 1000);
    }
});

document.getElementById('parar').addEventListener('click', function () {
    clearInterval(cronometro);
    cronometro = undefined;
});

document.getElementById('zerar').addEventListener('click', function () {
minutos = 0;
segundos = 0;
document.getElementById('minutos').innerText = '00';
document.getElementById('segundos').innerText = '00';
clearInterval(cronometro);
cronometro = undefined;
});