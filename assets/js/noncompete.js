//js for EpicNonCompete.com page, hosted within LifeAfterEpic.com

//Fetching screen width (to adjust for mobile)
var width = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;
var smallScr = width < 768;

//Testing code, commented out
//alert("Screen/Window width: " + width + "\nsmallScr = " + smallScr);


//Fetching HTML elements in variables by ID
var ENCForm = document.getElementById("Epic_Non_Compete_Form");
//Create new form element, name element
var createForm = document.createElement('form');
createForm.setAttribute("id", "nonCompForm");

//Create array for role -- CURRRENTLY UNUSED
var epicRoleList = [
  "BID",
  "Client Systems",
  "EDI",
  "IS",
  "Other",
  "QA",
  "R&D",
  "Server Systems",
  "Tech Comm",
  "Trainer",
  "TS",
];
//Create array for Epic Certifications
var epicCertList = [
  "Anesthesia",
  "Beacon",
  "Beaker",
  "Behavioral Health",
  "Bones",
  "Bridges",
  "Caboodle",
  "Cadence",
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
  "Grand Central",
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
  "Prelude",
  "Radar",
  "Radiant",
  "Referrals",
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
//Red asterix for required item
var nameLabel = document.createElement('label');
nameLabel.innerHTML = "<font color=\"red\">*</font>Your Name: &nbsp;";
createForm.appendChild(nameLabel);

if (smallScr) createForm.appendChild(document.createElement('br'));

var nameInput = document.createElement('input');
nameInput.setAttribute("type", "text");
nameInput.setAttribute("name", "fName");
nameInput.setAttribute("placeholder", "FirstName LastName");
createForm.appendChild(nameInput);

createForm.appendChild(document.createElement('br'));

//-------------------------------------------------
//First Name & Last Name
var emailLabel = document.createElement('label');
emailLabel.innerHTML = "<font color=\"blue\">*</font>Your Email: &nbsp;";
createForm.appendChild(emailLabel);

if (smallScr) createForm.appendChild(document.createElement('br'));

var emailInput = document.createElement('input');
emailInput.setAttribute("type", "text");
emailInput.setAttribute("name", "fEmail");
emailInput.setAttribute("placeholder", "nothanks@notarealemailaddress.com");
createForm.appendChild(emailInput);

createForm.appendChild(document.createElement('br'));

//-------------------------------------------------
//First Name & Last Name
var lInLabel = document.createElement('label');
lInLabel.innerHTML = "<font color=\"blue\">*</font>LinkedIn Profile: &nbsp;";
createForm.appendChild(lInLabel);

if (smallScr) createForm.appendChild(document.createElement('br'));

var lInInput = document.createElement('input');
lInInput.setAttribute("type", "text");
lInInput.setAttribute("name", "fLIn");
lInInput.setAttribute("placeholder", "https://www.linkedin.com/...");
createForm.appendChild(lInInput);

createForm.appendChild(document.createElement('br'));
createForm.appendChild(document.createElement('br'));

//-------------------------------------------------
//Epic Start Date
var startDateLabel = document.createElement('label');
startDateLabel.innerHTML = "Epic Start Date: &nbsp;";
createForm.appendChild(startDateLabel);

if (smallScr) createForm.appendChild(document.createElement('br'));

var startDateInput = document.createElement('input');
startDateInput.setAttribute("type", "text");
startDateInput.setAttribute("name", "fStartDate");
startDateInput.setAttribute("placeholder", "MM/DD/YYYY");
createForm.appendChild(startDateInput);

createForm.appendChild(document.createElement('br'));

//-------------------------------------------------
//Epic End Date
var endDateLabel = document.createElement('label');
endDateLabel.innerHTML = "<font color=\"red\">*</font>Epic End Date: &nbsp;";
createForm.appendChild(endDateLabel);

if (smallScr) createForm.appendChild(document.createElement('br'));

var endDateInput = document.createElement('input');
endDateInput.setAttribute("type", "text");
endDateInput.setAttribute("name", "fEndDate");
endDateInput.setAttribute("placeholder", "MM/DD/YYYY");
createForm.appendChild(endDateInput);

createForm.appendChild(document.createElement('br'));

//-------------------------------------------------
//Non-Compete Length
var ncExpLabel = document.createElement('label');
ncExpLabel.innerHTML = "Non-Comp Length: &nbsp;";
createForm.appendChild(ncExpLabel);

if (smallScr) createForm.appendChild(document.createElement('br'));

var ncExpInput = document.createElement('input');
ncExpInput.setAttribute("type", "text");
ncExpInput.setAttribute("name", "fNCExp");
ncExpInput.setAttribute("placeholder", "1 year/2 years");
createForm.appendChild(ncExpInput);

createForm.appendChild(document.createElement('br'));

//-------------------------------------------------
//Epic Role
var roleLabel = document.createElement('label');
roleLabel.innerHTML = "<font color=\"red\">*</font>Epic Role: &nbsp;";
createForm.appendChild(roleLabel);

if (smallScr) createForm.appendChild(document.createElement('br'));

var roleInput = document.createElement('input');
roleInput.setAttribute("type", "text");
roleInput.setAttribute("name", "fRole");
roleInput.setAttribute("placeholder", "IS/TS/QA/RD/BID/EDI/Trainer/etc.");
createForm.appendChild(roleInput);

createForm.appendChild(document.createElement('br'));

//-------------------------------------------------
//Primary Application
var primaryAppLabel = document.createElement('label');
primaryAppLabel.innerHTML = "Primary App/Team: &nbsp;";
createForm.appendChild(primaryAppLabel);

if (smallScr) createForm.appendChild(document.createElement('br'));

var appInput = document.createElement('input');
appInput.setAttribute("type", "text");
appInput.setAttribute("name", "fApp");
appInput.setAttribute("placeholder", "App/Team");
createForm.appendChild(appInput);

createForm.appendChild(document.createElement('br'));

//-------------------------------------------------
//Certifications
var certsLabel = document.createElement('label');
certsLabel.innerHTML = "App Certifications: &nbsp;";
createForm.appendChild(certsLabel);

if (smallScr) createForm.appendChild(document.createElement('br'));

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

if (smallScr) createForm.appendChild(document.createElement('br'));

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
submit.setAttribute("onclick", "validateAndSubmit()");
submit.innerHTML = "Submit";
createForm.appendChild(submit);

//-------------------------------------------------
//Form Validation & Submission Function
function validateAndSubmit() {
  var goodToGo = true;
  var numIssues = 0;
  var validationMsg = "";
  var rName = document.forms["nonCompForm"]["fName"].value;
  var rEmail = document.forms["nonCompForm"]["fEmail"].value;
  var rLIn = document.forms["nonCompForm"]["fLIn"].value;
  var rStartDate = document.forms["nonCompForm"]["fStartDate"].value;
  var rEndDate = document.forms["nonCompForm"]["fEndDate"].value;
  var rNCExp = document.forms["nonCompForm"]["fNCExp"].value;
  var rRole = document.forms["nonCompForm"]["fRole"].value;
  var rApp = document.forms["nonCompForm"]["fApp"].value;
  var rCerts = getSelectedAppCerts();
  var rMsg = document.forms["nonCompForm"]["fMsg"].value;

  //-------------------------------
  //Name Validation ---------------
  // Cannot be blank
  if (rName == null || rName == "") {
    numIssues++;
    goodToGo = false;
    validationMsg += "- Name is required\n";
  }
  else {
    //RegEx Testing:
    //  2 or 3 names separated by one space (hyphen in final name OK)
    //  No non-alpha chars (except space and hypen in final name) permitted
    var nameRE = new RegExp("^[a-zA-Z]+[\040][a-zA-Z]+([\040][a-zA-Z]+|)([\055][a-zA-Z]+|)$"); //([\055][a-zA-Z]+|)$");
    //console.log("Name = " + rName);
    if (!nameRE.test(rName)) {
      numIssues++;
      goodToGo = false;
      validationMsg += "- Name format: First (opt: Second/Middle) Last (opt: -Last)\n";
    }
  }

  //-------------------------------
  //Email Validation --------------
  // Email && LinkenIn cannot both be blank
  if ((rEmail == null || rEmail == "") && (rLIn == null || rLIn == "")) {
    numIssues++;
    goodToGo = false;
    validationMsg += "- Email or LinkedIn required, both cannot be blank\n";
  }
  //RegEx Testing:
  if (rEmail != null && rEmail != "") {
    var emailRE = new RegExp("^[a-zA-Z0-9\137\053\055\056]+@[a-zA-Z0-9\055]+([\056][a-zA-Z0-9\055]+)+$");
    //console.log("Email = " + rEmail);
    if (!emailRE.test(rEmail)) {
      numIssues++;
      goodToGo = false;
      validationMsg += "- Email format invalid\n";
    }
  }

  //-------------------------------
  //LinkedIn Validation -----------
  //RegEx Testing:
  if (rLIn != null && rLIn != "") {
    var linRE = new RegExp("^(https://www[\056]linkedin[\056]com/in/|https://linkedin[\056]com/in/|www[\056]linkedin[\056]com/in/|linkedin[\056]com/in/|/in/|in/|/)?([a-zA-Z0-9\055\137]){5,30}(/)?$");
    //console.log("LinkedIn = " + rLIn);
    if (!linRE.test(rLIn)) {
      numIssues++;
      goodToGo = false;
      validationMsg += "- LinkedIn URL format invalid\n";
    }
  }

  //-------------------------------
  //Start Date Validation ---------
  //RegEx Testing:
  if (rStartDate != null && rStartDate != "") {
    var sdRE = new RegExp("^([0][1-9]|[1][0-2])/([0][1-7])/(1979|198[0-9]|199[0-9]|200[0-9]|201[0-8])$");
    //console.log("Start Date = " + rStartDate);
    if (!sdRE.test(rStartDate)) {
      numIssues++;
      goodToGo = false;
      validationMsg += "- Start Date invalid or not in MM/DD/YYYY format\n";
    }
  }

  //-------------------------------
  //End Date Validation -----------
  // Cannot be blank
  if (rEndDate == null || rEndDate == "") {
    numIssues++;
    goodToGo = false;
    validationMsg += "- End Date is required\n";
  }
  else {
    //RegEx Testing:
    var edRE = new RegExp("^((01|03|05|07|08|10|12)/([0][1-9]|[1][0-9]|[2][0-9]|[3][0-1])|(02)/([0][1-9]|[1][0-19]|[2][0-9])|(04|06|09|11)/([0][1-9]|[1][0-9]|[2][0-9]|[3][0]))/(1979|198[0-9]|199[0-9]|200[0-9]|201[0-8])$");
    //console.log("End Date = " + rEndDate);
    if (!edRE.test(rEndDate)) {
      numIssues++;
      goodToGo = false;
      validationMsg += "- End Date invalid or not in MM/DD/YYYY format\n";
    }
  }

  //-------------------------------
  //Non-Compete Validation --------
  //RegEx Testing:
  if (rNCExp != null && rNCExp != "") {
    var ncRE = new RegExp("^[1-2][\040]?(y|yr|year|years)$");
    //console.log("Non-Compete Length = " + rNCExp);
    if (!ncRE.test(rNCExp)) {
      numIssues++;
      goodToGo = false;
      validationMsg += "- Invalid Non-Compete length";
    }
  }

  //-------------------------------
  //Role Validation ---------------
  if (rRole == null || rRole == "") {
    numIssues++;
    goodToGo = false;
    validationMsg += "- Role is required\n";
  }

  //-------------------------------
  //App Validation ----------------
  //None at present...
  //console.log("Primary Application = " + rApp);

  //Not validating Certifications (Category Selection)
  //console.log("Certifications = " + rCerts);
  //Not validating Message (Openended Free Text)
  //console.log("Message = " + rMsg);

  if (!goodToGo) {
    if (numIssues == 1)
      alert(numIssues + " issue found:\n" + validationMsg);
    else
      alert(numIssues + " issues found:\n" + validationMsg);
  }
  else {
    var info = "<div class=\"text-center\"><hr><h3>You're all set!</h3><br />";
//TODO - Respond with first name below?
    info += "<h4>Everthing looks good, and form is on it's way.<br /><br />";
    info += "&#128077;</h4></div>";
    ENCForm.innerHTML = info;

  }
}

function getSelectedAppCerts() {
  var  selected = new Array();
  var selectionBox = document.forms["nonCompForm"]["fCerts"];
  for (var i = 0; i < selectionBox.length; i++) {
    if (selectionBox.options[i].selected)
      selected.push(selectionBox.options[i].value);
  }

  if (selected.length < 1)
    selected[0] = "No Certifications Listed";
  return selected;
}
