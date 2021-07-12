function calculatrice() {
    //Initialisation
    var number = 0;
    
    var totOp = 0;
    var op = "";
    var msg=""
    //Traitement
    //Stage 1
   
    while(op!="="){
        number = saisiNombre()
        msg += number;
        op = saisiOp();
        if (op == "=")  totOp= eval(msg);
        else {
            msg+= op
        }
    }
    // Stage 2
    

    //Satge 3
    
    
    
    
    // Affichage
    alert(totOp)
    
}
/**
 * On demande à l'utilisateur un nombre et on le retourne
 * @returns FLOAT
 */
function saisiNombre(){
    do{
        var number = prompt("Veuillez entrer un nombre.");
    }while(isNaN(number));
    
    return parseFloat(number);
}

/**
 * On demande à l'utilisateur un opérateur et on le retourne
 * IN : VOID
 * OUT : STRING
 */
function saisiOp() {
    
    do{
        var op = prompt("Veuillez entrer un opérateur");
    }while(!("/*-+=".includes(op)));
    
    return op;
}
// let number = saisiNombre();
// alert(number);
// alert(saisiOp());