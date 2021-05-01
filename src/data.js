// estas funciones son de ejemplo

// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };

const functions = {

  toFilter(arrayrickymorty, elementName, filterValue){
    arrayrickymorty = arrayrickymorty.filter((theElement) => theElement[elementName] === filterValue);
    return arrayrickymorty;
  },

  search(arrayrickymorty, characterName){
    let arrayrickymortyTwo = arrayrickymorty.filter(element => element.name.toLowerCase().includes(characterName));
    return arrayrickymortyTwo;
  }



}

export default functions;