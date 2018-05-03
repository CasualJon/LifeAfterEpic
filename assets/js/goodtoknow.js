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
    contributor: "develoPMent memo",
    logo: "../assets/img/contributors/develoPMentmemo.png",
    website: "http://developmentmemo.com/",
    category: articleType.EDUCATION,
    about: "Project management thoughts and lessons learned.",
  },
  { title: "How To Make A Change When You Don't Know What You Want",
    link: "../gtk_articles/making_a_change.html",
    external: false,
    contributor: "Jon Cyrus",
    logo: "../assets/img/fav/twitter-card-144x144.png",
    website: "http://lifeafterepic.com/",
    category: articleType.PERSONAL,
    about: "When all you know is that you want a change, but don't know what you want, where to look, or how to start.",
  },
  { title: "Epic to MBA",
    link: "../gtk_articles/epic_to_mba.html",
    external: false,
    contributor: "Reddit u/caveman714",
    logo: "../assets/img/contributors/orgs/reddit.png",
    website: "https://www.reddit.com/r/epicsystems/",
    category: articleType.PROFESSIONAL,
    about: "If you're interested in chasing your MBA and want to know more, this is for you.",
  },
  { title: "Speaking of Epic",
    link: "../gtk_articles/speaking_of_epic.html",
    external: false,
    contributor: "Briana Wagner",
    logo: "../assets/img/fav/twitter-card-144x144.png",
    website: "http://lifeafterepic.com/",
    category: articleType.TIPS,
    about: "How to talk about Epic with those unfamiliar.",
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
  //TODO - add headers (but use td tags) once content available
  personalOutput += "<tr><td style=\"width:35%\">Title</td><td style=\"width:35%\">About</td><td style=\"width:18%\">Contributor</td><td style=\"width:12%\">Logo</td></tr>";
  personalOutput += "<tr><td>";

  //Article/content title--------------
  personalOutput += "<a href=\"" + obj.link + "\"";

  //If external site or page, launch in new browser tab
  if (obj.external)
    personalOutput += "target=\"_blank\"";

  personalOutput += "><big>" + obj.title + "</big></a></td>";

  //Article about section --------------
  personalOutput += "<td><small><small>" + obj.about + "</small></small></td>";

  //Article contributor/source----------
  personalOutput += "<td>" + obj.contributor;
  personalOutput += "</td>";

  //Article contributor/source logo------
  personalOutput += "<td><a href=\"" + obj.website + "\" target=\"_blank\"><img src=\"";
  personalOutput += obj.logo;
  personalOutput += "\" alt=\"Contributor Logo\" class=\"center-block\" height=\"48\" width=\"48\"/></a>";
  personalOutput += "</td></tr>";
}


function buildProfessional(obj) {
  //TODO - add headers (but use td tags) once content available
  professionalOutput += "<tr><td style=\"width:35%\">Title</td><td style=\"width:35%\">About</td><td style=\"width:18%\">Contributor</td><td style=\"width:12%\">Logo</td></tr>";
  professionalOutput += "<tr><td>";

  //Article/content title--------------
  professionalOutput += "<a href=\"" + obj.link + "\"";

  //If external site or page, launch in new browser tab
  if (obj.external)
    professionalOutput += "target=\"_blank\"";

  professionalOutput += "><big>" + obj.title + "</big></a></td>";

  //Article about section --------------
  professionalOutput += "<td><small><small>" + obj.about + "</small></small></td>";

  //Article contributor/source----------
  professionalOutput += "<td>" + obj.contributor;
  professionalOutput += "</td>";

  //Article contributor/source logo------
  professionalOutput += "<td><a href=\"" + obj.website + "\" target=\"_blank\"><img src=\"";
  professionalOutput += obj.logo;
  professionalOutput += "\" alt=\"Contributor Logo\" class=\"center-block\" height=\"48\" width=\"48\"/></a>";
  professionalOutput += "</td></tr>";
}


function buildEducation(obj) {
  educationOutput += "<tr><td style=\"width:35%\">Title</td><td style=\"width:35%\">About</td><td style=\"width:18%\">Contributor</td><td style=\"width:12%\">Logo</td></tr>";
  educationOutput += "<tr><td>";

  //Article/content title--------------
  educationOutput += "<a href=\"" + obj.link + "\"";

  //If external site or page, launch in new browser tab
  if (obj.external)
    educationOutput += "target=\"_blank\"";

  educationOutput += "><big>" + obj.title + "</big></a></td>";

  //Article about section --------------
  educationOutput += "<td><small><small>" + obj.about + "</small></small></td>";

  //Article contributor/source----------
  educationOutput += "<td>" + obj.contributor;
  educationOutput += "</td>";

  //Article contributor/source logo------
  educationOutput += "<td><a href=\"" + obj.website + "\" target=\"_blank\"><img src=\"";
  educationOutput += obj.logo;
  educationOutput += "\" alt=\"Contributor Logo\" class=\"center-block\" height=\"48\" width=\"48\"/></a>";
  educationOutput += "</td></tr>";

}


function buildTips(obj) {
  //TODO - add headers (but use td tags) once content available
  tipsOutput += "<tr><td style=\"width:35%\">Title</td><td style=\"width:35%\">About</td><td style=\"width:18%\">Contributor</td><td style=\"width:12%\">Logo</td></tr>";
  tipsOutput += "<tr><td>";

  //Article/content title--------------
  tipsOutput += "<a href=\"" + obj.link + "\"";

  //If external site or page, launch in new browser tab
  if (obj.external)
    tipsOutput += "target=\"_blank\"";

  tipsOutput += "><big>" + obj.title + "</big></a></td>";

  //Article about section --------------
  tipsOutput += "<td><small><small>" + obj.about + "</small></small></td>";

  //Article contributor/source----------
  tipsOutput += "<td>" + obj.contributor;
  tipsOutput += "</td>";

  //Article contributor/source logo------
  tipsOutput += "<td><a href=\"" + obj.website + "\" target=\"_blank\"><img src=\"";
  tipsOutput += obj.logo;
  tipsOutput += "\" alt=\"Contributor Logo\" class=\"center-block\" height=\"48\" width=\"48\"/></a>";
  tipsOutput += "</td></tr>";
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
