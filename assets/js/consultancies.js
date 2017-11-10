//Interacts with consultancies.json to populate tables
//on lifeafterepic.com/resourcepgs/consulting.html

console.log("Testing JS triggering on page");

var xhttpConf = new XMLHttpRequest();
xhttpConf.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       //document.getElementById("confirmedFirms").innerHTML = xhttp.responseText;

       console.log(xhttpConf.responseText);
    }
};
xhttpConf.open("GET", "../consultancies.json", true);
xhttpConf.send();
