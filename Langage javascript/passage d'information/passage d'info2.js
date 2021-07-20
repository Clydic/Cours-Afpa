var url = new URLSearchParams(window.location.search);
var infoNb = url.get("idnumber");
var infoName = url.get("name");

var info = document.getElementById("info");
info.innerText = "Info reçues : \n" + "nom : " + infoName +"\n" 
+ " Nombre : " + infoNb + "\n";

