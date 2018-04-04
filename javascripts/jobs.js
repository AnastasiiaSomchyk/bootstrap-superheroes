console.log("superheroes");

const printToDom = (domString, divId) => {
  document.getElementById(divId).innerHTML = domString;
};

const buildDomString = heroesArray => {
  let domString = "";
  heroesArray.forEach(superhero => {
    domString += `<li>
          <a href="#">${superhero.name}</a>

    </li>
`;
  });
  printToDom(domString, "awesome-dropdown");
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
