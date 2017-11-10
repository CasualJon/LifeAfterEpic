//Interacts with consultancies.json to populate tables
//on lifeafterepic.com/resourcepgs/consulting.html

console.log("Testing JS triggering on page");

var xhttpConf = new XMLHttpRequest();
xhttpConf.onreadystatechange = function() {
  console.log("this.readyState: " + this.readyState + " && this.status: " + this.status);
    if (this.readyState == 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:
      //document.getElementById("confirmedFirms").innerHTML = xhttp.responseText;

      console.log("In if(this.readyState==4 && this.status==200)");
      var resonse = JSON.parse(xhttpConf.responseText);
    }
};
console.log("Out of .onsreadystatechange function");
xhttpConf.open("GET", "./consultancies.json", true);
xhttpConf.send();
