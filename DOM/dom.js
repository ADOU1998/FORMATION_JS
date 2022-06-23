// LES SELECTEURS
// document.querySelector('h4').style.background="yellow"

//const baliseHTML = document.querySelector('h4');

// CLick event
const questionContainer = document.querySelector('.click-event');
const btn1 = document.querySelector('#btn1');
const btn2 = document.getElementById('btn2'); // Sélectionner l'id
const response = document.querySelector('p');

// Evenement, fonction fleché
questionContainer.addEventListener('click', () => {
    // Ajouter une classe à partir du css
    questionContainer.classList.toggle("question-click");
});

// click pour la bonne réponse
btn1.addEventListener('click', () => {
    response.classList.add('show-response');
    response.style.background = "green";
});

// Click mauvaise réponse
btn2.addEventListener('click', () => {
    response.classList.add('show-response');
    response.style.background = "red";
});

//--------------------------------------------------------------
// Mouse Events
const mousemove = document.querySelector(".mousemove");

window.addEventListener('mousemove', (e) => {
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
});

// Souris est en bas
window.addEventListener('mousedown', () => {
    mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

// Souris relevé
window.addEventListener('mouseup', () => {
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
    mousemove.style.border = "2px solid teal";
});

// // Souris survole
// questionContainer.addEventListener('mouseenter', () => {
//     questionContainer.style.background = 'rgba(0,0,0,0.6)';
// });

// // Souris SORT
// questionContainer.addEventListener('mouseout', () => {
//     console.log("test");
// });

response.addEventListener('mouseenter', () => {
    response.style.transform = 'rotate(2deg)';
})

// -------------------------------------------------
// Scroll Event
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    console.log(window.scrollY);

    if(window.scrollY > 120){
        nav.style.top = 0;
    }
    else{
        nav.style.top = "-50px";
    }
});