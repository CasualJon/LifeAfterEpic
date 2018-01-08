//Seems like I might not be able to query against a JSON file from gh-pages
//For now, storing the data needed to build table within this js file
//... yay workarounds.

const orgType = {
  CONSULTING: "Consulting",
  SOFTWARE: "Software",
  NONPROFIT: "Non-Profit",
  SERVICES: "Services",
  OTHER: "Other",
};

var ventures = [
  { name: "BlueTree Network",
    website: "https://www.bluetreenetwork.com/",
    logo: "../assets/img/consulting/bluetreenetwork.jpg",
    twitter: "https://twitter.com/BluetreeNetwork",
    linkedin: "https://www.linkedin.com/company/2663341/",
    about: null,
    category: orgType.CONSULTING,
    acquired: false,
    parent: null,
  },

  { name: "Vonlay",
    website: "https://www.huronconsultinggroup.com/",
    logo: "../assets/img/ventures/vonlay.png",
    twitter: null,
    linkedin: "https://www.linkedin.com/company/5751/",
    about: null,
    category: orgType.CONSULTING,
    acquired: true,
    parent: "Huron Consulting Group",
  },

  { name: "Sagacious Consultants",
    website: "http://www.sagaciousconsultants.com/index.html",
    logo: "../assets/img/consulting/sagacious.png",
    twitter: "https://twitter.com/Accenture",
    linkedin: "https://www.linkedin.com/company/456960/",
    about: null,
    category: orgType.CONSULTING,
    acquired: true,
    parent: "Accenture",
  },

  { name: "Falcon Consulting Group",
    website: "https://www.avaap.com/",
    logo: "../assets/img/ventures/falcon.jpg",
    twitter: "https://twitter.com/avaap_usa",
    linkedin: "https://www.linkedin.com/company/avaap/",
    about: null,
    category: orgType.CONSULTING,
    acquired: true,
    parent: "Aavap",
  },

  { name: "Cipe Consulting",
    website: "http://www.cumberlandcg.com/",
    logo: "../assets/img/ventures/cipe.jpg",
    twitter: "https://twitter.com/cumberlandcg",
    linkedin: "https://www.linkedin.com/company/cumberland-consulting-group/",
    about: null,
    category: orgType.CONSULTING,
    acquired: true,
    parent: "Cumberland Consulting Group",
  },

  { name: "Umbrella Health IT",
    website: "http://www.umbrellahealthit.com/",
    logo: "../assets/img/consulting/umbrella.png",
    twitter: null,
    linkedin: "https://www.linkedin.com/company/10831208/",
    about: null,
    category: orgType.CONSULTING,
    acquired: false,
    parent: null,
  },

  { name: "ARCH Group, LLC",
    website: "http://www.myarchgroup.com/index.php/home",
    logo: "../assets/img/consulting/arch.png",
    twitter: null,
    linkedin: "https://www.linkedin.com/company/1438633/",
    about: null,
    category: orgType.CONSULTING,
    acquired: false,
    parent: null,
  },

  { name: "T3K Health",
    website: "http://www.t3khealth.com/",
    logo: "../assets/img/consulting/t3k.png",
    twitter: "https://twitter.com/T3KHealth",
    linkedin: "https://www.linkedin.com/company/3060022/",
    about: null,
    category: orgType.CONSULTING,
    acquired: false,
    parent: null,
  },

  { name: "Redox",
    website: "https://www.redoxengine.com/",
    logo: "../assets/img/ventures/redox.png",
    twitter: "https://twitter.com/Redox",
    linkedin: "https://www.linkedin.com/company/5079845/",
    about: "Redox is the modern API for EHR integration, the bridge from health systems to the cloud and back.",
    category: orgType.SOFTWARE,
    acquired: false,
    parent: null,
  },

  { name: "Tri 4 Schools",
    website: "http://www.tri4schools.org/",
    logo: "../assets/img/ventures/tri4schools.jpg",
    twitter: "https://twitter.com/tri4schools",
    linkedin: null,
    about: "Tri 4 Schools is a Non-Profit organizing kids' athletic events & programs, and donating to the health & nutrition programs within their schools.",
    category: orgType.NONPROFIT,
    acquired: false,
    parent: null,
  },

  { name: "100state",
    website: "https://100state.com/",
    logo: "../assets/img/ventures/100state.jpg",
    twitter: "https://twitter.com/100State",
    linkedin: "https://www.linkedin.com/company/3185919/",
    about: "Wisconsin's largest coworking community, 100state creates a home for problem solvers, creatives, and entrepreneurs.",
    category: orgType.NONPROFIT,
    acquired: false,
    parent: null,
  },

  { name: "Zing Collaborative",
    website: "http://www.zingcollaborative.com/",
    logo: "../assets/img/ventures/zing.jpg",
    twitter: "https://twitter.com/zingcollab",
    linkedin: "https://www.linkedin.com/company/3175708/",
    about: "Leadership coaching, consulting, and training for passionate, talented, & inspired forward thinkers.",
    category: orgType.SERVICES,
    acquired: false,
    parent: null,
  },

  { name: "Isthmus Bubble Soccer",
    website: "http://www.isthmusbubblesoccer.com/",
    logo: "../assets/img/ventures/isthmusbubblesoccer.jpeg",
    twitter: "https://twitter.com/Isthmus_bsoccer",
    linkedin: null,
    about: "Madison's bubble soccer provider! We service the entire Madison area with parties, private events, tournaments and leagues.",
    category: orgType.OTHER,
    acquired: false,
    parent: null,
  },

  { name: "Rule the Room",
    website: "http://ruletheroompublicspeaking.com/",
    logo: "../assets/img/ventures/ruletheroom.png",
    twitter: "https://twitter.com/ruletheroom",
    linkedin: "https://www.linkedin.com/company/2678130/",
    about: "Training & development, presentation & communication skills for companies, financial advisors, and trainers.",
    category: orgType.SERVICES,
    acquired: false,
    parent: null,
  },

  { name: "altSTATES Travel",
    website: "https://www.altstatestravel.com/",
    logo: "../assets/img/ventures/altstates.jpg",
    twitter: "https://twitter.com/altstates",
    linkedin: "https://www.linkedin.com/company/27168027/",
    about: "Unique, native-led adventures for locals and visitors in the Midwestern United States.",
    category: orgType.OTHER,
    acquired: false,
    parent: null,
  },

  { name: "Black Earth Children's Museum",
    website: "https://www.blackearthchildrensmuseum.org/",
    logo: "../assets/img/ventures/bechildrens.png",
    twitter: null,
    linkedin: null,
    about: "Our mission is to inspire youth and families to discover more about themselves, their communities and their world through interactive learning.",
    category: orgType.NONPROFIT,
    acquired: false,
    parent: null,
  },

  { name: "Whiz.ai",
    website: "https://whiz.ai/",
    logo: "../assets/img/ventures/whizai.jpg",
    twitter: "https://twitter.com/whizdotai?lang=en",
    linkedin: "https://www.linkedin.com/company/11164530/",
    about: "Whiz is an AI powered personal data analyst that tracks business trends and keeps users up to date via a conversational interface.",
    category: orgType.SOFTWARE,
    acquired: false,
    parent: null,
  },

  { name: "Moxe Health",
    website: "https://www.moxehealth.com/",
    logo: "../assets/img/ventures/moxe.jpg",
    twitter: "https://twitter.com/moxehealth",
    linkedin: "https://www.linkedin.com/company/2440255/",
    about: "We help health systems and health plans share medical records, key patient insights and claims data in real-time, to seamlessly deliver the right information at the right time.",
    category: orgType.SOFTWARE,
    acquired: false,
    parent: null,
  },

  { name: "CenterX",
    website: "http://www.centerx.com/",
    logo: "../assets/img/ventures/centerx.png",
    twitter: "https://twitter.com/CenterX1",
    linkedin: "https://www.linkedin.com/company/centerx/",
    about: "CenterX is an ePrescribing company providing services for real-time medication adherence tracking by connecting doctors, health plans and pharmacists.",
    category: orgType.SOFTWARE,
    acquired: false,
    parent: null,
  },

  { name: "Health eFilings",
    website: "https://healthefilings.com/",
    logo: "../assets/img/ventures/healthefilings.png",
    twitter: "https://twitter.com/EasyPQRS",
    linkedin: "https://www.linkedin.com/company/10110206/",
    about: "We automate PQRS & VBM filing process by extracting, aggregating, formatting, & submitting quality measures directly to Medicare. No clinic staff time needed!",
    category: orgType.SOFTWARE,
    acquired: false,
    parent: null,
  },
];

var subPage = document.getElementById('enterprisesContent');
var data = "";

var consultingOutput = "";
var softwareOutput = "";
var nonprofitOutput = "";
var servicesOutput = "";
var otherOutput = "";
var randVentures = [];
var alreadyRun = false;

constructTables();
buildData();
subPage.innerHTML = data;


//-----------------------------------------------------
//  Primary entry point, itself builds consultingOutput
//-----------------------------------------------------
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
    if (randVentures[i].category == "Services") {
      buildServices(randVentures[i]);
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
    consultingOutput += "<big>";
    consultingOutput += randVentures[i].name;
    consultingOutput += "</big></td><td>";

    //If acquired, list parent/owner
    if (randVentures[i].acquired == true) {
      consultingOutput += "<small><small>acquired by " + randVentures[i].parent + "</small></small>";
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

//-----------------------------------------------------
//  softwareOutput
//-----------------------------------------------------
function buildSoftware(obj) {
  softwareOutput += "<tr><td scope=\"row\">";

  //Logo
  softwareOutput += "<a href=\"" + obj.website + "\" target=\"_blank\"> <img src=\"";
  softwareOutput += obj.logo;
  softwareOutput += "\" alt=\"Org Logo\" class=\"center-block\" height=\"64\" width=\"64\"/></a>";
  //Hack inserts empty column w/ 2 spacers for spacing buffer between logo & name
  softwareOutput += "</td><td>&nbsp;&nbsp;</td><td>";

  //Name
  softwareOutput += "<big>";
  softwareOutput += obj.name;
  //Hack inserts empty column w/ 2 spacers for spacing buffer between logo & name
  softwareOutput += "</big></td><td>&nbsp;&nbsp;</td><td>";

  //About
  if (obj.about != null) {
    softwareOutput += "<small><small>" + obj.about + "</small></small>";
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

//-----------------------------------------------------
//  nonprofitOutput
//-----------------------------------------------------
function buildNonprofit(obj) {
  nonprofitOutput += "<tr><td scope=\"row\">";

  //Logo
  nonprofitOutput += "<a href=\"" + obj.website + "\" target=\"_blank\"> <img src=\"";
  nonprofitOutput += obj.logo;
  nonprofitOutput += "\" alt=\"Org Logo\" class=\"center-block\" height=\"64\" width=\"64\"/></a>";
  //Hack inserts empty column w/ 2 spacers for spacing buffer between logo & name
  nonprofitOutput += "</td><td>&nbsp;&nbsp;</td><td>";

  //Name
  nonprofitOutput += "<big>";
  nonprofitOutput += obj.name;
  //Hack inserts empty column w/ 2 spacers for spacing buffer between logo & name
  nonprofitOutput += "</big></td><td>&nbsp;&nbsp;</td><td>";

  //About
  if (obj.about != null) {
    nonprofitOutput += "<small><small>" + obj.about + "</small></small>";
  }
  nonprofitOutput += "</td><td>";

  //Website link (using laptop icon)
  if (obj.website != null) {
    nonprofitOutput += "<a href=\""+ obj.website +"\" target=\"_blank\"><i class=\"fa fa-laptop\"></i></a>";
  }
  else {
    nonprofitOutput += " ";
  }
  nonprofitOutput += "</td><td>";

  //LinkedIn link (using LinkedIn icon)
  if (obj.linkedin != null) {
    nonprofitOutput += "<a href="+ obj.linkedin +" target=\"_blank\"><i class=\"fa fa-linkedin\"></i></a>";
  }
  else {
    nonprofitOutput += " ";
  }
  nonprofitOutput += "</td><td>";

  //Twitter link (using Twitter icon)
  if (obj.twitter != null) {
    nonprofitOutput += "<a href="+ obj.twitter +" target=\"_blank\"><i class=\"fa fa-twitter\"></i></a>";
  }
  else {
    nonprofitOutput += " ";
  }

  nonprofitOutput += "</td></tr>";
}

//-----------------------------------------------------
//  servicesOutput
//-----------------------------------------------------
function buildServices(obj) {
  servicesOutput += "<tr><td scope=\"row\">";

  //Logo
  servicesOutput += "<a href=\"" + obj.website + "\" target=\"_blank\"> <img src=\"";
  servicesOutput += obj.logo;
  servicesOutput += "\" alt=\"Org Logo\" class=\"center-block\" height=\"64\" width=\"64\"/></a>";
  //Hack inserts empty column w/ 2 spacers for spacing buffer between logo & name
  servicesOutput += "</td><td>&nbsp;&nbsp;</td><td>";

  //Name
  servicesOutput += "<big>";
  servicesOutput += obj.name;
  //Hack inserts empty column w/ 2 spacers for spacing buffer between logo & name
  servicesOutput += "</big></td><td>&nbsp;&nbsp;</td><td>";

  //About
  if (obj.about != null) {
    servicesOutput += "<small><small>" + obj.about + "</small></small>";
  }
  servicesOutput += "</td><td>";

  //Website link (using laptop icon)
  if (obj.website != null) {
    servicesOutput += "<a href=\""+ obj.website +"\" target=\"_blank\"><i class=\"fa fa-laptop\"></i></a>";
  }
  else {
    servicesOutput += " ";
  }
  servicesOutput += "</td><td>";

  //LinkedIn link (using LinkedIn icon)
  if (obj.linkedin != null) {
    servicesOutput += "<a href="+ obj.linkedin +" target=\"_blank\"><i class=\"fa fa-linkedin\"></i></a>";
  }
  else {
    servicesOutput += " ";
  }
  servicesOutput += "</td><td>";

  //Twitter link (using Twitter icon)
  if (obj.twitter != null) {
    servicesOutput += "<a href="+ obj.twitter +" target=\"_blank\"><i class=\"fa fa-twitter\"></i></a>";
  }
  else {
    servicesOutput += " ";
  }

  servicesOutput += "</td></tr>";
}

//-----------------------------------------------------
//  otherOutput
//-----------------------------------------------------
function buildOther(obj) {
  otherOutput += "<tr><td scope=\"row\">";

  //Logo
  otherOutput += "<a href=\"" + obj.website + "\" target=\"_blank\"> <img src=\"";
  otherOutput += obj.logo;
  otherOutput += "\" alt=\"Org Logo\" class=\"center-block\" height=\"64\" width=\"64\"/></a>";
  //Hack inserts empty column w/ 2 spacers for spacing buffer between logo & name
  otherOutput += "</td><td>&nbsp;&nbsp;</td><td>";

  //Name
  otherOutput += "<big>";
  otherOutput += obj.name;
  //Hack inserts empty column w/ 2 spacers for spacing buffer between logo & name
  otherOutput += "</big></td><td>&nbsp;&nbsp;</td><td>";

  //About
  if (obj.about != null) {
    otherOutput += "<small><small>" + obj.about + "</small></small>";
  }
  otherOutput += "</td><td>";

  //Website link (using laptop icon)
  if (obj.website != null) {
    otherOutput += "<a href=\""+ obj.website +"\" target=\"_blank\"><i class=\"fa fa-laptop\"></i></a>";
  }
  else {
    otherOutput += " ";
  }
  otherOutput += "</td><td>";

  //LinkedIn link (using LinkedIn icon)
  if (obj.linkedin != null) {
    otherOutput += "<a href="+ obj.linkedin +" target=\"_blank\"><i class=\"fa fa-linkedin\"></i></a>";
  }
  else {
    otherOutput += " ";
  }
  otherOutput += "</td><td>";

  //Twitter link (using Twitter icon)
  if (obj.twitter != null) {
    otherOutput += "<a href="+ obj.twitter +" target=\"_blank\"><i class=\"fa fa-twitter\"></i></a>";
  }
  else {
    otherOutput += " ";
  }

  otherOutput += "</td></tr>";
}

//-----------------------------------------------------
//  sets data with the full string to populate html
//-----------------------------------------------------
function buildData() {
  if (alreadyRun) {
    return;
  }

  data += "<br />";
  data += "<h4>Consulting</h4>";
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
  data += "<h4>Professional Services</h4>";
  data += "<div class=\"table-responsive\">";
  data += "<table class=\"table\">";
  data += "<tbody id=\"servicesVentures\">";
  data += servicesOutput;
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
