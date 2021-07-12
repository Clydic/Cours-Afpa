// Affiche l'élément passé en paramètre.
/**
 * 
 * @param {Object of Document} element 
 */
function show(element){
    
    element.style.visibility = "visible";
}

// Cache l'élément passer en paramètre
/**
 * 
 * @param {Object of Document} element 
 */
function hide(element){
    
    element.style.visibility = "hidden";
}

// Ecrit un message dans une zone
/**
 * 
 * @param {String} msg 
 * @param {Object} zone 
 */ 
function writeInPostIt(msg , zone){
    zone.innerHTML= msg ;
}

// Command of the button which show Postit
 function commandBtnShow(){
    show(document.getElementById("Postit"));
    writeInPostIt("Merci d'afficher le Post It." , document.getElementById("Postit"));;
 }

//  Command of the button wich hide the Postit element 
 function commandBtnHide(){
     hide(document.getElementById("Postit"));
 }
/* Command who show the element Postit when the user mouseover on a the text identify by the id textOn*/ 
 function commandSurvol(){
    show(document.getElementById("Postit"));
    writeInPostIt("Merci de survoler pour afficher." , document.getElementById("Postit"));
 }

 // Button who show the Postit
var btnShow = document.getElementById("btnAffiche");
btnShow.addEventListener("click" , commandBtnShow);

 // Button who hide the Postit
var btnHide = document.getElementById("btnCache");
btnHide.addEventListener("click" , commandBtnHide);

// Text who show and hide the postit
var textSurvol = document.getElementById("textOn");
textSurvol.addEventListener("mouseover" , commandSurvol);
textSurvol.addEventListener("mouseout" , commandBtnHide);


