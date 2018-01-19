//js for lifeafterepic.com feedback page

//Fetching screen width (to adjust for mobile)
var width = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;
var smallScr = width < 768;

//Array for Good/Bad/Ok
var goodBadOK = [
  "",  //Empty value
  "Poor &nbsp; - &nbsp &#128078;", //Thumbs down
  "Mediocre &nbsp; - &nbsp &#128075;", //Wavering hand
  "Good &nbsp; - &nbsp &#128076;", //OK hand
  "Impressive &nbsp; - &nbsp; &#128077;", //Thumbs up
];

//Fetching HTML elements in variables by ID
var FBForm = document.getElementById("Feedback_Form");
//Create new form element, name element
var createForm = document.createElement('form');
createForm.setAttribute("id", "feedbackForm");
createForm.setAttribute("name", "feedbackForm");

//Setting action attribute on form
createForm.setAttribute("action", "https://www.getform.org/f/412b65e2-6249-4705-a05c-da529b156d08");

//Setting method attribute on form
createForm.setAttribute("method", "POST");
//Make the launching to the GetForm.org Thank You page in a new window
createForm.setAttribute("target", "_blank");
FBForm.appendChild(createForm);


//-------------------------------------------------
//Heading of form
var heading = document.createElement('h3');
heading.innerHTML = "Your Thoughts: ";
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

if (smallScr) createForm.appendChild(document.createElement('br'));

var nameInput = document.createElement('input');
nameInput.setAttribute("type", "text");
nameInput.setAttribute("name", "fName");
nameInput.setAttribute("placeholder", "Jon");
createForm.appendChild(nameInput);

createForm.appendChild(document.createElement('br'));


//-------------------------------------------------
//PMGI
var pmgiLabel = document.createElement('label');
pmgiLabel.innerHTML = "PMGI: &nbsp;";
createForm.appendChild(pmgiLabel);

if (smallScr) createForm.appendChild(document.createElement('br'));

var pmgiInput = document.createElement('select');
pmgiInput.setAttribute("name", "fPMGI");

for (var i = 0; i < goodBadOK.length; i++) {
  var tempVal = document.createElement('option');
  tempVal.setAttribute("value", goodBadOK[i]);
  tempVal.innerHTML = goodBadOK[i];

  pmgiInput.appendChild(tempVal);
}

createForm.appendChild(pmgiInput);
createForm.appendChild(document.createElement('br'));


//-------------------------------------------------
//Feedback Message
var messageLabel = document.createElement('label');
messageLabel.innerHTML = "<font color=\"red\">*</font>Feedback: &nbsp;";
createForm.appendChild(messageLabel);

if (smallScr) createForm.appendChild(document.createElement('br'));

var messageInput = document.createElement('textarea');
messageInput.setAttribute("type", "text");
messageInput.setAttribute("name", "fMsg");
messageInput.setAttribute("placeholder", "I think...");

createForm.appendChild(messageInput);

createForm.appendChild(document.createElement('br'));


//-------------------------------------------------
//Contacted for Follow-up?
var followUpContactText = document.createElement('div');
if (!smallScr) followUpContactText.setAttribute("style", "margin-left: 28%;");
else followUpContactText.setAttribute("style", "margin-left: 0%");
followUpContactText.innerHTML = "Do you want to be contacted for follow-up?";
createForm.appendChild(followUpContactText);

var followUpContactLabel = document.createElement('label');
followUpContactLabel.setAttribute("class", "switch");
if (!smallScr) followUpContactLabel.setAttribute("style", "margin-left: 28%");
else followUpContactLabel.setAttribute("style", "margin-left: 0%");

var followUpInput = document.createElement('input');
followUpInput.setAttribute("type", "checkbox");
followUpInput.setAttribute("name", "fFollowUp");
followUpContactLabel.appendChild(followUpInput);

var followUpSpan = document.createElement('span');
followUpSpan.setAttribute("class", "slider round");
followUpContactLabel.appendChild(followUpSpan);

createForm.appendChild(followUpContactLabel);

createForm.appendChild(document.createElement('br'));


//-------------------------------------------------
//Email
var emailLabel = document.createElement('label');
emailLabel.innerHTML = "<font color=\"red\">*</font>Your Email: &nbsp;";
emailLabel.style.display = "none";
createForm.appendChild(emailLabel);

if (smallScr) createForm.appendChild(document.createElement('br'));

var emailInput = document.createElement('input');
emailInput.setAttribute("type", "text");
emailInput.setAttribute("name", "fEmail");
emailInput.setAttribute("placeholder", "nothanks@notarealemailaddress.com");
emailInput.style.display = "none";
createForm.appendChild(emailInput);

var removableBreak = document.createElement('br')
removableBreak.style.display = "none";
createForm.appendChild(removableBreak);


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
//Event Listener for Slider/Checkbox to show email
var slider = document.querySelector("input[name=fFollowUp]");
slider.addEventListener('change', function() {
  if (this.checked) {
    //alert("ON!");
    emailLabel.style.display = "";
    emailInput.style.display = "";
    removableBreak.style.display = "";
  }
  else {
    //alert("OFF!");
    emailLabel.style.display = "none";
    emailInput.style.display = "none";
    removableBreak.style.display = "none";
  }
});


//-------------------------------------------------
//Form Validation & Submission Function
function validateAndSubmit() {
  var goodToGo = true;
  var numIssues = 0;
  var validationMsg = "";
  var rName = document.forms["feedbackForm"]["fName"].value;
  var rPMGI = document.forms["feedbackForm"]["fPMGI"].selectedIndex;
  var rMsg = document.forms["feedbackForm"]["fMsg"].value;
  var rFollowUp = document.forms["feedbackForm"]["fFollowUp"].checked;
  var rEmail = document.forms["feedbackForm"]["fEmail"].value;


  //-------------------------------
  //Message Validation ---------------
  // Cannot be blank
  if (rMsg == null || rMsg == "") {
    numIssues++;
    goodToGo = false;
    validationMsg += "- Feedback is required\n";
  }
  if (rMsg != null && rMsg != "") {
    var msgRE = new RegExp("^[a-zA-Z0-9][^\0]*$");
    if (!msgRE.test(rMsg)) {
      numIssues++;
      goodToGo = false;
      validationMsg += "- Not sure about that feedback"
    }
  }

  //-------------------------------
  //Email Validation --------------
  // Email && LinkenIn cannot both be blank
  //TODO - INSERT VALIDATION OF YES FOR FOLLOW_UP
  if (rFollowUp && (rEmail == null || rEmail == "")) {
    numIssues++;
    goodToGo = false;
    validationMsg += "- Email cannot be blank\n";
  }
  //RegEx Testing:
  if (rFollowUp && (rEmail != null && rEmail != "")) {
    var emailRE = new RegExp("^[a-zA-Z0-9\137\053\055\056]+@[a-zA-Z0-9\055]+([\056][a-zA-Z0-9\055]+)+$");
    //console.log("Email = " + rEmail);
    if (!emailRE.test(rEmail)) {
      numIssues++;
      goodToGo = false;
      validationMsg += "- Email format invalid\n";
    }
  }


  //Not validating PMGI
  //console.log("PMGI = " + rPMGI);


  if (!goodToGo) {
    if (numIssues == 1)
      alert(numIssues + " issue found:\n" + validationMsg);
    else
      alert(numIssues + " issues found:\n" + validationMsg);
  }
  else {
    //Submit the form
    document.feedbackForm.action="https://www.getform.org/f/412b65e2-6249-4705-a05c-da529b156d08";
    document.feedbackForm.submit();

    var info = "<div class=\"text-center\"><hr><h3>You're all set!</h3><br />";
    info += "<h4>Everthing looks good, thank  you! The form is on it's way.<br /><br />";
    info += "<big><big>&#128515;</big></big></h4>";
    info += "<p><a href=\"../index.html\">Back to LifeAfterEpic.com</a><div>";
    FBForm.innerHTML = info;
  }
}
