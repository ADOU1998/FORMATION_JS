//Rappel types de données
let string = "Chaine";
let number = 23;
let boolean = true;
let maVariable; // Type Undefine

// Tableau
let array = ["Abidjan", "Daloa", "Bouaké"];
//console.log(array[1][3]);

let array2 = ["Abidjan", 24, true, [1,2], {nom: "Fabrice"}];
// console.log(array2[4].nom);

// Objet
let objet = {
    pseudo: "Denis",
    age: 33,
    techno: ["Javascript", "React", "NodeJs"],
    admin: false,
}

// objet.adresse = "BP ABIDJAN 23";
// console.log(objet);

let data = [
    {
        pseudo: "Denis",
        age: 33,
        techno: ["Javascript", "React", "NodeJs"],
        admin: false,
    },
    {
        pseudo: "Fabrice",
        age: 20,
        techno: ["Javascript", "React", "NodeJs"],
        admin: false,
    },
    {
        pseudo: "Jaques",
        age: 42,
        techno: ["Flutter", "React", "NodeJs"],
        admin: false,
    }
]

// console.log(data[2].pseudo);

//--------------------------
// STRUCTURES DE CONTROLES
//--------------------------

if(data[0].age > data[1].age){
    // console.log(data[0].pseudo + " est plus agé que celui de " + data[1].pseudo);
} else {
    // valeur faux
}