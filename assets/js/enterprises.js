//Seems like I might not be able to query against a JSON file from gh-pages
//For now, storing the data needed to build table within this js file
//... yay workarounds.

var ventures = [
  { name: "BlueTree Network",
    website: "https://www.bluetreenetwork.com/",
    logo: "../assets/img/consulting/bluetreenetwork.jpg",
    twitter: "https://twitter.com/BluetreeNetwork",
    linkedin: "https://www.linkedin.com/company/2663341/",
    glassdoor: "https://www.glassdoor.com/Overview/Working-at-Bluetree-Network-EI_IE1010664.11,27.htm",
    confirmed: true,
    category: null,
    acquired: null,
  },

  { name: "Huron Consulting Group (Vonlay)",
    website: "https://www.huronconsultinggroup.com/",
    logo: "../assets/img/consulting/huron.jpg",
    twitter: null,
    linkedin: "https://www.linkedin.com/company/5751/",
    glassdoor: "https://www.glassdoor.com/Overview/Working-at-Huron-Consulting-Group-EI_IE35223.11,33.htm",
    confirmed: true,
    category: null,
    acquired: null,
  },

  { name: "Accenture/Sagacious Consultants",
    website: "http://www.sagaciousconsultants.com/index.html",
    logo: "../assets/img/consulting/sagacious.png",
    twitter: "https://twitter.com/Accenture",
    linkedin: "https://www.linkedin.com/company/456960/",
    glassdoor: "https://www.glassdoor.com/Overview/Working-at-Sagacious-Consultants-EI_IE423622.11,32.htm",
    confirmed: true,
    category: null,
    acquired: null,
  },

  { name: "avaap (fka Falcon Consulting Group)",
    website: "https://www.avaap.com/",
    logo: "../assets/img/consulting/avaap.jpg",
    twitter: "https://twitter.com/avaap_usa",
    linkedin: "https://www.linkedin.com/company/avaap/",
    glassdoor: "https://www.glassdoor.com/Overview/Working-at-Falcon-Consulting-Group-EI_IE413291.11,34.htm",
    confirmed: true,
    category: null,
    acquired: null,
  },

  { name: "Umbrella Health IT",
    website: "http://www.umbrellahealthit.com/",
    logo: "../assets/img/consulting/umbrella.png",
    twitter: null,
    linkedin: "https://www.linkedin.com/company/10831208/",
    glassdoor: null,
    confirmed: false,
    category: null,
    acquired: null,
  },

  { name: "ARCH Group, LLC",
    website: "http://www.myarchgroup.com/index.php/home",
    logo: "../assets/img/consulting/arch.png",
    twitter: null,
    linkedin: "https://www.linkedin.com/company/1438633/",
    glassdoor: null,
    confirmed: false,
    category: null,
    acquired: null,
  },

  { name: "T3K Health",
    website: "http://www.t3khealth.com/",
    logo: "../assets/img/consulting/t3k.png",
    twitter: "https://twitter.com/T3KHealth",
    linkedin: "https://www.linkedin.com/company/3060022/",
    glassdoor: null,
    confirmed: false,
    category: null,
    acquired: null,
  },
];

var confOutput = "";
var unconfOutput = "";
var randVentrues = [];
var alreadyRun = false;

//window.onload = function {
function constructFirmTables() {
  //Randomize the list of consulting groups for display
  var cnt = ventures.length;
  for (var i = 0; i < cnt; i++) {
    var tmp = ventures.splice(getRandom(ventures.length), 1);
    randVentrues.push(tmp[0]);
  }


  for (var i = 0; i < randVentrues.length; i++) {

    if (randVentrues[i].confirmed == false) {
      buildUnconfirmed(randVentrues[i]);
      continue;
    }

    confOutput += "<tr><td scope=\"row\">";

    //Logo
    confOutput += "<a href=\"" + randVentrues[i].website + "\" target=\"_blank\"> <img src=\"";
    confOutput += randVentrues[i].logo;
    confOutput += "\" alt=\"dammit\" class=\"center-block\" height=\"32\" width=\"32\"/></a>";
    confOutput += "</td><td>";

    //Name
    confOutput += randVentrues[i].name;
    confOutput += "</td><td>";

    //Glassdoor link
    if (randVentrues[i].glassdoor != null) {
      confOutput += "<a href=\"" + randVentrues[i].glassdoor + "\" target=\"_blank\">glassdoor reviews</a>";
    }
    else {
      confOutput += "no glassdoor listing"
    }
    confOutput += "</td><td>";

    //Website link (using laptop icon)
    if (randVentrues[i].website != null) {
      confOutput += "<a href=\""+ randVentrues[i].website +"\" target=\"_blank\"><i class=\"fa fa-laptop\"></i></a>";
    }
    else {
      confOutput += " ";
    }
    confOutput += "</td><td>";

    //LinkedIn link (using LinkedIn icon)
    if (randVentrues[i].linkedin != null) {
      confOutput += "<a href="+ randVentrues[i].linkedin +" target=\"_blank\"><i class=\"fa fa-linkedin\"></i></a>";
    }
    else {
      confOutput += " ";
    }
    confOutput += "</td><td>";

    //Twitter link (using Twitter icon)
    if (randVentrues[i].twitter != null) {
      confOutput += "<a href="+ randVentrues[i].twitter +" target=\"_blank\"><i class=\"fa fa-twitter\"></i></a>";
    }
    else {
      confOutput += " ";
    }

    confOutput += "</td></tr>";
  }

  var tables = [confOutput, unconfOutput];
  alreadyRun = true;
  return tables;
}


function buildUnconfirmed(obj) {
  unconfOutput += "<tr><td scope=\"row\">";

  //Logo
  unconfOutput += "<a href=\"" + obj.website + "\" target=\"_blank\"> <img src=\"";
  unconfOutput += obj.logo;
  unconfOutput += "\" alt=\"dammit\" class=\"center-block\" height=\"32\" width=\"32\"/></a>";
  unconfOutput += "</td><td>";

  //Name
  unconfOutput += obj.name;
  unconfOutput += "</td><td>";

  //Glassdoor link
  if (obj.glassdoor != null) {
    unconfOutput += "<a href=\"" + obj.glassdoor + "\" target=\"_blank\">glassdoor reviews</a>";
  }
  else {
    unconfOutput += "no glassdoor listing"
  }
  unconfOutput += "</td><td>";

  //Website link (using laptop icon)
  if (obj.website != null) {
    unconfOutput += "<a href=\""+ obj.website +"\" target=\"_blank\"><i class=\"fa fa-laptop\"></i></a>";
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
