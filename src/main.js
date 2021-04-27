import { example } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

// console.log(example, data);

//Variables globales para cambiar de pantalla
const welcomePage = document.getElementById("sectionContainer");
const charactersPage = document.getElementById("charactersPage");
//Función para pasar a la segunda pantalla
const changePage = document.getElementById("enterButton");
      changePage.addEventListener("click", () => {
          console.log("GO")
        welcomePage.style.display = "none";
        charactersPage.style.display = "block";
});

//Función para crear las tarjetas de los personajes
let info = data.results;
let dataContainer = document.getElementById("dataContainer");

window.addEventListener("load", addAllCharacters(info));
function addAllCharacters(info) {
  dataContainer.innerHTML = "";
  for (let i = 0; i < info.length; i++) {
    let card = document.createElement("DIV");
    let image = document.createElement("IMG");
    let name = document.createElement("P");
    card.setAttribute("class", "card");
    card.setAttribute("id", "card");
    image.setAttribute("src", info[i].image);
    image.setAttribute("class", "cardImage");
    name.setAttribute("class", "characterName");
    name.innerHTML = info[i].name;
    dataContainer.appendChild(card);
    card.appendChild(image);
    card.appendChild(name);
    //aqui le decimos a la card que cuando oiga click ejecute la funcion que muestra el modal
    // card.onclick = function () {
    //   addModal(info[i]);
    // }
  }
}