(function(){



// Initialisation
var startTime = new Date();
var duree = 0;
var decompte = -1;
var timeAct = {"hours":0, "minutes":0 , "seconds" : 0};

var btnSart = document.getElementById("btnstart");
btnSart.addEventListener("click", commandbtnStart);


var btnPause = document.getElementById("btnpause");
btnPause.addEventListener("click" , commandbtnPause);

var btnRestart = document.getElementById("btnrestart");
btnRestart.addEventListener("click" , commandRestart);

var btnStop = document.getElementById("btnstop");
btnStop.addEventListener("click" , commandStop);



var chronoP = document.getElementById("chrono");
// Fonctions

function show(element){
    element.setAttribute("class" ,"visible");
 
}
function hide(element){
    element.setAttribute("class" ,"invisible");

}

function ajouteUnZero(time){
    
    if(time<10) return "0"+time;
    else return time;
}

function timer(){
    console.log("timer")
}
// algo de calcul de nombre heures, minutes et secondes écoulées

function startChrono(){
    startTime = new Date();
    
    decompte = setInterval(function() {
    // 1-Convertir en secondes :
    duree = new Date -startTime;
    var seconds = Math.round((duree) / 1000);
    // 2-Extraire les heures:
    var hours = parseInt( seconds / 3600 );
    seconds = seconds % 3600; 
    // secondes restantes
    // 3-Extraire les minutes:
    var minutes = parseInt( seconds / 60 );
    seconds = seconds % 60;
    timeAct = {"hours": hours , "minutes":minutes ,"seconds":seconds}
    // 3-afficher dans le span
    chronoP.innerHTML = ajouteUnZero(hours)
        +":"+ajouteUnZero(minutes)
        +":"+ajouteUnZero(seconds);
        /*+":"+ajouteUnZero(centseconds);*/}, 
        1000);
       
}



function restartChrono(){
    startTime = new Date - duree
    decompte = setInterval(function() {
        // 1-Convertir en secondes :
        duree=new Date - startTime;
        var seconds = Math.round((duree) / 1000);
        // 2-Extraire les heures:
        var hours = parseInt( seconds / 3600 );
        seconds = seconds % 3600; 
        // secondes restantes
        // 3-Extraire les minutes:
        var minutes = parseInt( seconds / 60 );
        seconds = seconds % 60;
        // 3-afficher dans le span
        chronoP.innerHTML = ajouteUnZero(hours)
            +":"+ajouteUnZero(minutes)
            +":"+ajouteUnZero(seconds)
            /*+":"+ajouteUnZero(centseconds);*/}, 
            1000);
}

function commandbtnStart(){
    console.log("sart()");
    
    hide(btnstart);
    show(btnpause);
    show(btnstop);
    startChrono();
   
    

}

function commandbtnPause(){
    console.log("pause()");
    hide(btnpause);
    show(btnrestart);
    clearInterval(decompte);
    console.log(timeAct);
    
}
function commandRestart(){
    console.log("resart()");
    show(btnpause);
    hide(btnrestart);
    restartChrono();
    
}

function commandStop(){
    console.log("stop()");
    hide(btnpause);
    hide(btnrestart);
    hide(btnstop);
    show(btnstart)
    clearInterval(decompte);
    chronoP.innerHTML= "00" + ":" + "00" + ":" + "00" + ":" + "00";
}

}())
 














