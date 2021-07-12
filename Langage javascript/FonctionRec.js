function recPhrase(string){
    do{
        var msg= prompt("Ecrivez un mot.\n" + string);
    }while(msg.includes(" "));
    if(msg != ".") recPhrase(string + " " +msg);
    else alert(string + " " + msg);
     
}
   




function recPhraseBis() {
    
    do{
        var msg= prompt("Ecrivez un mot.\n");
    }while(msg.includes(" "));
    if (msg != ".") msg+=" " + recPhraseBis();
    return msg;
    
}
// document.write("<p>"+ recPhraseBis() + "</p>");