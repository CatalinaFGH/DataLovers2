// import { example } from './data.js';
// import data from './data/rickandmorty/rickandmorty.js';

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