// import { example } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';
import functions from './data.js'
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
// let info = data.results;
let seriesData = data.results;
// let dataContainer = document.getElementById("dataContainer");

// window.addEventListener("load", addAllCharacters(info));
// function addAllCharacters(info) {
//   dataContainer.innerHTML = "";
//   for (let i = 0; i < info.length; i++) {
//     let card = document.createElement("DIV");
//     let image = document.createElement("IMG");
//     let name = document.createElement("P");
//     card.setAttribute("class", "card");
//     card.setAttribute("id", "card");
//     image.setAttribute("src", info[i].image);
//     image.setAttribute("class", "cardImage");
//     name.setAttribute("class", "characterName");
//     name.innerHTML = info[i].name;
//     dataContainer.appendChild(card);
//     card.appendChild(image);
//     card.appendChild(name);
//   }
// }
// window.addEventListener("load", printCharacters(seriesData));
function printCharacters(data){
  let list = "";
  for(let i = 0; i < data.length; i++){
       list += `<div class="flip-card">
       <div class="flip-card-inner">
         <div class="card" id="card">
           <img src="${data[i].image}" class="cardImage">
           <p class="characterName">${data[i].name}</p>
         </div>
         <div class="flip-card-back">
           <img src="images/logo.png" class="cardBackLogo">
           <img src="images/series2.png" class="cardBackImage">
           <p class="cardInfo">Gender: ${data[i].gender}</p>
           <p class="cardInfo">Species: ${data[i].species}</p>
           <p class="cardInfo">Status: ${data[i].status}</p>
         </div>
       </div>
     </div>
     </div>`
  }
  return list;
}
document.getElementById("dataContainer").innerHTML = printCharacters(seriesData);


//Función para filtrar la data
function selectFunction() {
  let TheFiltersArray = seriesData;
  let filterGender = document.getElementById("selectGender").value;
  let filterSpecies = document.getElementById("selectSpecies").value;
  // let orderAZ = document.getElementById("selectOrderAZ").value;
  let searchBar = document.getElementById("searchInput").value;
  //si el filtro no viene vacío se ejecuta la función filtrar, que devolverá el arreglo con los datos filtrados
  if (filterGender != "") {
    TheFiltersArray = functions.toFilter(TheFiltersArray, "gender", filterGender);
  }
  if (filterSpecies != "") {
    TheFiltersArray = functions.toFilter(TheFiltersArray, "species", filterSpecies);
  }
  // if (orderAZ != "") {
  //   TheFiltersArray = toOrderAZ(TheFiltersArray, orderAZ);
  // }
  if (searchBar != "") {
    TheFiltersArray = functions.search(TheFiltersArray, searchBar);
  }

  //Pintamos las cartas otra vez, pero con la data filtrada
  document.getElementById("dataContainer").innerHTML = printCharacters(TheFiltersArray);
}
selectFunction();
document.getElementById("selectGender").addEventListener("change", selectFunction);
document.getElementById("selectSpecies").addEventListener("change", selectFunction);
// document.getElementById("selectOrderAZ").addEventListener("change", selectFunction);
document.getElementById("searchInput").addEventListener("keyup", selectFunction);





