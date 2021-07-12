function test09_02(){
    // var chaine = ;
    // var n = chaine.length;
    var mot =""
    console.log( "Le mot "
    + (mot=prompt("Entrez un mot, s'il vous plait.", "Bonjour") )+
    " possède " + mot.length + " lettre(s)");
}

function test09_03(){
    //Initialisation
    var chaine = prompt("Entrez une phrase, s'il vous plait.", "Exemple").toLowerCase();
    var lChaine = chaine.split(" ");

    var compt = 0 ;
    // Traitement
    for (let i = 0; i < lChaine.length ; i++){
        if(lChaine[i]!=""){
            compt++
        }
    }
    //Affichage   
console.log(chaine + "\n" + "Dans cette phrase il y a " + compt + " mots.")
}

function test09_04(){
    //Initialisation
    var chaine = "bonjour j'habite à caen, et mon chat s'appelle miroux";
    const LVOYELLE = ["a","e","i","o","u","y"];
    var compt = 0;
 
        
    // Traitement
    for (let i = 0; i < chaine.length ; i++){
        for(let j = 0; j < LVOYELLE.length ; j++){
            if (chaine[i]==LVOYELLE[j]){
              
                compt ++ ;
            }
        }
    }
    //Affichage 
console.log("Dans la phrase : \n " + chaine + " \n Il y a " 
            + compt + " voyelle");
}

function test09_04b(){
    //Initialisation
    var chaine = "bonjour j'habite à caen, et mon chat s'appelle miroux";
    const VOYELLE = /[aeiouy]/;
    var compt = 0;
    // Traitement
   for (let i = 0; i < chaine.length ; i++){
       if(chaine[i].search(VOYELLE)!=-1){
        compt++;
       }
       
   }
    //Affichage 
    console.log("Nombre de voyelle : " + compt);

    


}
function test09_04c(){
    //Initialisation
    var chaine = "bonjour j'habite à caen, et mon chat s'appelle miroux";
    const VOYELLE = "aeiouyéèàê";
    var compt = 0;
    // Traitement
    for (let i = 0; i < phrase.length; i++) {
        var car = phrase.charAt(i).toLowerCase();
        if ("aeiouyéèêïû".includes(car)) compt++;
    }
       
   
    //Affichage 
    console.log("Nombre de voyelle : " + compt);
}
function test09_04d(){
    nbVoyelles = phrase.replace(RegExp(/[^aeiouyéèêïû]/gi), "").length;

    console.log("Votre phrase comporte " + nbVoyelles + " voyelle(s).");
}



function test09_05(){
    //Initialisation
    var phrase = prompt("Veuillez entrer une phrase" , "Bonjour je suis une phrase");
    var indice = parseInt(prompt("Quel lettre voulez-vous supprimer? \n"+
                " Indiquez le rang de la lettre à supprimer") );
    
    var n = phrase.length;

     // Traitement
    console.log("Votre phrase est : " + phrase + "\n");
    phrase = phrase.substring(0,indice)+phrase.substring(indice+1,n);

    //Affichage                   
console.log("Votre nouvelle phrase : " + phrase);          
}


function test09_06(){
    //Initialisation
    var phrase = prompt("Veuillez entrer une phrase" , "L'été à Caen").toLowerCase();
    var lPhrase = phrase.split("");
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var accentE = /[éèêë]/g;
    var accentA = /à/g;
    
    // Traitement
    console.log("Votre phrase est : " + phrase);
    phrase = phrase.replace(accentE , "e");
    phrase = phrase.replace(accentA, "a");
    for (let i = 0; i < phrase.length ; i++){

        
        for (let j = 0; j < alphabet.length ; j++){               
            if(phrase[i] == alphabet [j]){               
                lPhrase[i] = alphabet[(j+1)%26];
                break;
            }
        }           
        
    }
    //Affichage 
    console.log("Votre phrase codé : " + lPhrase.join(""));
}
function test09_07(){
     //Initialisation
    var phrase = prompt("Veuillez entrer une phrase" , "L'été à Caen").toLowerCase();
    var n = parseInt(prompt("De combien de lettre voulez-vous décaler ? "))
    var lPhrase = phrase.split("");
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var accentE = /[éèêë]/g;
    var accentA = /à/g;
    
    // Traitement 
    console.log("Votre phrase est : " + phrase);
    phrase = phrase.replace(accentE , "e");
    phrase = phrase.replace(accentA, "a");
    for (let i = 0; i < phrase.length ; i++){
         
        for (let j = 0; j < alphabet.length ; j++){               
            if(phrase[i] == alphabet [j]){               
                lPhrase[i] = alphabet[(j+n)%26];
                break;
            }       
                     
           
        }
    }
    // Affichage 
    console.log("Votre phrase codé : " + lPhrase.join(""));
}

function test09_08(){
    // Initialisation
    var phrase = prompt("Veuillez entrer une phrase" , "L'été à Caen").toLowerCase();
    
    var lPhrase = phrase.split("");
    const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

    var accentE = /[éèêë]/g;
    var accentA = /à/g;

    var chaine = ALPHABET;
    var newChaine = [];
    var n = chaine.length;
    var indice = 0;
    
    while(n>0){
        indice=Math.floor(Math.random()*n);
        newChaine.push(chaine[indice]);
        chaine = chaine.substring(0,indice)+chaine.substring(indice+1,n);
        n = chaine.length;
    }
    console.log("le nouvel Aplphabet : " + newChaine.join(""));

   
     
    // Traitement 
    // Mélange de l'Alphabet

    console.log("Votre phrase est : " + phrase);
    phrase = phrase.replace(accentE , "e");
    phrase = phrase.replace(accentA , "a");

    // Affichage

}





function test_melange(){
    var chaine = "azerty";
    
    var newChaine = [];
    var n = chaine.length;
    var indice = 0;
    while(n>0){
        indice=Math.floor(Math.random()*n);
        newChaine.push(chaine[indice]);
        chaine = chaine.substring(0,indice)+chaine.substring(indice+1,n);
        n = chaine.length;
    }
    console.log(newChaine.join(""));
}


