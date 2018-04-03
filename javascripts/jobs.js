console.log("jobs");

const printToDom = (domString, divId) => {
  document.getElementById(divId).innerHTML = domString;
};

const buildDomString = jobsArray => {
  let domString = "";
  jobsArray.forEach(job => {
    domString += `<div class="jobs-type">`;

    domString += `<h1>${job.title}</h1>`;

    domString += `</div>`;
  });
  printToDom(domString, "work");
};

function executeThisCodeIfXHRFails() {
  console.log("An error occurred ");
}

function executeThisCodeAfterFileLoaded() {
  const data = JSON.parse(this.responseText);

  buildDomString(data.jobs); // BUILD YOUR DOMSTRING HERE
}

const startApplication = () => {
  var myRequest = new XMLHttpRequest();
  myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
  myRequest.addEventListener("error", executeThisCodeIfXHRFails);
  myRequest.open("GET", "../db/jobs.json");
  myRequest.send();
};
startApplication();
