function testRadio(event){
    var elemRadioButton = document.getElementsByName("week");
    var texte = document.getElementById("affiche") 
    var value = ""
    for ( let index in elemRadioButton){
        if (elemRadioButton[index].checked)texte.value = elemRadioButton[index].value;
         
    }
    
}
function test(){
    console.log("test");
}

var btn1 = document.getElementById("btn1");
btn1.onclick = testRadio;
btn1.onclick = test ;
var btn2 = document.getElementById("btn2");
btn2.addEventListener("click" , testRadio);
btn2.addEventListener("click", test);

