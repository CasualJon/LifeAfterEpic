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
  }
];

var confOutput = "";
for (var i = 0; i < firms.length; i++) {
  confOutput += "<tr><td scope=\"row\">";
  confOutput += "<img scr=\"" + firms[i].logo +"\" alt=\"" + firms[i].name +"\" class=\"img-responsive\"/>";
  confOutput += "</td><td>";
  confOutput += firms[i].name;
  confOutput += "</td><td>";

  if (firms[i].website != null) {
    confOutput += "<a href="+ firms[i].website +" target=\"_blank\"><i class=\"fa fa-laptop\"></i></a>";
  }
  else {
    confOutput += " ";
  }
  confOutput += "</td><td>";

  if (firms[i].linkedin != null) {
    confOutput += "<a href="+ firms[i].linkedin +" target=\"_blank\"><i class=\"fa fa-linkedin\"></i></a>";
  }
  else {
    confOutput += " ";
  }
  confOutput += "</td><td>";

  if (firms[i].twitter != null) {
    confOutput += "<a href="+ firms[i].twitter +" target=\"_blank\"><i class=\"fa fa-twitter\"></i></a>";
  }
  else {
    confOutput += " ";
  }
  confOutput += "</td></tr>";
}
document.getElementById('confirmedFirms').innerHTML = confOutput;
console.log(confOutput);
