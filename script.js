// Récupérer les éléments HTML nécessaires et les stocker dans des variables
var inputElt = document.querySelector(".form__input");
var formElt = document.querySelector(".form");
var ulElt = document.querySelector(".notes");

function addNote(event) {
  // Permer d'enlever le comportement par défaut de l'événement submit
  // (aller à la page de l'attribut action de la balise form ou rechargement 
  // de la page si l'attribut est manquant)
  event.preventDefault();

  // Prend la valeur de l'input et la met dans la variable note
  var note = inputElt.value;

  // Créer un élément <li>
  var liElt = document.createElement("li");
  // Ajouter le texte de la note en tant que texte de la balise <li>
  liElt.textContent = note;

  // Ajouter l'élément <li> nouvellement créé dans l'élément <ul class="notes">
  ulElt.appendChild(liElt);

  // Supprimer le texte de l'élément input
  inputElt.value = "";
}

// Accrocher la fonction addNote à l'évenement submit de l'élément <form>
formElt.addEventListener("submit", addNote);
