
let numeroSecreto = 0; 
let Intentos= 0;
let listaNumerosSorteados = []
let numeroMaximo = 10;

function AsignarTextoElemento(elemento,texto){
    let ELementoHtml= document.querySelector(elemento);
    ELementoHtml.innerHTML = texto;
    return;
}  

function VerificarIntento(){
    let NumeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (NumeroDeUsuario === numeroSecreto) {
        AsignarTextoElemento ('p', `¡Felicidades, acertaste el número secreto en ${Intentos} ${(Intentos === 1) ? 'vez' : 'veces'}!`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (NumeroDeUsuario < numeroSecreto)
        AsignarTextoElemento('p', 'El número secreto es mayor...')
        else
        AsignarTextoElemento('p','El número secreto es menor...');
    Intentos++;
     limpiarCaja();
    } 
    return;
}

function limpiarCaja () {
    document.querySelector('#valorUsuario').value =' ';
 }

function GenerarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
console.log(numeroGenerado);
console.log(listaNumerosSorteados);
if(listaNumerosSorteados.length == numeroMaximo)
 AsignarTextoElemento('p','Ya se sortearon todos los números posibles');
else {
     if(listaNumerosSorteados.includes(numeroGenerado)){
      return GenerarNumeroSecreto()} 
  else {
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
 }
}
}

function condicionesIniciales() {
    AsignarTextoElemento('h1','Juego del número secreto');
    AsignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = GenerarNumeroSecreto();
    Intentos= 1;
    
}
function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();