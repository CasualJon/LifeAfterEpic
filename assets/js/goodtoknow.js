//Seems like I might not be able to query against a JSON file from gh-pages
//For now, storing the data needed to build table within this js file
//... yay workarounds.

const articleType = {
  PERSONAL: "Personal Advice",
  PROFESSIONAL: "Professinal Advice",
  EDUCATION: "Professional Education",
  TIPS: "Tips & Tricks",
};

var articles = [
  { title: "the develoPMent memo",
    link: "http://developmentmemo.com/",
    external: true,
    contributor: "develoPMentmemo.com",
    logo: "../assets/img/contributors/develoPMentmemo.png",
    category: articleType.EDUCATION,
    about: "Project management thoughts and lessons learned.",
  },
];

var subPage = document.getElementById('gtkContent');
var data = "";

var personalOutput = "";
var professionalOutput = "";
var educationOutput = "";
var tipsOutput = "";
var alreadyRun = false;

constructTables();
buildData();
subPage.innerHTML = data;

//-----------------------------------------------------
//  Primary entry point, itself builds personalOutput
//-----------------------------------------------------
function constructTables() {
  for (var i = 0; i < articles.length; i++) {
    //Offload building the output of individual sections, shoud use switch
    if (articles[i].category == "Personal Advice") {
      buildPersonal(articles[i]);
      continue;
    }
    if (articles[i].category == "Professinal Advice") {
      buildProfessional(articles[i]);
      continue;
    }
    if (articles[i].category == "Professional Education") {
      buildEducation(articles[i]);
      continue;
    }
    if (articles[i].category == "Tips & Tricks") {
      buildTips(articles[i]);
      continue;
    }
  }
}


function buildPersonal(obj) {
  personalOutput += "<tr><td scope=\"row\">";

  //Article/content title--------------
  personalOutput += "<a href=\"" + obj.link + "\"";

  //If external site or page, launch in new browser tab
  if (obj.external)
    personalOutput += "target=\"_blank\"";

  personalOutput += "><big>" + obj.title + "</big></a></td>";

  //Article contributor/source logo------
  personalOutput += "<td><img src=\"";
  personalOutput += obj.logo;
  personalOutput += "\" alt=\"Contributor Logo\" class=\"center-block\" height=\"48\" width=\"48\"/></a>";
  //Hack inserts empty column w/ 2 spacers for spacing buffer between logo & name
  personalOutput += "</td><td>&nbsp;&nbsp;</td><td>";

  //Article contributor/source----------
  personalOutput += obj.contributor;
  personalOutput += "</td><td>";

  //Article about section --------------
  personalOutput += "<small><small>" + obj.about + "</small></small></td></tr>";
}


function buildProfessional(obj) {
  professionalOutput += "<tr><td scope=\"row\">";

  //Article/content title--------------
  professionalOutput += "<a href=\"" + obj.link + "\"";

  //If external site or page, launch in new browser tab
  if (obj.external)
    professionalOutput += "target=\"_blank\"";

  professionalOutput += "><big>" + obj.title + "</big></a></td>";

  //Article contributor/source logo------
  professionalOutput += "<td><img src=\"";
  professionalOutput += obj.logo;
  professionalOutput += "\" alt=\"Contributor Logo\" class=\"center-block\" height=\"48\" width=\"48\"/></a>";
  //Hack inserts empty column w/ 2 spacers for spacing buffer between logo & name
  professionalOutput += "</td><td>&nbsp;&nbsp;</td><td>";

  //Article contributor/source----------
  professionalOutput += obj.contributor;
  professionalOutput += "</td><td>";

  //Article about section --------------
  professionalOutput += "<small><small>" + obj.about + "</small></small></td></tr>";
}


function buildEducation(obj) {
  educationOutput += "<tr><td scope=\"row\">";

  //Article/content title--------------
  educationOutput += "<a href=\"" + obj.link + "\"";

  //If external site or page, launch in new browser tab
  if (obj.external)
    educationOutput += "target=\"_blank\"";

  educationOutput += "><big>" + obj.title + "</big></a></td>";

  //Article contributor/source logo------
  educationOutput += "<td><img src=\"";
  educationOutput += obj.logo;
  educationOutput += "\" alt=\"Contributor Logo\" class=\"center-block\" height=\"48\" width=\"48\"/></a>";
  //Hack inserts empty column w/ 2 spacers for spacing buffer between logo & name
  educationOutput += "</td><td>&nbsp;&nbsp;</td><td>";

  //Article contributor/source----------
  educationOutput += obj.contributor;
  educationOutput += "</td><td>";

  //Article about section --------------
  educationOutput += "<small><small>" + obj.about + "</small></small></td></tr>";
}


function buildTips(obj) {
  tipsOutput += "<tr><td scope=\"row\">";

  //Article/content title--------------
  tipsOutput += "<a href=\"" + obj.link + "\"";

  //If external site or page, launch in new browser tab
  if (obj.external)
    tipsOutput += "target=\"_blank\"";

  tipsOutput += "><big>" + obj.title + "</big></a></td>";

  //Article contributor/source logo------
  tipsOutput += "<td><img src=\"";
  tipsOutput += obj.logo;
  tipsOutput += "\" alt=\"Contributor Logo\" class=\"center-block\" height=\"48\" width=\"48\"/></a>";
  //Hack inserts empty column w/ 2 spacers for spacing buffer between logo & name
  tipsOutput += "</td><td>&nbsp;&nbsp;</td><td>";

  //Article contributor/source----------
  tipsOutput += obj.contributor;
  tipsOutput += "</td><td>";

  //Article about section --------------
  tipsOutput += "<small><small>" + obj.about + "</small></small></td></tr>";
}


function buildData(obj) {
  if (alreadyRun)
    return;

    data += "<br />";
    data += "<h4>Personal Advice</h4>";
    data += "<div class=\"table-responsive\">";
    data += "<table class=\"table\">";
    data += "<tbody id=\"personalAdvice\">";
    data += personalOutput;
    data += "</tbody></table></div>";

    data += "<br />";
    data += "<h4>Professional Advice</h4>";
    data += "<div class=\"table-responsive\">";
    data += "<table class=\"table\">";
    data += "<tbody id=\"professionalAdvice\">";
    data += professionalOutput;
    data += "</tbody></table></div>";

    data += "<br />";
    data += "<h4>Professional Education</h4>";
    data += "<div class=\"table-responsive\">";
    data += "<table class=\"table\">";
    data += "<tbody id=\"professionalEducation\">";
    data += educationOutput;
    data += "</tbody></table></div>";

    data += "<br />";
    data += "<h4>Tips & Tricks</h4>";
    data += "<div class=\"table-responsive\">";
    data += "<table class=\"table\">";
    data += "<tbody id=\"tipsAndTricks\">";
    data += tipsOutput;
    data += "</tbody></table></div>";

    alreadyRun = true;
}
