const html= document.querySelector('html');
const botonCorto = document.querySelector('.app__card-button--corto');
const botonEnfoque= document.querySelector('.app__card-button--enfoque');
const botonLargo= document.querySelector('.app__card-button--largo');
const banner= document.querySelector('.app__image');
const title= document.querySelector('.app__title')


botonCorto.addEventListener('click',()=>{
    cambiarContexto('descanso-corto');
    // html.setAttribute('data-contexto','descanso-corto')
    // banner.setAttribute('src', './imagenes/descanso-corto.png')
});

botonEnfoque.addEventListener('click',()=>{
    cambiarContexto('enfoque');
    // html.setAttribute('data-contexto','enfoque')
    // banner.setAttribute('src', './imagenes/enfoque.png')
});

// Para hacer que el boton largo cambie de color con el click creamos la siq function
//Cuando se haga click el metodo addEventListener ejecutara la funcion
botonLargo.addEventListener('click',()=>{
    cambiarContexto('descanso-largo')
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