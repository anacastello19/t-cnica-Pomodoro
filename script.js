//Contastantes
const html= document.querySelector('html');
const botonCorto = document.querySelector('.app__card-button--corto');
const botonEnfoque= document.querySelector('.app__card-button--enfoque');
const botonLargo= document.querySelector('.app__card-button--largo');

const banner= document.querySelector('.app__image');
const title= document.querySelector('.app__title');
const btn= document.querySelectorAll('.app__card-button');

const btnIniciarPausa= document.querySelector('#start-pause');
const inputMusicaEnfoque = document.querySelector('#alternar-musica');

const textoIniciarPausar = document.querySelector('#start-pause span');
const iconoIniciarPausar = document.querySelector(".app__card-primary-butto-icon");
const tiempoEnPantalla = document.querySelector('#timer');

const musica = new Audio('./sonidos/luna-rise-part-one.mp3');
const playMusic= new Audio('./sonidos/play.wav');
const pauseMusic= new Audio('./sonidos/pause.mp3');
const avisoMusic=new Audio('./sonidos/beep.mp3');

let tiempoSeg=5;
let idIntervalo= null;


musica.loop = true;

inputMusicaEnfoque.addEventListener('change', () => {
    if(musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
});

botonCorto.addEventListener('click',()=>{
    tiempoSeg=300;
    cambiarContexto('descanso-corto');
    botonCorto.classList.add('active')
    // html.setAttribute('data-contexto','descanso-corto')
    // banner.setAttribute('src', './imagenes/descanso-corto.png')
});

botonEnfoque.addEventListener('click',()=>{
    tiempoSeg=1500;
    cambiarContexto('enfoque');
    botonEnfoque.classList.add('active')
    // html.setAttribute('data-contexto','enfoque')
    // banner.setAttribute('src', './imagenes/enfoque.png')
});

// Para hacer que el boton largo cambie de color con el click creamos la siq function
//Cuando se haga click el metodo addEventListener ejecutara la funcion
botonLargo.addEventListener('click',()=>{
    tiempoSeg=900;
    cambiarContexto('descanso-largo');
    botonLargo.classList.add('active')
    // Método setAttribute() se utiliza para establecer o cambiar el valor de un atributo de un elemento del DOM.
    // html.setAttribute('data-contexto','descanso-largo');
    // banner.setAttribute('src', './imagenes/descanso-largo.png')
});

// La sintaxis básica de addEventListener es la siguiente:
// elemento.addEventListener(evento, callback);
// Donde:
/*
*elemento: Es el elemento HTML al cual queremos asociar el evento.
*evento: Es un string que representa el tipo de evento que queremos capturar.
*callback: Es la función que se llamará cuando ocurra el evento.*/

// En las sig lineas de codigo haremos lo mismo que hace la const BANNER pero resumido en un function
function cambiarContexto(contexto){
    mostrarTiempo()
    btn.forEach(function(contexto){
        contexto.classList.remove('active')
    })
    
    html.setAttribute('data-contexto',contexto);   
    banner.setAttribute('src',`./imagenes/${contexto}.png`)
    switch(contexto){
        case 'enfoque':
            title.innerHTML=`
            Optimiza tu productividad,<br>
            <strong class="app__title-strong">sumérgete en lo que importa.</strong>
            `
        break

        case 'descanso-corto':
            title.innerHTML=`
            ¿Qué tal tomar un respiro? ,<br>
            <strong class="app__title-strong">¡Haz una pausa corta!</strong>`
        break

        case 'descanso-largo':
            title.innerHTML=`
            Hora de volver a la superficie,<br>
            <strong class="app__title-strong">Haz una pausa larga.</strong>
            `
        break
    }
}

const cuentaRegresiva= ()=>{
    if(tiempoSeg <= 0){
        avisoMusic.play();
        reiniciar()
        return
    }
    textoIniciarPausar.textContent="Pausar"
    iconoIniciarPausar.setAttribute('src', `/imagenes/pause.png`);
    tiempoSeg-=1;
    mostrarTiempo()
}

btnIniciarPausa.addEventListener('click', iniciarPausar);

function iniciarPausar(){
    if(idIntervalo){
    //     inputMusicaEnfoque.addEventListener('change', () => {
    //         if(playMusic.paused) {
    //             playMusic.play();
    //         } else {
    //             playMusic.pause();
    //     }
    //     })
    pauseMusic.play();
    reiniciar()
    return
    }
    playMusic.play();
    idIntervalo=setInterval(cuentaRegresiva, 1000)//1000= 1seg
}

function reiniciar(){
    clearInterval(idIntervalo)
    textoIniciarPausar.textContent="Comenzar";
    //Cambiamos la imagen 
    iconoIniciarPausar.setAttribute('src',`/imagenes/play_arrow.png`);
    idIntervalo=null
}

function mostrarTiempo(){
    const tiempo= new Date(tiempoSeg*1000);
    const tiempoFormateado= tiempo.toLocaleTimeString('es-MX',{minute:'2-digit', second:'2-digit'})
    tiempoEnPantalla.innerHTML=`${tiempoFormateado}`
}

mostrarTiempo()