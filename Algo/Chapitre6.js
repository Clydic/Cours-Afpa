function test06_01() {
    // var tZeros = new Array();

    // for (let i = 0; i < 7; i++) {
    //     tZeros[i] = 0;
        
    // }

    // var msg = "";
    // for(var i = 0; i<7 ; i++){
    //     msg += tZeros[i] + " ";
    // }
    var tZeros2 = [0 , 0 , 0 , 0 , 0 , 0 , 0];
    console.log(tzeros2.join( " "));
}
function test06_02(){
//Initialisation
var voy = "aeiou";
//Traitement
tabvoy= voy.split("")
//Affichage
console.log(tabvoy)
}
function test06_10(){
    //Initialisation
    var tableau1 = [4, 8, 7, 9, 1, 5, 4, 6];
    var tableau2 = [7, 6, 5, 2, 1, 3, 7, 4];
    var tableau =  new Array();
    //Traitement
    for(var index=0; index < tableau1.length; index++){
        tableau[index]=tableau1[index]+tableau2[index];
    }
    //Affichage
    alert("Le nouveau tableau est: \n " + tableau.join("  "));
}
function test06_11(){
    //Initialisation
    var tableau1 = [4,8,7,12];
    var tableau2 = [3,6];
    var shtroumpf = 0;
    var msg = ""

     //Traitement
    for(var i = 0; i < tableau2.length; i++){
        for(var j = 0; j < tableau1.length; j++){
            
            shtroumpf += tableau1[j] * tableau2[i]; 
            
        }
    }
     //Affichage
    console.log("Le shtroumpf est égale à " + shtroumpf );
}
function test06_11alter(){
    //Initialisation
    var tableau1 = [4,8,7,12];
    var tableau2 = [3,6];
    var somme1 = 0;
    var somme2 = 0;
    var shtroumpf = 0
   
    var msg = "";

     //Traitement
    for(var i = 0; i < tableau2.length; i++){
        
        somme2 += tableau2[i];
    }

    for(var j = 0; j < tableau1.length; j++){
        somme1 += tableau1[j];
           
    }
    shtroumpf = somme1 * somme2;
     //Affichage
 
    console.log("Le shtroumpf est égale à " + shtroumpf );
}

function test06_12() {
    //Initialisation
    var N = parseInt(prompt("Combien de nombre voulez saisir?"));
    var pos = 0;
    var neg = 0;
    var liste = [];
    var newliste= [];
    //Traitement
    for(var i = 0; i < N; i++){
        liste[i] = parseInt(prompt("Veuillez saisir un nombre. "));
        newliste[i] = liste[i] + 1;

    }

    //Affichage
    alert("L'ancien tableau est : " + liste.join(" ") + "\n" + "Le nouveau tableau est : " + newliste.join());
}
function test06_13(){
    var N = 5;
    var tableau = [parseInt(prompt("Veuillez saisir un nombre, il y en aura 5 à saisir"))];
    var max = tableau[0] ;
    var rang = 1
    for(var i = 1; i < 5; i++){
        tableau[i]= parseInt(prompt("Veuillez entrer un nombre."));

    }
    for(var i = 0; i < 5; i++){
        if (tableau[i] > max){
            max = tableau[i]
            rang = i+1;
        }
    }
    alert("Le plus grands nombre de : " + tableau.join(", ") + " est " + max + " il est à la place " + rang);
}
function test06_14(){
    var N = parseInt(prompt("Veuillez saisir le nombre de notes"));
    var tableau = [];
    var supmoy = 0;

    var moyenne = 0;
    var somme = 0;
    

    for(var i = 0; i < N; i++){
        tableau[i]= parseInt(prompt("Veuillez entrer une note."));
        somme += tableau[i];
    }

    moyenne = somme/tableau.length;

    for(var i = 0; i < 5; i++){
        if(tableau[i] > moyenne){
            supmoy += 1;
        }
    }
console.log("La liste des notes :\n " + tableau )
console.log("La moyenne est de : " + moyenne + "\n") ;
console.log("Il y a " + supmoy +  " notes au dessus de " + moyenne)
}
