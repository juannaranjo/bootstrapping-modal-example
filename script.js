// seleccionamos los elementos del DOM que nos interesan
var mainImages = document.querySelectorAll('.main-images');
var modal = document.querySelector('#modal');
var modalImage = document.querySelector('#modal img');
var closeButton = document.querySelector('#modal-close-button');

// ejemplo de como conectarnos a una API y traer la información
fetch('https://rickandmortyapi.com/api/character/').then((value) =>{
    return value.json();
}).then((value) => {
    // almacenamos la data que necesitamos en un Array
    
    var charactersInfo = [];

    for(i = 0; i < 2; i ++){

        var character = {}

        character.img =  value.results[i].image;
        character.name = value.results[i].name;
        charactersInfo.push(character);
    }
    return charactersInfo
}).then((value) => {
    // manipulamos el DOM seleccionando los elementos que tengan la clase "main-images"
    // la propiedad src de los elementos img de mi HTML se llena dinamicamente 
    // con la data obtenida del API y almacenada en el Array "charactersInfo"
    
    for(i = 0; i < mainImages.length; i++){
        mainImages[i].src = value[i].img;
        mainImages[i].alt += value[i].name;
    }
})

// agregar event listener a las imágenes para abrir modal
for(i = 0; i < mainImages.length; i ++){
    mainImages[i].addEventListener('click', openModal)
}

// agregar event listener al botón cerrar 
// en este caso pondremos la función dentro del event listener

closeButton.addEventListener('click', function(){
    modal.style.display = 'none';
})


//función que abre el modal y pasa la información de la imagen a mostrar
function openModal(event) {
    modal.style.display = 'block';
    modalImage.src = event.srcElement.src;
    modalImage.alt = event.srcElement.alt;
}
