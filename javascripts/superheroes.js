console.log("superheroes");

const printToDom = (domString, divId) => {
  document.getElementById(divId).innerHTML = domString;
};

const buildDomString = heroesArray => {
  let domString = "";
  heroesArray.forEach(superhero => {
    domString += `<div class="col-sm-3">
    
                  <div class="panel panel">

                  <div class="panel-heading">
                  <h3 class="panel-title">${superhero.name}</h3>
                  </div>
                 <div class="panel-body">
                  <img class="charImage"src="${superhero.image}">
                  <p class="charDescription">${superhero.description}</p>
                  </div>
               </div>
               </div>
               `;

    //domString += `<img class="hero-image" src="${superhero.image}">`;
    //domString += `<h1>${superhero.name}</h1>`;
    //domString += `<h3>${superhero.gender}</h3>`;

    //domString += `<p>${superhero.description}</p>`;
  });
  printToDom(domString, "work");
};

function executeThisCodeIfXHRFails() {
  console.log("An error occurred ");
}

function executeThisCodeAfterFileLoaded() {
  const data = JSON.parse(this.responseText);

  buildDomString(data.superheroes); // BUILD YOUR DOMSTRING HERE
}

const startApplication = () => {
  var myRequest = new XMLHttpRequest();
  myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
  myRequest.addEventListener("error", executeThisCodeIfXHRFails);
  myRequest.open("GET", "../db/superheroes.json");
  myRequest.send();
};
startApplication();
