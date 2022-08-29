console.log('JS OK!');

// un carousel di immagini (un carrello di immagini che mostra un'immagine alla volta)
// due bottoni: freccia sx e freccia dx per navigare le immagini all'interno del carousel.

// visualizziamo un'immagine e nascondiamo le altre, utilizzando una classe active che visualizza l'immagine a cui è associata

// creo array con 5 elementi per 5 immagini
const images = ['01', '02', '03', '04', '05'];
let activeIndex = 0;


const container = document.querySelector('.carousel-container');


for (let i = 0; i < images.length; i++) {
    const image = images[i];
    const imageClass = i === activeIndex ? 'item active' : 'item'

    //  container.innerHTML += '<img class="'+ imageClass +'" src="img/'+ image +'.jpg" alt="due" />'
    // con il backtick è più bello da vedere
    container.innerHTML += `<img
                                class="${imageClass}"
                                src="img/${image}.jpg" alt="${image}" 
                            />`

}

/*
const firstItem = document.querySelector('.item');
firstItem.classList.add('active');
*/

// creo costanti con i bottoni dell'html
const previousButton = document.getElementById('previous');

const nextButton = document.getElementById('next');

// bottone immagine successiva
nextButton.addEventListener('click',
    function () {
        console.log('mi hai cliccato!');

        /*
        // versione senza indice
        // recupero l'elemento attivo
        const activeItem = document.querySelector('.item.active');
        console.log(activeItem);
        const nextElement = activeItem.nextElementSibling;
        console.log(nextElement);
        if (nextElement){
            activeItem.classList.remove('active');
            nextElement.classList.add('active');
        }
        */
        if (activeIndex < images.length - 1) {
            container.innerHTML = '';
            activeIndex++;

            for (let i = 0; i < images.length; i++) {
                const image = images[i];
                const imageClass = i === activeIndex ? 'item active' : 'item'

                container.innerHTML += '<img class="' + imageClass + '" src="img/' + image + '.jpg" alt="due" />'

            }
        }
    }
);


// bottone immagine precedente
previousButton.addEventListener('click',
    function () {
        console.log('mi hai cliccato!');
        /*
        // versione senza indice
        // recupero l'elemento attivo
        const activeItem = document.querySelector('.item.active');
        console.log(activeItem);
        const previousElement = activeItem.previousElementSibling;
        console.log(previousElement);
        if (previousElement){
            activeItem.classList.remove('active');
            previousElement.classList.add('active');
        }
        */

        // la versione con activeIndex sarà uguale a quanto fatto per il nextButton eccetto
        // - controllo activeIndex > 0 (ci deve essere qualcosa dopo che ho sottratto!)
        // - decremento dell'indice con activeIndex--
        if (activeIndex > 0) {
            container.innerHTML = '';
            activeIndex--;

            for (let i = 0; i < images.length; i++) {
                const image = images[i];
                const imageClass = i === activeIndex ? 'item active' : 'item'

                container.innerHTML += '<img class="' + imageClass + '" src="img/' + image + '.jpg" alt="due" />'

            }
        }
    }
);