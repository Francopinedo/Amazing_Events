
function showPastCards(data) {
  let principal = document.getElementById("principal-div-past");
  let list = "";
    for (const id of data.events) {
      if (data.currentDate > id.date ){
        console.log(data.currentDate +" "+id.date);
        console.log("encontro");
        list +=  ` <div class="card mh-30 m-2" style="width: 18rem;">
   <img class="card-img-top card-img" src="${id.image}" alt="img">
   <div class="card-body">
       <h5 class="card-title">${id.name}</h5>
       <p class="card-text ">${id.description}</p>
       <img class="card-img-bottom mb-md-3" style="width: 45px;"
           src="./assets/icons8-boleto-50.png" alt="img">
      
       <a href="#" class="btn btn-card">Details</a>
   </div>
   </div> `;
      }     
    };
  principal.innerHTML += list;
}

showPastCards(data);
