import data from './data/rickandmorty/rickandmorty.js';
import functions from './data.js'

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

// Guardamos los resultados de la data del js en una variable
let seriesData = data.results;
//Función para crear las tarjetas de los personajes
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
  let orderAZ = document.getElementById("selectOrderAZ").value;
  let searchBar = document.getElementById("searchInput").value;
  //si el filtro no viene vacío se ejecuta la función filtrar, que devolverá el arreglo con los datos filtrados
  if (searchBar != "") {
    TheFiltersArray = functions.search(TheFiltersArray, searchBar);
  }
  if (filterGender != "") {
    TheFiltersArray = functions.toFilter(TheFiltersArray, "gender", filterGender);
  }
  if (filterSpecies != "") {
    TheFiltersArray = functions.toFilter(TheFiltersArray, "species", filterSpecies);
  }
  //para el filtro de orden alfabético debemos comparar el valor del option del select para ejecutar la función filtrar
  if (orderAZ == "1") {
    TheFiltersArray = functions.orderAZ(TheFiltersArray, orderAZ);
  }
  if (orderAZ == "2") {
    TheFiltersArray = functions.orderZA(TheFiltersArray, orderAZ);
  }
  if (orderAZ == "default") {
    TheFiltersArray = functions.orderDefault(TheFiltersArray, orderAZ);
  }
  //Pintamos las cartas otra vez, pero con la data filtrada
  document.getElementById("dataContainer").innerHTML = printCharacters(TheFiltersArray);
}
selectFunction();
document.getElementById("selectGender").addEventListener("change", selectFunction);
document.getElementById("selectSpecies").addEventListener("change", selectFunction);
document.getElementById("selectOrderAZ").addEventListener("change", selectFunction);
document.getElementById("searchInput").addEventListener("keyup", selectFunction);