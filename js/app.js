'use strict';

const elements = {
    allNames: document.querySelector("#container"),
    form: document.querySelector(".champ"),
    input: document.getElementById('champ'),
    submitBtn: document.querySelector(".valider"),
    mixNamesBtn: document.querySelector(".melanger"),
    dialogBox: document.querySelector("#dialog-box"),
    randomNameContainer: document.querySelector("#random-name"),
    closeDialogBtn: document.querySelector("#close-dialog"),
};

//Le tableau qui va contenir la liste des prénoms
let names = [];

sessionStorage.names = JSON.stringify(names);
let storedNames = JSON.parse(sessionStorage.names);

function addName() {
    //Je créé une variable qui va afficher les valeurs de mon tableau names et les convertir en HTML (name => `<li>${name}</li>`)
    let displayName = names.map(name => `<li>${name}</li>`).join('\n');
    elements.allNames.innerHTML = displayName;
    
    console.log(names.length);
}

addName(); //J'appelle ma fonction pour qu'elle s'exécute

//Appeler addName() dans la fonction addName() cause l'erreur "Maximum call stack size exceeded".
//Cela signifie que mon code cause une boucle infinie, car la fonction s'éxécute puis se rappelle elle-même à l'infini (fonction récursive).


elements.submitBtn.addEventListener("click", (e) => {
    e.preventDefault(); //J'empêche le rechargement de la page (comportement par défaut lorsqu'un bouton avec l'attribut "submit" est cliqué)

    //J'ajoute (push) la valeur saisie dans l'input dans le tableau names
    names.push(elements.input.value); //Je fais cela en allant chercher l'élément qui représente l'input, soit elements.input suivi de .value pour préciser que je veux avoir la valeur de cet input
    elements.input.value = ''; //Je vide le contenu de l'input une fois que la valeur de celui-ci est insérée dans le tableau names
    
    addName();
});

let randomName = 0; //Ici la variable randomName est initialisée à zéro, elle contiendra le premier prénom choisi aléatoirement

//lastRandom est initialisée à null, elle va garder la trace du prénom précédement sélectionné, afin d'être sûre qu'il ne se répète pas
let lastRandom = null; //Je l'initialise à null au lieu de "undefined" car null est le choix typique pour signifier l'absence de valeur

//Boite de dialogue
function displayRandomName() {

    do {
        randomName = names[Math.floor(Math.random() * names.length)]; //Je déclare une nouvelle variable qui va choisir une valeur aléatoire dans le tableau names[] 
    } while(randomName === lastRandom)
    lastRandom = randomName;
    elements.randomNameContainer.textContent = lastRandom; //J'affiche ensuite cette valeur dans la boite modale avec textContent (randomNameContainer)
    
    console.log(randomName); //(Optionnel) je fais un console.log
}

displayRandomName();

//Quand le bouton "Mélanger" est cliqué...
elements.mixNamesBtn.addEventListener("click", () => {
    //J'appelle ma fonction displayRandomName (pour afficher une valeur aléatoire du tableau)
    displayRandomName();

    elements.dialogBox.showModal(); //J'affiche la fenêtre modale
    console.log("Dialog box open"); //Je peux aussi afficher du texte dans la console pour le confirmer
});

//Quand le bouton "Fermer" est cliqué...
elements.closeDialogBtn.addEventListener("click", () => {
    elements.dialogBox.close(); //Je fais disparaitre la fenêtre modale
    console.log("Dialog box closed"); //J'affiche du texte dans la console pour le confirmer
});