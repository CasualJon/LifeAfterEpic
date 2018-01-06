//Seems like I might not be able to query against a JSON file from gh-pages
//For now, storing the data needed to build table within this js file
//... yay workarounds.

const orgType = {
  CONSULTING: "Consulting",
  SOFTWARE: "Software",
  NONPROFIT: "Non-Profit",
  OTHER: "Other",
};

var ventures = [
  { name: "BlueTree Network",
    website: "https://www.bluetreenetwork.com/",
    logo: "../assets/img/consulting/bluetreenetwork.jpg",
    twitter: "https://twitter.com/BluetreeNetwork",
    linkedin: "https://www.linkedin.com/company/2663341/",
    glassdoor: "https://www.glassdoor.com/Overview/Working-at-Bluetree-Network-EI_IE1010664.11,27.htm",
    confirmed: true,
    category: orgType.CONSULTING,
    acquired: false,
    parent: null,
  },

  { name: "Vonlay",
    website: "https://www.huronconsultinggroup.com/",
    logo: "../assets/img/consulting/huron.jpg",
    twitter: null,
    linkedin: "https://www.linkedin.com/company/5751/",
    glassdoor: "https://www.glassdoor.com/Overview/Working-at-Huron-Consulting-Group-EI_IE35223.11,33.htm",
    confirmed: true,
    category: orgType.CONSULTING,
    acquired: true,
    parent: "Huron Consulting Group",
  },

  { name: "Sagacious Consultants",
    website: "http://www.sagaciousconsultants.com/index.html",
    logo: "../assets/img/consulting/sagacious.png",
    twitter: "https://twitter.com/Accenture",
    linkedin: "https://www.linkedin.com/company/456960/",
    glassdoor: "https://www.glassdoor.com/Overview/Working-at-Sagacious-Consultants-EI_IE423622.11,32.htm",
    confirmed: true,
    category: orgType.CONSULTING,
    acquired: true,
    parent: "Accenture",
  },

  { name: "Falcon Consulting Group",
    website: "https://www.avaap.com/",
    logo: "../assets/img/consulting/avaap.jpg",
    twitter: "https://twitter.com/avaap_usa",
    linkedin: "https://www.linkedin.com/company/avaap/",
    glassdoor: "https://www.glassdoor.com/Overview/Working-at-Falcon-Consulting-Group-EI_IE413291.11,34.htm",
    confirmed: true,
    category: orgType.CONSULTING,
    acquired: true,
    parent: "Aavap",
  },

  { name: "Umbrella Health IT",
    website: "http://www.umbrellahealthit.com/",
    logo: "../assets/img/consulting/umbrella.png",
    twitter: null,
    linkedin: "https://www.linkedin.com/company/10831208/",
    glassdoor: null,
    confirmed: false,
    category: orgType.CONSULTING,
    acquired: false,
    parent: null,
  },

  { name: "ARCH Group, LLC",
    website: "http://www.myarchgroup.com/index.php/home",
    logo: "../assets/img/consulting/arch.png",
    twitter: null,
    linkedin: "https://www.linkedin.com/company/1438633/",
    glassdoor: null,
    confirmed: false,
    category: orgType.CONSULTING,
    acquired: false,
    parent: null,
  },

  { name: "T3K Health",
    website: "http://www.t3khealth.com/",
    logo: "../assets/img/consulting/t3k.png",
    twitter: "https://twitter.com/T3KHealth",
    linkedin: "https://www.linkedin.com/company/3060022/",
    glassdoor: null,
    confirmed: false,
    category: orgType.CONSULTING,
    acquired: false,
    parent: null,
  },
];

var subPage = document.getElementById('content');
var data = "";

var consultingOutput = "";
var softwareOutput = "";
var nonprofitOutput = "";
var otherOutput = "";
var randVentures = [];
var alreadyRun = false;

constructTables();
buildData();
subPage.innerHTML = data;

function constructTables() {
  //Randomize the list of consulting groups for display
  var cnt = ventures.length;
  for (var i = 0; i < cnt; i++) {
    var tmp = ventures.splice(getRandom(ventures.length), 1);
    randVentures.push(tmp[0]);
  }


  for (var i = 0; i < randVentures.length; i++) {
    //Offload building the output of individual sections
    if (randVentures[i].category == "Software") {
      buildSoftware(randVentures[i]);
      continue;
    }
    if (randVentures[i].category == "Non-Profit") {
      buildNonprofit(randVentures[i]);
      continue;
    }
    if (randVentures[i].category == "Other") {
      buildOther(randVentures[i]);
      continue;
    }

    consultingOutput += "<tr><td scope=\"row\">";

    //Logo
    consultingOutput += "<a href=\"" + randVentures[i].website + "\" target=\"_blank\"> <img src=\"";
    consultingOutput += randVentures[i].logo;
    consultingOutput += "\" alt=\"Org Logo\" class=\"center-block\" height=\"64\" width=\"64\"/></a>";
    //Hack inserts empty column w/ 2 spacers for spacing buffer between logo & name
    consultingOutput += "</td><td>&nbsp;&nbsp;</td><td>";

    //Name
    consultingOutput += "";
    consultingOutput += randVentures[i].name;
    consultingOutput += "</td><td>";

    //If acquired, list parent/owner
    if (randVentures[i].acquired == true) {
      consultingOutput += "<small>acquired by " + randVentures[i].parent + "</small>";
    }
    consultingOutput += "</td><td>";

    //Website link (using laptop icon)
    if (randVentures[i].website != null) {
      consultingOutput += "<a href=\""+ randVentures[i].website +"\" target=\"_blank\"><i class=\"fa fa-laptop\"></i></a>";
    }
    else {
      consultingOutput += " ";
    }
    consultingOutput += "</td><td>";

    //LinkedIn link (using LinkedIn icon)
    if (randVentures[i].linkedin != null) {
      consultingOutput += "<a href="+ randVentures[i].linkedin +" target=\"_blank\"><i class=\"fa fa-linkedin\"></i></a>";
    }
    else {
      consultingOutput += " ";
    }
    consultingOutput += "</td><td>";

    //Twitter link (using Twitter icon)
    if (randVentures[i].twitter != null) {
      consultingOutput += "<a href="+ randVentures[i].twitter +" target=\"_blank\"><i class=\"fa fa-twitter\"></i></a>";
    }
    else {
      consultingOutput += " ";
    }

    consultingOutput += "</td></tr>";
  }
}


function buildSoftware(obj) {
  softwareOutput += "<tr><td scope=\"row\">";

  //Logo
  softwareOutput += "<a href=\"" + obj.website + "\" target=\"_blank\"> <img src=\"";
  softwareOutput += obj.logo;
  softwareOutput += "\" alt=\"dammit\" class=\"center-block\" height=\"32\" width=\"32\"/></a>";
  softwareOutput += "</td><td>";

  //Name
  softwareOutput += obj.name;
  softwareOutput += "</td><td>";

  //Glassdoor link
  if (obj.glassdoor != null) {
    softwareOutput += "<a href=\"" + obj.glassdoor + "\" target=\"_blank\">glassdoor reviews</a>";
  }
  else {
    softwareOutput += "no glassdoor listing"
  }
  softwareOutput += "</td><td>";

  //Website link (using laptop icon)
  if (obj.website != null) {
    softwareOutput += "<a href=\""+ obj.website +"\" target=\"_blank\"><i class=\"fa fa-laptop\"></i></a>";
  }
  else {
    softwareOutput += " ";
  }
  softwareOutput += "</td><td>";

  //LinkedIn link (using LinkedIn icon)
  if (obj.linkedin != null) {
    softwareOutput += "<a href="+ obj.linkedin +" target=\"_blank\"><i class=\"fa fa-linkedin\"></i></a>";
  }
  else {
    softwareOutput += " ";
  }
  softwareOutput += "</td><td>";

  //Twitter link (using Twitter icon)
  if (obj.twitter != null) {
    softwareOutput += "<a href="+ obj.twitter +" target=\"_blank\"><i class=\"fa fa-twitter\"></i></a>";
  }
  else {
    softwareOutput += " ";
  }

  softwareOutput += "</td></tr>";
}

function buildNonprofit(obj) {}

function buildOther(obj) {}

function buildData() {
  if (alreadyRun) {
    return;
  }

  data += "<br />";
  data += "<h4>Consultancies</h4>";
  data += "<div class=\"table-responsive\">";
  data += "<table class=\"table\">";
  data += "<tbody id=\"consultingVentures\">";
  data += consultingOutput;
  data += "</tbody></table></div>";

  data += "<br />";
  data += "<h4>Software</h4>";
  data += "<div class=\"table-responsive\">";
  data += "<table class=\"table\">";
  data += "<tbody id=\"softwareVentures\">";
  data += softwareOutput;
  data += "</tbody></table></div>";

  data += "<br />";
  data += "<h4>Non-Profit</h4>";
  data += "<div class=\"table-responsive\">";
  data += "<table class=\"table\">";
  data += "<tbody id=\"nonprofitVentures\">";
  data += nonprofitOutput;
  data += "</tbody></table></div>";

  data += "<br />";
  data += "<h4>Other</h4>";
  data += "<div class=\"table-responsive\">";
  data += "<table class=\"table\">";
  data += "<tbody id=\"otherVentures\">";
  data += otherOutput;
  data += "</tbody></table></div>";

  alreadyRun = true;
}

///////////////////////////////////////
// Random Number Generation
///////////////////////////////////////
function getRandom(num) {
  return Math.floor(Math.random() * num);
}
