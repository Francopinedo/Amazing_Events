console.log("------- INDEX.js ------");

let principal = document.getElementById("principal-div");

let card = 

//card con data
function obtenerCard(){


  
}

//Mostrar todas las tarjetas
function showCards(data) {
  let list = "";
  for (const id of data.events) {
    console.log("id :" + id.id);
    console.log("image: " + id.assistance);
    console.log("date: " + id.date);
    console.log("description: " + id.description);
    console.log("category: " + id.category);
    console.log("place: " + id.place);
    console.log("capacity: " + id.capacity);
    console.log("estimate: " + id.estimate);
    console.log("price: " + id.price);
    console.log("-----------------");
   

   list +=  ` <div class="card " style="width: 18rem;">
   <img class="card-img-top card-img" src="${id.image}" alt="img">
   <div class="card-body">
       <h5 class="card-title">${id.name}</h5>
       <p class="card-text">${id.description}</p>
       <img class="card-img-bottom mb-md-3" style="width: 45px;"
           src="./assets/icons8-anillos-de-boda-50.png" alt="img">
       <a href="#" class="btn btn-card">Details</a>
   </div>
   </div> `;

  }
  principal.innerHTML += list;
}

//Mostrar una tarjeta sola buscada por ID
function showOneCard(data, id_searched) {
  for (const id of data.events) {
    if (id == id_searched) {
      console.log("id :" + id.id);
      console.log("image: " + id.assistance);
      console.log("date: " + id.date);
      console.log("description: " + id.description);
      console.log("category: " + id.category);
      console.log("place: " + id.place);
      console.log("capacity: " + id.capacity);
      console.log("estimate: " + id.estimate);
      console.log("price: " + id.price);
      console.log("-----------------");
    }

  }
}

//Mostrar si es evento pasado
function showPastEvents(data) {
  for (const id of data) {
    //let date = data.currentDate 
    if (id.date > data.currentDate) {
      //showCard()
      console.log(date.currentDate);
      console.log("id.date :" + id.data);
      console.log("-----------------");
    }
  }
}

//Mostrar si es evento futuro
function showFutureEvents(data) {
  for (const id of data) {
    //let date = data.currentDate 
    if (id.date > data.currentDate) {
      //showCard()
      console.log(date.currentDate);
      console.log("id.date :" + id.data);
      console.log("-----------------");
    }
  }
}

//MAIN JS
showCards(data);


