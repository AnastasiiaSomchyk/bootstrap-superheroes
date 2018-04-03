console.log("superheroes");

const printToDom = (domString, divId) => {
  document.getElementById(divId).innerHTML = domString;
};

const buildDomString = heroesArray => {
  let domString = "";
  heroesArray.forEach(superhero => {
    domString += `<div class="hero">`;

    domString += `<img class="hero-image" src="${superhero.image}">`;
    domString += `<h1>${superhero.name}</h1>`;
    domString += `<h3>${superhero.gender}</h3>`;
    domString += `<p>${superhero.description}</p>`;

    domString += `</div>`;
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
