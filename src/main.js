// import { example } from './data.js';
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



                // <div id="card" class="card"> 
                //    <img src="${data[i].image}" class="cardImage">
                //    <p class="characterName">${data[i].name}</p>
                // </div>

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
           <img src="images/logo.png" class="cardBackImage">
           <h3 class="cardBackName">${data[i].name}</h3>
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




{/* <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back">
      <p>${data[i].name}</p>
      <p>Gender: ${data[i].gender}</p>
      <p>Species: ${data[i].species}</p>
      <p>Status: ${data[i].status}</p>
    </div>
  </div>
</div> */}





