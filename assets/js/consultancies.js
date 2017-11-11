//Seems like I might not be able to query against a JSON file from gh-pages
//For now, storing the data needed to build table within this js file
//... yay workarounds.

var firms = [
  { name: "BlueTree Network",
    website: "https://www.bluetreenetwork.com/",
    logo: "../assets/img/consulting/bluetreenetwork.jpg",
    twitter: "https://twitter.com/BluetreeNetwork",
    linkedin: "https://www.linkedin.com/company/2663341/",
    confirmed: true
  },

  { name: "Nordic Consulting Partners",
    website: "https://www.nordicwi.com/",
    logo: "../assets/img/consulting/nordic.jpg",
    twitter: "https://twitter.com/nordicwi",
    linkedin: "https://www.linkedin.com/company/819886/",
    confirmed: true
  },

  { name: "The HCI Group",
    website: "https://www.thehcigroup.com/",
    logo: "../assets/img/consulting/hcigroup.jpg",
    twitter: "https://twitter.com/TheHCIGroup",
    linkedin: "https://www.linkedin.com/company/954937/",
    confirmed: true
  },

  { name: "Huron Consulting Group",
    website: "https://www.huronconsultinggroup.com/",
    logo: "../assets/img/consulting/huron.jpg",
    twitter: null,
    linkedin: "https://www.linkedin.com/company/5751/",
    confirmed: true
  },

  { name: "Santa Rosa Consulting",
    website: "https://www.santarosaconsulting.com/",
    logo: null,
    twitter: "https://twitter.com/SantaRosaC",
    linkedin: "https://www.linkedin.com/company/390402/",
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
    confOutput += "<img scr=\"" + randFirms[i].logo +"\" alt=\"" + randFirms[i].name +"\" class=\"img-responsive\"/>";
    confOutput += "</td><td>";
    confOutput += randFirms[i].name;
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
  unconfOutput += "<img scr=\"" + obj.logo +"\" alt=\"" + obj.name +"\" class=\"img-responsive\"/>";
  unconfOutput += "</td><td>";
  unconfOutput += obj.name;
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
