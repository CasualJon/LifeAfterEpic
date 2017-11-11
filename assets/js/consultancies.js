//Seems like I might not be able to query against a JSON file from gh-pages
//For now, storing the data needed to build table within this js file
//... yay workarounds.

var firms = [
  { name: "BlueTree Network",
    website: "https://www.bluetreenetwork.com/",
    logo: "../assets/img/consulting/bluetreenetwork.jpg",
    twitter: "https://twitter.com/BluetreeNetwork",
    linkedin: "https://www.linkedin.com/company/2663341/",
    glassdoor: "https://www.glassdoor.com/Overview/Working-at-Bluetree-Network-EI_IE1010664.11,27.htm",
    confirmed: true
  },

  { name: "Nordic Consulting Partners",
    website: "https://www.nordicwi.com/",
    logo: "../assets/img/consulting/nordic.jpg",
    twitter: "https://twitter.com/nordicwi",
    linkedin: "https://www.linkedin.com/company/819886/",
    glassdoor:"https://www.glassdoor.com/Reviews/Nordic-Consulting-Partners-Reviews-E1152333.htm",
    confirmed: true
  },

  { name: "The HCI Group",
    website: "https://www.thehcigroup.com/",
    logo: "../assets/img/consulting/hcigroup.jpg",
    twitter: "https://twitter.com/TheHCIGroup",
    linkedin: "https://www.linkedin.com/company/954937/",
    glassdoor: "https://www.glassdoor.com/Reviews/the-hci-group-reviews-SRCH_KE0,13.htm",
    confirmed: true
  },

  { name: "Huron Consulting Group",
    website: "https://www.huronconsultinggroup.com/",
    logo: "../assets/img/consulting/huron.jpg",
    twitter: null,
    linkedin: "https://www.linkedin.com/company/5751/",
    glassdoor: "https://www.glassdoor.com/Overview/Working-at-Huron-Consulting-Group-EI_IE35223.11,33.htm",
    confirmed: true
  },

  { name: "Accenture/Sagacious Consultants",
    website: "http://www.sagaciousconsultants.com/",
    logo: "../assets.img/consulting/sagacious.jpg",
    twitter: "https://twitter.com/Accenture",
    linkedin: "https://www.linkedin.com/company/456960/",
    glassdoor: "https://www.glassdoor.com/Overview/Working-at-Sagacious-Consultants-EI_IE423622.11,32.htm",
    confirmed: true
  },

  { name: "Impact Advisors",
    website: "http://www.impact-advisors.com/",
    logo: "../assets.img/consulting/sagacious.jpg",
    twitter: "https://twitter.com/ImpactAdvisors",
    linkedin: "https://www.linkedin.com/company/218097/",
    glassdoor: "https://www.glassdoor.com/Overview/Working-at-Impact-Advisors-EI_IE765876.11,26.htm",
    confirmed: true
  },

  { name: "avaap (fka Falcon Consulting Group)",
    website: "https://www.avaap.com/",
    logo: "../assets.img/consulting/avaap.jpg",
    twitter: "https://twitter.com/avaap_usa",
    linkedin: "https://www.linkedin.com/company/avaap/",
    glassdoor: "https://www.glassdoor.com/Overview/Working-at-Falcon-Consulting-Group-EI_IE413291.11,34.htm",
    confirmed: true
  },

  { name: "Deloitte",
    website: "https://www2.deloitte.com/us/en.html",
    logo: "../assets.img/consulting/deloitte.jpg",
    twitter: "https://twitter.com/DeloitteUS",
    linkedin: "https://www.linkedin.com/company/1038/",
    glassdoor: "https://www.glassdoor.com/Overview/Working-at-Deloitte-EI_IE2763.11,19.htm",
    confirmed: true
  },

  { name: "Santa Rosa Consulting",
    website: "https://www.santarosaconsulting.com/",
    logo: "../assets.img/consulting/santarosa.png",
    twitter: "https://twitter.com/SantaRosaC",
    linkedin: "https://www.linkedin.com/company/390402/",
    glassdoor: null,
    confirmed: false
  },

  { name: "Belmero, Inc.",
    website: "https://www.belmero.com/",
    logo: "../assets.img/consulting/belmero.jpeg",
    twitter: "https://twitter.com/BelmeroInc",
    linkedin: "https://www.linkedin.com/company/2694331/",
    glassdoor: null,
    confirmed: false
  }
];

var confOutput = "";
var unconfOutput = "";
var randFirms = [];

window.onload = function() {

  //Randomize the list of consulting groups for display
  var cnt = firms.length;
  for (var i = 0; i < cnt; i++) {
    var tmp = firms.splice(getRandom(firms.length), 1);
    randFirms.push(tmp[0]);
  }


  for (var i = 0; i < randFirms.length; i++) {

    if (randFirms[i].confirmed == false) {
      buildUnconfirmed(randFirms[i]);
      continue;
    }

    confOutput += "<tr><td scope=\"row\">";
    confOutput += randFirms[i].name;
    confOutput += "</td><td>";
    if (randFirms[i].glassdoor != null) {
      confOutput += "<a href=\"" + randFirms[i].glassdoor + "\" target=\"_blank\">glassdoor reviews</a>";
    }
    else {
      confOutput += "no glassdoor listing"
    }
    confOutput += "</td><td>";

    //Website link (using laptop icon)
    if (randFirms[i].website != null) {
      confOutput += "<a href="+ randFirms[i].website +" target=\"_blank\"><i class=\"fa fa-laptop\"></i></a>";
    }
    else {
      confOutput += " ";
    }
    confOutput += "</td><td>";

    //LinkedIn link (using LinkedIn icon)
    if (randFirms[i].linkedin != null) {
      confOutput += "<a href="+ randFirms[i].linkedin +" target=\"_blank\"><i class=\"fa fa-linkedin\"></i></a>";
    }
    else {
      confOutput += " ";
    }
    confOutput += "</td><td>";

    //Twitter link (using Twitter icon)
    if (randFirms[i].twitter != null) {
      confOutput += "<a href="+ randFirms[i].twitter +" target=\"_blank\"><i class=\"fa fa-twitter\"></i></a>";
    }
    else {
      confOutput += " ";
    }

    confOutput += "</td></tr>";
  }

  document.getElementById('confirmedFirms').innerHTML = confOutput;
  document.getElementById('unconFirms').innerHTML = unconfOutput;
  //console.log(confOutput);
  //console.log(unconfOutput);
}


function buildUnconfirmed(obj) {
  unconfOutput += "<tr><td scope=\"row\">";
  unconfOutput += obj.name;
  unconfOutput += "</td><td>";
  if (obj.glassdoor != null) {
    unconfOutput += "<a href=\"" + obj.glassdoor + "\" target=\"_blank\">glassdoor reviews</a>";
  }
  else {
    unconfOutput += "no glassdoor listing"
  }
  unconfOutput += "</td><td>";

  //Website link (using laptop icon)
  if (obj.website != null) {
    unconfOutput += "<a href="+ obj.website +" target=\"_blank\"><i class=\"fa fa-laptop\"></i></a>";
  }
  else {
    unconfOutput += " ";
  }
  unconfOutput += "</td><td>";

  //LinkedIn link (using LinkedIn icon)
  if (obj.linkedin != null) {
    unconfOutput += "<a href="+ obj.linkedin +" target=\"_blank\"><i class=\"fa fa-linkedin\"></i></a>";
  }
  else {
    unconfOutput += " ";
  }
  unconfOutput += "</td><td>";

  //Twitter link (using Twitter icon)
  if (obj.twitter != null) {
    unconfOutput += "<a href="+ obj.twitter +" target=\"_blank\"><i class=\"fa fa-twitter\"></i></a>";
  }
  else {
    unconfOutput += " ";
  }

  unconfOutput += "</td></tr>";
}


///////////////////////////////////////
// Random Number Generation
///////////////////////////////////////
function getRandom(num) {
  return Math.floor(Math.random() * num);
}
