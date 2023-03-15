console.log("------- INDEX.js ------");

let principal = document.getElementById("principal-div");
let arrayDATA = data.events;

//tomar categoria
const checkContainer = document.getElementById("filter-div");
const input = document.querySelector("input");

input.addEventListener('input',superFiltro)
checkContainer.addEventListener("change",superFiltro)

//MAIN JS
showCards(arrayDATA);
crearCheckboxes(arrayDATA)

function superFiltro(){
  let primerFiltro = filterTXT(arrayDATA,input.value)
  let segundoFiltro = categoryFilter(primerFiltro)
  showCards(segundoFiltro)
}

function crearCheckboxes(array){
  let arrayFiltered = array.map(elemento => elemento.category)
  /* console.log(arrayCountries) */
  let setFiltred = new Set(arrayFiltered.sort((a,b)=>{
      if(a<b){
          return -1
      }
      if(a>b){
          return 1
      }
      return 0
  }))
  /* console.log(setCountries) */
  /* let arrayCountriesNoRepeat = Array.from(setCountries) */
  let checks = ''
 setFiltred.forEach(element => {
  checks += `<div class="input-group-text h-1">
  <input class="form-check-input mt-0" type="checkbox" value="${element}" aria-label="${element}">
  <label for="${element}">${element}</label>
  </div> `//id elemento , label forr"elemento" value"elemento"  
  console.log(element)
 })
 checkContainer.innerHTML = checks;
}


function filterTXT(array,txt){
  let arrayFiltered = array.filter(element => element.category.toLowerCase().includes(txt.toLowerCase()))
return arrayFiltered
}



function categoryFilter(array){
  let checkboxes = Array.from(document.querySelectorAll("input[type='checkbox']"))  //selecc los checks
  
  let checksTrue = checkboxes.filter(check => check.checked) //filtra los ON
  
  if(checksTrue.length == 0){
    return array
}
let categories = checksTrue.map(check => check.value)
  let arrayFiltred = array.filter(elemento => categories.includes(elemento.category))
  return arrayFiltred
  
  }

  //Mostrar todas las tarjetas
function showCards(array) {
  if(array.length == 0){
    principal.innerHTML = "<h4 class='display-1 fw-bolder'>No hay elementos coincidentes!</h4>"
    return
}
  let list = "";
  array.forEach(e => {
    
   list +=  ` <div class="card mh-30 m-2" style="width: 18rem;">
   <img class="card-img-top card-img" src="${e.image}" alt="img">
   <div class="card-body">
       <h5 class="card-title">${e.name}</h5>
       <p class="card-text ">${e.description}</p>
       <img class="card-img-bottom mb-md-3" style="width: 45px;"
           src="./assets/icons8-boleto-50.png" alt="img">    
       <a href="#" class="btn btn-card">Details</a>
   </div>
   </div> `;
  })
  principal.innerHTML += list;
}





