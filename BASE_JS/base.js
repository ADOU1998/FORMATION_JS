// Commentaire sur une seule ligne
/* Commentaire sur plusieurs ligne */

// 1 - Variable
// var unTexte = "Je suis une variable";

// let unChiffre = 24;

// unChiffre = 12;

// console.log(unChiffre);

// console.log(unTexte);

// unTexte = "Nouveau texte";

// console.log(unTexte);

// Constante : variable qui ne change pas
// const prenom = "Fabrice";

// prenom = "ADOU";

// console.log(prenom);

// Concaténation ( + ) : permet de mettre bout à bout deux chaines

// let chaine = "Je suis une chaine";

// let nouvelleChaine = "Chaine précédente : " + chaine;

// console.log(nouvelleChaine);

//------- 2- Types de données -------
/* 
- chaine de caractères : string
- nombres : number
- booléen : boolean
- tableau : array
- objet : object
*/ 

// let string = "Je suis une chaine";
// let number = 12;
// let bool = true;
// let array = ['Je', 'suis', 24, false];
// let object = {
//     prenom: "Adou",
//     age: "24",
//     ville: "Abidjan",
// };

// // typeof : Type de variable

// console.log(typeof number);

//3 STRUCTURE DE CONTROLE
/* 
if(condition){
    action 1
}
else{
    action 2
}
*/
// let x = 6;
// let y = 5;

// if(x < y){
    //     console.log("x est inférieur à y");
    // }
    // else{
        //     console.log("x supérieur à y");
// }

// --------- FONCTIONS -----------
let a = 4;

function faireQuelqueChose(){
    console.log("je fais un truc");
    console.log("Trop cool");
}
// Appel de la fonctions
// faireQuelqueChose()

// Fonctions flêchée
const faireUneTache = (tache) => {
    console.log("je fais : " + tache);
}

function add2(x, y){
    console.log(a);
    return a + 2;
}
add2();





