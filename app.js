let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `¡Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}!`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número es menor');
        } else {
            asignarTextoElemento('p','El número es mayor');
        }
        intentos++;
        limpiarCaja();
    };
    return;
 } 

 function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
 }

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; // Genera un número entre 0 y 10
    //si el numero generado esta en la lista, generar otro numero
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
       asignarTextoElemento('p', '¡No hay más números para sortear! Reinicia el juego.');
    } else {
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número entre 1 y ${numeroMaximo}`);
intentos = 1;
numeroSecreto = generarNumeroSecreto();
console.log(numeroSecreto);
}


function reiniciarJuego(){
    //limpiarCaja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    condicionesIniciales();
    //generar nuevo numero secreto
    //numeroSecreto = generarNumeroSecreto();
    //inicializar el numero de intentos
    //intentos = 1;
    //desahibilitar boton reiniciar
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

condicionesIniciales();

//primitvo
/*let titulo = document.querySelector('h1'); // Selecciona el primer elemento h1
titulo.innerHTML = 'Juego del número secreto';  // Cambia el texto del h1
let parrafo = document.querySelector('p'); // Selecciona el primer párrafo
parrafo.innerHTML = 'Indica un número entre 1 y 100'; // Cambia el texto del párrafo
function intentoDeUsuario(){

   alert('click desde el boton')

}*/

