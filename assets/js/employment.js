jobSearch();

function jobSearch() {
  var subPage = document.getElementById('content');
  var data = "";

  data += "<button type=\"button\" class=\"btn btn-success\" onclick=\"jobSearch()\">Job Searching</button>&nbsp;";
  data += "<button type=\"button\" class=\"btn btn-primary\" onclick=\"interviewing()\">Interviewing</button>&nbsp;";
  data += "<button type=\"button\" class=\"btn btn-primary\" onclick=\"bodyLanguage()\">Body Language</button><br /><br />";

  data += document.getElementById('jobsearch').text;

  subPage.innerHTML = data;
}

function interviewing() {
  var subPage = document.getElementById('content');
  var data = "";

  data += "<button type=\"button\" class=\"btn btn-primary\" onclick=\"jobSearch()\">Job Searching</button>&nbsp;";
  data += "<button type=\"button\" class=\"btn btn-success\" onclick=\"interviewing()\">Interviewing</button>&nbsp;";
  data += "<button type=\"button\" class=\"btn btn-primary\" onclick=\"bodyLanguage()\">Body Language</button><br /><br />";

  data += document.getElementById('interview').text;

  subPage.innerHTML = data;
}

function bodyLanguage() {
  var subPage = document.getElementById('content');
  var data = "";

  data += "<button type=\"button\" class=\"btn btn-primary\" onclick=\"jobSearch()\">Job Searching</button>&nbsp;";
  data += "<button type=\"button\" class=\"btn btn-primary\" onclick=\"interviewing()\">Interviewing</button>&nbsp;";
  data += "<button type=\"button\" class=\"btn btn-success\" onclick=\"bodyLanguage()\">Body Language</button><br /><br />";

  data += document.getElementById('bodylang').text;

  subPage.innerHTML = data;
}
