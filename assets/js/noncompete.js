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

//-------------------------------------------------
//Heading of form
var heading = document.createElement('h3');
heading.innerHTML = "Your Information: ";
createForm.appendChild(heading);

//-------------------------------------------------
//Insert horizontal row/line following heading
var line = document.createElement('hr');
createForm.appendChild(line);
var linebreak = document.createElement('br');
createForm.appendChild(linebreak);

//-------------------------------------------------
//First Name & Last Name
var nameLabel = document.createElement('label');
nameLabel.innerHTML = "Your Name: &nbsp;";
createForm.appendChild(nameLabel);

var nameInput = document.createElement('input');
nameInput.setAttribute("type", "text");
nameInput.setAttribute("name", "dname");
nameInput.setAttribute("placeholder", "FirstName LastName");
createForm.appendChild(nameInput);

createForm.appendChild(document.createElement('br'));

//-------------------------------------------------
//First Name & Last Name
var emailLabel = document.createElement('label');
emailLabel.innerHTML = "Your Email: &nbsp;";
createForm.appendChild(emailLabel);

var emailInput = document.createElement('input');
emailInput.setAttribute("type", "text");
emailInput.setAttribute("name", "demail");
emailInput.setAttribute("placeholder", "nothanks@notarealemailaddress.com");
createForm.appendChild(emailInput);

createForm.appendChild(document.createElement('br'));

//-------------------------------------------------
//Epic Start Date & Epic End Date
var startDateLabel = document.createElement('label');
startDateLabel.innerHTML = "Epic Start Date: &nbsp;";
createForm.appendChild(startDateLabel);

var startDateInput = document.createElement('input');
startDateInput.setAttribute("type", "text");
startDateInput.setAttribute("name", "dstart");
startDateInput.setAttribute("placeholder", "01/02/2006");
createForm.appendChild(startDateInput);

createForm.appendChild(document.createElement('br'));

var endDateLabel = document.createElement('label');
endDateLabel.innerHTML = "Epic End Date: &nbsp;";
createForm.appendChild(endDateLabel);

var endDateInput = document.createElement('input');
endDateInput.setAttribute("type", "text");
endDateInput.setAttribute("name", "dend");
endDateInput.setAttribute("placeholder", "05/05/2017");
createForm.appendChild(endDateInput);

createForm.appendChild(document.createElement('br'));

//-------------------------------------------------
//Epic Role & Primary Application
var roleLabel = document.createElement('label');
roleLabel.innerHTML = "Epic Role: &nbsp;";
createForm.appendChild(roleLabel);

var roleInput = document.createElement('input');
roleInput.setAttribute("type", "text");
roleInput.setAttribute("name", "drole");
roleInput.setAttribute("placeholder", "IS");
createForm.appendChild(roleInput);

createForm.appendChild(document.createElement('br'));

var primaryAppLabel = document.createElement('label');
primaryAppLabel.innerHTML = "Primary App: &nbsp;";
createForm.appendChild(primaryAppLabel);

var appInput = document.createElement('input');
appInput.setAttribute("type", "text");
appInput.setAttribute("name", "dapp");
appInput.setAttribute("placeholder", "Grand Central");
createForm.appendChild(appInput);

createForm.appendChild(document.createElement('br'));

//-------------------------------------------------
//Epic Role & Primary Application
var certsLabel = document.createElement('label');
certsLabel.innerHTML = "App Certifications: &nbsp;";
createForm.appendChild(certsLabel);

var certsInput = document.createElement('input');
certsInput.setAttribute("type", "text");
certsInput.setAttribute("name", "dcerts");
createForm.appendChild(certsInput);

createForm.appendChild(document.createElement('br'));

//-------------------------------------------------
//Additional Message
var messageLabel = document.createElement('label');
messageLabel.innerHTML = "Message: &nbsp;";
createForm.appendChild(messageLabel);

var messageInput = document.createElement('textarea');
messageInput.setAttribute("type", "text");
messageInput.setAttribute("name", "dmsg");
createForm.appendChild(messageInput);

createForm.appendChild(document.createElement('br'));

//-------------------------------------------------
//Submit Label (for spacing) && Submit Button
var submitLabel = document.createElement('label');
createForm.appendChild(submitLabel);

var submit = document.createElement('button');
submit.setAttribute("type", "button");
submit.setAttribute("class", "btn btn-primary");
submit.setAttribute("onclick", "");
submit.innerHTML = "Submit";
createForm.appendChild(submit);
