
    var button = document.getElementById("btn")
    button.addEventListener("click",function(e){sendText(e,this.form),false});
    var fieldNb = document.getElementById("idnumber");
    var fieldName = document.getElementById("string");
    
    function sendText(event,f){
        
        if (!fieldNbControl(fieldNb) || !fieldNameControl(fieldName)){
            event.preventDefault();
        }
        console.log("On contrôle ce qui est envoyé :" + f.string.value);
        console.log("On contrôle ce qui est envoyé :" + f.idnumber.value);
        // event.preventDefault();
          
    
        
    }
    function fieldNbControl(fieldnb){
        
        var myReg = /\d/;
        if (!myReg.test(fieldnb.value)) {
            
            return false;
        };
        return true;
    
    }
    function fieldNameControl(fieldname){
        
        var myReg = /\w/;
        if (!myReg.test(fieldname.value)) {
            
            return false;
        };
        return true;
    }





