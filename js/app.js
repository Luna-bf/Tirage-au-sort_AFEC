'use strict';

const elements = {
    allNames: document.querySelector(".background"),
    form: document.querySelector(".champ"),
    inputValue: document.getElementById('champ'),
    submitBtn: document.querySelector(".valider"),
};

//Le tableau qui va contenir la liste des prénoms
let names = [];

function addNames() {
    let template = names.map(name => `<li>${name}</li>`).join('\n');
    elements.allNames.innerHTML = template;
    addNames();
}

elements.submitBtn.addEventListener("click", (e) => {
    e.preventDefault; //J'empêche le rechargement de la page (comportement par défaut lorsqu'un formulaire est soumis)

    names.push(elements.inputValue.value);
    elements.inputValue.value = '';
    addNames();
});