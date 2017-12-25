//js for EpicNonCompete.com page, hosted within LifeAfterEpic.com

//Fetching HTML elements in variables by ID
var ENCForm = document.getElementById("Epic_Non_Compete_Form");
//Create new element form
var createForm = document.createElement('form');
//Create array for Epic Certifications
var epicCertList = [
  "Anesthesia",
  "Beacon",
  "Beaker",
  "Behavioral Health",
  "Bones",
  "Bridges",
  "Caboodle",
  "Care Everywhere",
  "Case Management",
  "Claims - Hospital",
  "Claims - Professional",
  "Clarity",
  "Cupid",
  "Data Courier",
  "Diagnose Behandeling Combinatie",
  "EpicCare Ambulatory",
  "EpicCare ASAP",
  "EpicCare Home Health",
  "EpicCare Hopsice",
  "EpicCare Inpatient - ClinDoc",
  "EpicCare Inpatient - Orders",
  "EpicCare Link",
  "Haiku/Canto",
  "Healthy Planet",
  "HIM Chart Tracking",
  "HIM Coding",
  "HIM Deficiency Tracking",
  "HIM ROI",
  "Home Health Billing",
  "Hospice Billing",
  "ICU",
  "Identity",
  "Kaleidoscope",
  "Long Term Care",
  "Long Term Care Billing",
  "Lucy",
  "MyChart",
  "MyChart Bedside",
  "Nurse Triage",
  "OpTime",
  "Phoenix",
  "Radar",
  "Radiant",
  "Rehab",
  "Reporting Workbench",
  "Research",
  "Resolute Hospital Billing",
  "Resolute Professional Billing",
  "Rover",
  "SBO",
  "Stork",
  "Tapestry",
  "Welcome",
  "Willow Ambulatory",
  "Willow Inpatient",
  "Wisdom",
  "Wound Care",
];


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
nameInput.setAttribute("name", "fName");
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
emailInput.setAttribute("name", "fEmail");
emailInput.setAttribute("placeholder", "nothanks@notarealemailaddress.com");
createForm.appendChild(emailInput);

createForm.appendChild(document.createElement('br'));

//-------------------------------------------------
//First Name & Last Name
var lInLabel = document.createElement('label');
lInLabel.innerHTML = "LinkedIn Profile: &nbsp;";
createForm.appendChild(lInLabel);

var lInInput = document.createElement('input');
lInInput.setAttribute("type", "text");
lInInput.setAttribute("name", "flIn");
lInInput.setAttribute("placeholder", "https://www.linkedin.com/...");
createForm.appendChild(lInInput);

createForm.appendChild(document.createElement('br'));
createForm.appendChild(document.createElement('br'));

//-------------------------------------------------
//Epic Start Date & Epic End Date
var startDateLabel = document.createElement('label');
startDateLabel.innerHTML = "Epic Start Date: &nbsp;";
createForm.appendChild(startDateLabel);

var startDateInput = document.createElement('input');
startDateInput.setAttribute("type", "text");
startDateInput.setAttribute("name", "fStartDate");
startDateInput.setAttribute("placeholder", "MM/DD/YYYY");
createForm.appendChild(startDateInput);

createForm.appendChild(document.createElement('br'));

var endDateLabel = document.createElement('label');
endDateLabel.innerHTML = "Epic End Date: &nbsp;";
createForm.appendChild(endDateLabel);

var endDateInput = document.createElement('input');
endDateInput.setAttribute("type", "text");
endDateInput.setAttribute("name", "fEndDate");
endDateInput.setAttribute("placeholder", "MM/DD/YYYY");
createForm.appendChild(endDateInput);

createForm.appendChild(document.createElement('br'));

//-------------------------------------------------
//Epic Role & Primary Application
var roleLabel = document.createElement('label');
roleLabel.innerHTML = "Epic Role: &nbsp;";
createForm.appendChild(roleLabel);

var roleInput = document.createElement('input');
roleInput.setAttribute("type", "text");
roleInput.setAttribute("name", "fRole");
roleInput.setAttribute("placeholder", "IS/TS/QA/RD/EDI/etc.");
createForm.appendChild(roleInput);

createForm.appendChild(document.createElement('br'));

var primaryAppLabel = document.createElement('label');
primaryAppLabel.innerHTML = "Primary App/Team: &nbsp;";
createForm.appendChild(primaryAppLabel);

var appInput = document.createElement('input');
appInput.setAttribute("type", "text");
appInput.setAttribute("name", "fApp");
appInput.setAttribute("placeholder", "App/Team");
createForm.appendChild(appInput);

createForm.appendChild(document.createElement('br'));

//-------------------------------------------------
//Epic Role & Primary Application
var certsLabel = document.createElement('label');
certsLabel.innerHTML = "App Certifications: &nbsp;";
createForm.appendChild(certsLabel);

var certsInput = document.createElement('select');
certsInput.setAttribute("name", "fCerts");
certsInput.setAttribute("multiple", "multiple");

for (var i = 0; i < epicCertList.length; i++) {
  var tmpCert = document.createElement('option');
  tmpCert.setAttribute("value", epicCertList[i]);
  tmpCert.innerHTML = epicCertList[i];

  certsInput.appendChild(tmpCert);
}

createForm.appendChild(certsInput);

createForm.appendChild(document.createElement('br'));
createForm.appendChild(document.createElement('br'));

//-------------------------------------------------
//Additional Message
var messageLabel = document.createElement('label');
messageLabel.innerHTML = "Message: &nbsp;";
createForm.appendChild(messageLabel);

var messageInput = document.createElement('textarea');
messageInput.setAttribute("type", "text");
messageInput.setAttribute("name", "fMsg");
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
