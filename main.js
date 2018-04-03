function executeThisCodeIfXHRFails() {
  // NO ES6
  console.log("An error occurred while transferring");
}

function executeThisCodeAfterFileLoaded() {
  // NO ES6
  const data = JSON.parse(this.responseText);

  // BUILD YOUR DOMSTRING HERE
}

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeIfXHRFails);
myRequest.open("GET", "bd/jobs.json");
myRequest.send();
