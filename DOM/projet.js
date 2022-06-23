const buttons = document.querySelectorAll('.btn');
const result = document.querySelector('#result');

// ForEach : Pour chaque élèment
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        result.textContent += e.target.id;
    });
});

// Btn égale
equal.addEventListener('click', () => {
    // Calcul le resultat avec eval
    result.textContent = eval(result.textContent);
});

// Effacer
clear.addEventListener('click', () => {
    result.textContent = ""
});