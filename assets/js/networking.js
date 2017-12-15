loadInterpersonal();

function loadInterpersonal() {
  var subPage = document.getElementById('content');
  var data = "";

  data += "<button type=\"button\" class=\"btn btn-success\" onclick=\"loadInterpersonal()\">In Person</button>&nbsp;";
  data += "<button type=\"button\" class=\"btn btn-primary\" onclick=\"loadOnline()\">Online</button>&nbsp;";

  data += document.getElementById('interpersonal').text;

  subPage.innerHTML = data;
}

function loadOnline() {
  var subPage = document.getElementById('content');
  var data = "";

  data += "<button type=\"button\" class=\"btn btn-primary\" onclick=\"loadInterpersonal()\">In Person</button>&nbsp;";
  data += "<button type=\"button\" class=\"btn btn-success\" onclick=\"loadOnline()\">Online</button>&nbsp;";

  data += document.getElementById('online').text;

  subPage.innerHTML = data;
}
