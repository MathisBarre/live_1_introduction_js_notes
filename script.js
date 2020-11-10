var inputElt = document.querySelector(".form__input")
var formElt = document.querySelector(".form")
var ulElt = document.querySelector(".notes")

function addNote(event) {
  event.preventDefault()

  var note = inputElt.value
  
  var liElt = document.createElement("li")
  liElt.textContent = note

  ulElt.appendChild(liElt)

  inputElt.value = ""
}

formElt.addEventListener("submit", addNote)
