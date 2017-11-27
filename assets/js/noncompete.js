//js for EpicNonCompete.com page, hosted within LifeAfterEpic.com

//Fetching HTML elements in variables by ID
var ENCForm = document.getElementById("Epic_Non_Compete_Form");
//Create new element form
var createForm = document.createElement('form');

//Setting action attribute on form
createForm.setAttribute("action", "");
//Setting method attribute on form
createForm.setAttribute("method", "post");

ENCForm.appendChild(createForm);

//Heading of form
var heading = document.createElement('h3');
heading.innerHTML = "Your Epic Information: ";
createForm.appendChild(heading);

//Insert horizontal row/line following heading
var line = document.crateElement('hr');
createForm.appendChild(line);
var linebreak = document.createElement('br');
crateForm.appendChild(linebreak);
