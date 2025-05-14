'use strict';

const elements = {
    allNames: document.querySelector("#container"),
    form: document.querySelector(".champ"),
    input: document.getElementById('champ'),
    submitBtn: document.querySelector(".valider"),
};

//Le tableau qui va contenir la liste des prénoms
let names = [];

function addName() {
    //Je créé une variable qui va afficher les valeurs de mon tableau names et les convertir en HTML (name => `<li>${name}</li>`)
    let displayName = names.map(name => `<li>${name}</li>`).join('\n');
    elements.allNames.innerHTML = displayName;
}

/*
Appeler addName() dans la fonction addName() cause l'erreur "Maximum call stack size exceeded".

Cela signifie que mon code cause une boucle infinie, car la fonction s'éxécute puis se rappelle elle-même à l'infini (fonction récursive).
*/
addName(); //J'appelle ma fonction pour qu'elle s'exécute

elements.submitBtn.addEventListener("click", (e) => {
    e.preventDefault(); //J'empêche le rechargement de la page (comportement par défaut lorsqu'un formulaire est soumis)

    //J'ajoute (push) la valeur saisie dans l'input dans le tableau names
    names.push(elements.input.value); //Je fais cela en allant chercher l'élément qui représente l'input, soit elements.input suivi de .value pour préciser que je veux avoir la valeur de cet input
    elements.input.value = ''; //Je vide le contenu de l'input une fois que la valeur de celui-ci est insérée dans le tableau names
    
    addName();
});