function controlOnClickHtml(event){
    var texte = document.getElementById("nom1").value;
    var myReg = /\w+@[a-zA-Z]+\.[a-z]{2,3}/;
    if(texte.length < 2){
        alert("La chaîne doit comporter 2 caractères")
        return false
    }
    else if (!myReg.test(texte)){
        alert("Vous devez saisir une adresse mail de la forme ex3mpl@jeux.com");
        return false
    }
    else{
        alert("Vous avez saisi : " + texte);
        event.submit();
        return true;
        
         
    }
}
function controlOnClickJs(event){
    var texte = document.getElementById("nom2").value;
    var myReg = /\w+@[a-zA-Z]+\.[a-z]{2,3}/;
    if(texte.length < 2){
        alert("La chaîne doit comporter 2 caractères");
        return false;
        
    }
    else if (!myReg.test(texte)){
        alert("Vous devez saisir une adresse mail de la forme ex3mpl@jeux.com");
        return false;
    }
    else{
        alert("Vous avez saisi : " + texte);
        event.submit();
        
    }
}

var text = document.querySelector("#nom3");
text.addEventListener("keyup", function(e){controlChamp()});

var btn2 = document.getElementById("btn2");
btn2.onclick =  function(){return controlOnClickJs(this.form)};

var btn3 = document.getElementById("btn3");
btn3.addEventListener("click" , function(e){controlAdd(e,this.form)},false);



function controlAdd(event,f){
    var myReg = /\w(\w\.?)*\w@\w+\.[a-z]{2,3}/;
    if(f.text.value.length < 2){
        alert("La chaîne doit comporter 2 caractères");
        event.preventDefault();
       
    }
    else if (!myReg.test(f.text.value)){
        alert("Vous devez saisir une adresse mail de la forme ex3mpl@jeux.com");

        event.preventDefault();
        return false;
    }
    else{
        alert("Vous avez saisi : " + f.text.value);
        
        return true;
        
    }
    
}


function controlChamp(){
    var myReg = /^\w(\w\.?)*\w@\w+\.[a-z]{2,3}$/; 
    if (!myReg.test(text.value)){

        text.setAttribute("class", "invalid");   
    }
    else{
        text.setAttribute("class", "valid");
    }
    
}



