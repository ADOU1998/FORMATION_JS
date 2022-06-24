const counterDisplay = document.querySelector("h3");
let counter = 0;

const bubbleMaker = () =>{
    const bublle = document.createElement("span"); // Créer un élément en html
    bublle.classList.add('bubble'); // Ajout de la classe bubble via le css
    document.body.appendChild(bublle); // Body a un enfant qui est bubble

    const size = Math.random() * 100 + 100 + "px"; // Générer la taille des bubble avec Math.random()
    bublle.style.height = size; // Hauteur du bubble
    bublle.style.width = size; // La largeur du bubble

    // Disposition horizontale bubble
    bublle.style.top = Math.random() * 100 + 50 + "%";
    bublle.style.left = Math.random() * 100 + "%";

    const plusMinus = Math.random() > 0.5 ? 1 : -1;

    // Disoposition verticale du bubble
    bublle.style.setProperty('--left', Math.random * 100 * plusMinus  + "%")

    // Disparaison après clique
    bublle.addEventListener('click', () => {
        counter++; // Après clique, on ajout 1 sur le score
        counterDisplay.textContent = counter;
        bublle.remove();
    })

    setTimeout(() => {
        bublle.remove(); // Supprimer
    }, 8000 );
};

setInterval(bubbleMaker, 1000);