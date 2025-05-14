'use strict';

const elements = {
    allNames: document.querySelector("#container"),
    form: document.querySelector(".champ"),
    inputValue: document.getElementById('champ'),
    submitBtn: document.querySelector(".valider"),
};

//Le tableau qui va contenir la liste des prénoms
let names = [];

function addName() {
    elements.allNames.innerHTML = '';

    //Je créé une variable qui va afficher les valeurs de mon tableau names et les convertir en HTML (name => `<li>${name}</li>`)
    let displayName = names.map(name => `<li>${name}</li>`).join('\n');
    elements.allNames.innerHTML = displayName;
}

addName(); //J'appelle ma fonction pour qu'elle s'exécute

elements.submitBtn.addEventListener("click", (e) => {
    e.preventDefault(); //J'empêche le rechargement de la page (comportement par défaut lorsqu'un formulaire est soumis)

    //J'ajoute (push) la valeur saisie dans l'input dans le tableau names
    names.push(elements.inputValue.value); //Je fais cela en allant chercher l'élément qui représente l'input, soit elements.inputValue suivi de .value pour préciser que je veux avoir la valeur de cet input
    elements.inputValue.value = ''; //Je vide le contenu de l'input une fois que la valeur de celui-ci est insérée dans le tableau names
    
    addName();
});