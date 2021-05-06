const functions = {

  toFilter(arrayrickymorty, elementName, filterValue){
    arrayrickymorty = arrayrickymorty.filter((theElement) => theElement[elementName] === filterValue);
    return arrayrickymorty;
  },

  search(arrayrickymorty, characterName){
    let arrayrickymortyTwo = arrayrickymorty.filter(element => element.name.toLowerCase().includes(characterName));
    return arrayrickymortyTwo;
  },

  orderAZ(arrayrickymorty) {
    let orderedInfo = arrayrickymorty.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      { 
        return -1;
      }
    });
    return orderedInfo;
  },

  orderZA(arrayrickymorty) {
    let orderedInfo = arrayrickymorty.sort(function (a, b) {
      if (a.name < b.name){
        return 1;
      }
      {
        return -1;
      }
    });
    return orderedInfo;
  },

  orderDefault(arrayrickymorty) {
    let orderedInfo = arrayrickymorty.sort(function (a, b) {
      if (a.id > b.id) {
        return 1;
      }
      {
        return -1;
      }
    });
    return orderedInfo;
  }
}

export default functions;