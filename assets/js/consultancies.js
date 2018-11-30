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

  { name: "Huron Consulting Group (Vonlay)",
    website: "https://www.huronconsultinggroup.com/",
    logo: "../assets/img/consulting/huron.jpg",
    twitter: "https://twitter.com/Huron",
    linkedin: "https://www.linkedin.com/company/5751/",
    glassdoor: "https://www.glassdoor.com/Overview/Working-at-Huron-Consulting-Group-EI_IE35223.11,33.htm",
    confirmed: true
  },

  { name: "Accenture/Sagacious Consultants",
    website: "http://www.sagaciousconsultants.com/index.html",
    logo: "../assets/img/consulting/sagacious.png",
    twitter: "https://twitter.com/Accenture",
    linkedin: "https://www.linkedin.com/company/456960/",
    glassdoor: "https://www.glassdoor.com/Overview/Working-at-Sagacious-Consultants-EI_IE423622.11,32.htm",
    confirmed: true
  },

  { name: "Impact Advisors",
    website: "http://www.impact-advisors.com/",
    logo: "../assets/img/consulting/impactadvisors.png",
    twitter: "https://twitter.com/ImpactAdvisors",
    linkedin: "https://www.linkedin.com/company/218097/",
    glassdoor: "https://www.glassdoor.com/Overview/Working-at-Impact-Advisors-EI_IE765876.11,26.htm",
    confirmed: true
  },

  { name: "Avaap (fka Falcon Consulting Group)",
    website: "https://www.avaap.com/",
    logo: "../assets/img/consulting/avaap.jpg",
    twitter: "https://twitter.com/avaap_usa",
    linkedin: "https://www.linkedin.com/company/avaap/",
    glassdoor: "https://www.glassdoor.com/Overview/Working-at-Falcon-Consulting-Group-EI_IE413291.11,34.htm",
    confirmed: true
  },

  { name: "Deloitte",
    website: "https://www2.deloitte.com/us/en.html",
    logo: "../assets/img/consulting/deloitte.jpg",
    twitter: "https://twitter.com/DeloitteUS",
    linkedin: "https://www.linkedin.com/company/1038/",
    glassdoor: "https://www.glassdoor.com/Overview/Working-at-Deloitte-EI_IE2763.11,19.htm",
    confirmed: true
  },

  { name: "Santa Rosa Consulting",
    website: "https://www.santarosaconsulting.com/",
    logo: "../assets/img/consulting/santarosa.png",
    twitter: "https://twitter.com/SantaRosaC",
    linkedin: "https://www.linkedin.com/company/390402/",
    glassdoor: "https://www.glassdoor.com/Overview/Working-at-Santa-Rosa-Consulting-EI_IE703553.11,32.htm",
    confirmed: true
  },

  { name: "Belmero, Inc.",
    website: "https://www.belmero.com/",
    logo: "../assets/img/consulting/belmero.jpeg",
    twitter: "https://twitter.com/BelmeroInc",
    linkedin: "https://www.linkedin.com/company/2694331/",
    glassdoor: null,
    confirmed: false
  },

  { name: "Pivot Point Consulting",
    website: "http://pivotpointconsulting.com/",
    logo: "../assets/img/consulting/pivotpoint.jpg",
    twitter: "https://twitter.com/pivotpc",
    linkedin: "https://www.linkedin.com/company/pivot-point-consulting-llc/",
    glassdoor: "https://www.glassdoor.com/Overview/Working-at-Pivot-Point-Consulting-EI_IE1141520.11,33.htm",
    confirmed: true
  },

  { name: "The Chartis Group (Aspen Advisors)",
    website: "https://www.chartis.com/services/informatics-and-technology",
    logo: "../assets/img/consulting/chartisgroup.jpg",
    twitter: "https://twitter.com/thechartisgroup",
    linkedin: "https://www.linkedin.com/company/38109/",
    glassdoor: "https://www.glassdoor.com/Overview/Working-at-The-Chartis-Group-EI_IE301179.11,28.htm",
    confirmed: false
  },

  { name: "CTG - Computer Task Group",
    website: "https://www.ctg.com/",
    logo: "../assets/img/consulting/ctg.jpg",
    twitter: "https://twitter.com/CTGinc",
    linkedin: "https://www.linkedin.com/company/ctginc/",
    glassdoor: "https://www.glassdoor.com/Overview/Working-at-Computer-Task-Group-EI_IE170.11,30.htm",
    confirmed: false
  },

  { name: "314e Corporation",
    website: "http://www.314e.com/",
    logo: "../assets/img/consulting/314e.jpg",
    twitter: "https://twitter.com/314e",
    linkedin: "https://www.linkedin.com/company/314e-corporation/",
    glassdoor: "https://www.glassdoor.com/Overview/Working-at-314e-EI_IE244845.11,15.htm",
    confirmed: false
  },

  { name: "Navigant (McKinnis Consulting/MultiCare)",
    website: "https://www.navigant.com/",
    logo: "../assets/img/consulting/navigant.png",
    twitter: "https://twitter.com/NavigantHealth",
    linkedin: "https://www.linkedin.com/company/4904/",
    glassdoor: "https://www.glassdoor.com/Overview/Working-at-Navigant-EI_IE6236.11,19.htm",
    confirmed: true
  },

  { name: "Cumberland Consulting Group",
    website: "http://www.cumberlandcg.com/",
    logo: "../assets/img/consulting/cumberland.png",
    twitter: "https://twitter.com/cumberlandcg",
    linkedin: "https://www.linkedin.com/company/cumberland-consulting-group/",
    glassdoor: "https://www.glassdoor.com/Overview/Working-at-Cumberland-Consulting-Group-EI_IE256042.11,38.htm",
    confirmed: true
  },

  { name: "Optimum Healthcare IT",
    website: "https://www.optimumhit.com/",
    logo: "../assets/img/consulting/optimum.jpg",
    twitter: "https://twitter.com/OptimumHIT",
    linkedin: "https://www.linkedin.com/company/optimum-healthcare-it/",
    glassdoor: "https://www.glassdoor.com/Overview/Working-at-Optimum-Healthcare-IT-EI_IE855416.11,32.htm",
    confirmed: true
  },

  { name: "Umbrella Health IT",
    website: "http://www.umbrellahealthit.com/",
    logo: "../assets/img/consulting/umbrella.png",
    twitter: null,
    linkedin: "https://www.linkedin.com/company/10831208/",
    glassdoor: null,
    confirmed: false
  },

  { name: "Stoltenberg Consulting",
    website: "https://www.stoltenberg.com/",
    logo: "../assets/img/consulting/stoltenberg.jpg",
    twitter: "https://twitter.com/StoltenbergCon",
    linkedin: "https://www.linkedin.com/company/108130/",
    glassdoor: "https://www.glassdoor.com/Overview/Working-at-Stoltenberg-Consulting-EI_IE833775.11,33.htm",
    confirmed: true
  },

  { name: "Orchestrate Healthcare",
    website: "http://www.orchestratehealthcare.com/",
    logo: "../assets/img/consulting/orchestrate.jpeg",
    twitter: "https://twitter.com/OrchestrateHC",
    linkedin: "https://www.linkedin.com/company/orchestrate-healthcare/",
    glassdoor: "https://www.glassdoor.com/Overview/Working-at-Orchestrate-Healthcare-EI_IE521478.11,33.htm",
    confirmed: false
  },

  { name: "Hayes Management Consulting",
    website: "http://www.hayesmanagement.com/",
    logo: "../assets/img/consulting/hayes.jpg",
    twitter: "https://twitter.com/HayesManagement",
    linkedin: "https://www.linkedin.com/company/38915/",
    glassdoor: "https://www.glassdoor.com/Overview/Working-at-Hayes-Management-Consulting-EI_IE667365.11,38.htm",
    confirmed: true
  },

  { name: "Evergreen Healthcare Partners",
    website: "https://evergreenhealthcarepartners.com",
    logo: "../assets/img/consulting/evergreen.png",
    twitter: null,
    linkedin: "https://www.linkedin.com/company/22314988/",
    glassdoor: null,
    confirmed: true
  },

  { name: "The Wilshire Group Associates",
    website: "http://thewilshiregroup.net",
    logo: "../assets/img/consulting/wilshiregroup.jpg",
    twitter: "https://twitter.com/TheWilshireGrp",
    linkedin: "https://www.linkedin.com/company/the-wilshire-group-associates/",
    glassdoor: null,
    confirmed: true
  },

  { name: "ARCH Group, LLC",
    website: "http://www.myarchgroup.com/index.php/home",
    logo: "../assets/img/consulting/arch.png",
    twitter: null,
    linkedin: "https://www.linkedin.com/company/1438633/",
    glassdoor: null,
    confirmed: false
  },

  { name: "T3K Health",
    website: "http://www.t3khealth.com/",
    logo: "../assets/img/consulting/t3k.png",
    twitter: "https://twitter.com/T3KHealth",
    linkedin: "https://www.linkedin.com/company/3060022/",
    glassdoor: null,
    confirmed: true
  },

  { name: "Chi-Matic",
    website: "https://www.chi-matic.com",
    logo: "../assets/img/consulting/chimatic.jpg",
    twitter: "https://twitter.com/chi_matic",
    linkedin: "https://www.linkedin.com/company/chi-matic/",
    glassdoor: null,
    confirmed: true
  },

  { name: "Downshift Consulting",
    website: "https://www.downshiftconsulting.com/",
    logo: "../assets/img/consulting/downshift.jpg",
    twitter: "https://twitter.com/DownshiftHIT",
    linkedin: "https://www.linkedin.com/company/27204761/",
    glassdoor: null,
    confirmed: false
  },

  { name: "Prominence Advisors",
    website: "http://prominenceadvisors.com/",
    logo: "../assets/img/consulting/prominence.jpg",
    twitter: null,
    linkedin: "https://www.linkedin.com/company/2282953/",
    glassdoor: "https://www.glassdoor.com/Overview/Working-at-Prominence-Advisors-EI_IE801047.11,30.htm",
    confirmed: true
  },

  { name: "Kupplin Worldwide (SOAL Technologies)",
    website: "http://kupplin.com/",
    logo: "../assets/img/consulting/kupplin.png",
    twitter: "https://twitter.com/soaltech",
    linkedin: "https://www.linkedin.com/company/3807145/",
    glassdoor: "https://www.glassdoor.com/Overview/Working-at-Kupplin-Worldwide-EI_IE910288.11,28.htm",
    confirmed: true
  },

  { name: "Parallon Technology Solutions (HCA)",
    website: "https://parallontechnology.com/",
    logo: "../assets/img/consulting/parallon.jpg",
    twitter: "https://twitter.com/parallontech/",
    linkedin: "https://www.linkedin.com/company/parallon-technology-solutions/",
    glassdoor: "https://www.glassdoor.com/Overview/Working-at-Parallon-EI_IE460681.11,19.htm",
    confirmed: true
  },

  { name: "Clinovations (Advisory Board)",
    website: "https://www.advisory.com/consulting/clinovations",
    logo: "../assets/img/consulting/advisoryboard.jpg",
    twitter: "https://twitter.com/AdvisoryBd",
    linkedin: "https://www.linkedin.com/company/the-advisory-board-company/",
    glassdoor: "https://www.glassdoor.com/Overview/Working-at-Advisory-Board-EI_IE13494.11,25.htm",
    confirmed: true
  },

  { name: "Oxford Global Resources",
    website: "https://www.oxfordcorp.com/specialties/healthcare-technology",
    logo: "../assets/img/consulting/oxford.jpg",
    twitter: "https://twitter.com/CareersAtOxford",
    linkedin: "https://www.linkedin.com/company/oxford-global-resources/",
    glassdoor: "https://www.glassdoor.com/Overview/Working-at-Oxford-Global-Resources-EI_IE33499.11,34.htm",
    confirmed: true
  },

  { name: "HCTec",
    website: "https://hctec.com/",
    logo: "../assets/img/consulting/hctec.jpg",
    twitter: "https://twitter.com/HCTecTN",
    linkedin: "https://www.linkedin.com/company/hctec-partners/",
    glassdoor: "https://www.glassdoor.com/Overview/Working-at-HCTec-EI_IE831903.11,16.htm",
    confirmed: true
  },

  { name: "Leidos",
    website: "https://www.leidos.com/markets/health/hospital-systems/expertise/epic",
    logo: "../assets/img/consulting/leidos.jpg",
    twitter: "https://twitter.com/LeidosIn",
    linkedin: "https://www.linkedin.com/showcase/leidoshealth/",
    glassdoor: "https://www.glassdoor.com/Reviews/madison-leidos-health-reviews-SRCH_IL.0,7_IM518_KE8,21.htm",
    confirmed: true
  },

  { name: "New Resources Consulting, Healthcare Solutions Group (fka Clinical Path)",
    website: "http://hsg.nrconsults.com/emr-consulting-epic-consulting/",
    logo: "../assets/img/consulting/nrc.jpg",
    twitter: "https://twitter.com/NRConsults",
    linkedin: "https://www.linkedin.com/company/new-resources-consulting/",
    glassdoor: "https://www.glassdoor.com/Overview/Working-at-New-Resources-Consulting-EI_IE224255.11,35.htm",
    confirmed: true
  },

    { name: "e4 Services",
      website: "http://www.e4-services.com/",
      logo: "../assets/img/consulting/e4.jpg",
      twitter: "https://twitter.com/e4_Services",
      linkedin: "https://www.linkedin.com/company/e4-",
      glassdoor: "https://www.glassdoor.com/Overview/Working-at-e4-Services-EI_IE1413183.11,22.htm",
      confirmed: false
    },
];

var confOutput = "";
var unconfOutput = "";
var randFirms = [];
//referenced from within consulting.js
var alreadyRun = false;

//-----------------------------------------------------
//  Primary entry point, itself builds confOutput
//-----------------------------------------------------
function constructFirmTables() {
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

    //Logo - NOTE: does not protect against null; assumes entries have a website
    confOutput += "<a href=\"" + randFirms[i].website + "\" target=\"_blank\"> <img src=\"";
    confOutput += randFirms[i].logo;
    confOutput += "\" alt=\"Firm Logo\" class=\"center-block\" height=\"32\" width=\"32\"/></a>";
    confOutput += "</td><td>";

    //Name
    confOutput += randFirms[i].name;
    confOutput += "</td><td>";

    //Glassdoor link
    if (randFirms[i].glassdoor != null) {
      confOutput += "<a href=\"" + randFirms[i].glassdoor + "\" target=\"_blank\">glassdoor reviews</a>";
    }
    else {
      confOutput += "no glassdoor listing"
    }
    confOutput += "</td><td>";

    //Website link (using laptop icon)
    if (randFirms[i].website != null) {
      confOutput += "<a href=\""+ randFirms[i].website +"\" target=\"_blank\"><i class=\"fa fa-laptop\"></i></a>";
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

  //document.getElementById('confirmedFirms').innerHTML = confOutput;
  //document.getElementById('unconFirms').innerHTML = unconfOutput;
  var tables = [confOutput, unconfOutput];
  alreadyRun = true;
  return tables;
}

//-----------------------------------------------------
//  unconfOutput
//-----------------------------------------------------
function buildUnconfirmed(obj) {
  unconfOutput += "<tr><td scope=\"row\">";

  //Logo - NOTE: does not protect against null; assumes entries have a website
  unconfOutput += "<a href=\"" + obj.website + "\" target=\"_blank\"> <img src=\"";
  unconfOutput += obj.logo;
  unconfOutput += "\" alt=\"Firm Logo\" class=\"center-block\" height=\"32\" width=\"32\"/></a>";
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
