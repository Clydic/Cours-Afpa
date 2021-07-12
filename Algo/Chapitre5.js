function test05_01() {
    var msg = "Exo1 \n";
    // Initialisation
    var chiffre = parseInt(prompt("Veuillez entrer un nombre 1 et 3"));

    while (chiffre < 1 || chiffre > 3){
    var chiffre = parseInt(prompt("ERREUR votre chiffre doit être compris entre 1 et 3" ));

    }
    // Affichage
    console.log("msg" + "vous avez saisi : " + chiffre);
}

// Exercice 2

function test05_02() {
    // Initialisation
    var chiffre = parseInt(prompt("Veuillez entrer un nombre entre 10 et 20"));
   // Traitement
    while (chiffre <10 || chiffre > 20) {
        if (chiffre > 20){
            chiffre = parseInt(prompt("Plus petit!"));
        } 
        if(chiffre < 10){
            chiffre = parseInt(prompt("Plus grand!"));
        }
    }
    //Affichage
    console.log("Le chiffre choisi est : " + chiffre);
}

//Exercice 3
function test05_03() {
    // Initialisation
    var chiffre = parseInt(prompt("Veuillez entrer un nombre entier"));
    var inter = 0 ;
    //Traitement
    for(index=1; index <=  10; index ++){
        inter = chiffre + index;
        console.log(inter);
    }
    
}

// Exercice 4

function test05_04() {
    // Initialisation
    var nombre = parseInt(prompt("Veuillez entrer un nombre, \n on affichera la table de multiplication de ce dernier "))
    var msg1 = nombre + " x "  ;//permière partie du message
    var msg = "";
    var titre = "Table de " + nombre + " est : \n";

    //Traitement
    for(index = 1; index <= 10; index ++){

        msg += msg1 + index + " = " + nombre*index + "\n";
    }
    //Affichage
    alert(titre + msg);
}

//Exercice 5
function test05_05() {
    var nombre = parseInt(prompt("Veuillez entrer un nombre, \n on va calculer la somme jusqu'à ce nombre. "))
    var somme = 0 ; 
    var titre = "La somme des entiers jusqu' à " + nombre +": \n";
    var msg="";
    for(var index = 1; index <= nombre; index ++){
        somme += index;
        if (index == nombre){
            msg += index ;
        }
        else{
            msg += index + "+";

        }
    

    }
    alert(titre + msg + " = " + somme);
}
//Exercice 6
function test05_06() {
    var nombre = parseInt(prompt("Veuillez entrer un nombre, \n on va calculer son factoriel. "))
    var fact = 1 ; 
    var titre = "La facttorielle de  " + nombre +" est : \n";
    var msg="";
    for(index = 1; index <= nombre; index ++){
        fact *= index;
        if (index == nombre){
            msg += index ;
        }
        else{
            msg += index + "x";

        }
    

    }
    alert(titre + msg + " = " + fact);
}
// Exercice 7
function test05_07() {
    //Initialisation
    var msg = "Entrer le nombre numéro " ;
    // var numero = 1
    var nombre = parseFloat(prompt(msg + 1 /*numero*/ + ":"));
    var max = nombre;
    

    // Traitement
    for(var index=2; index<=5; index ++){
        nombre = parseFloat(prompt(msg + index + ":"))
        if (nombre > max ){
            max = nombre;
           // numero = index
        }
    }

    //Affichage
    alert("Le nombre le plus grands de ces nombres est : " + max);
}
// Exercice 7 alternatif
function test05_07bis() {
    //Initialisation
    var msg = "Entrer le nombre numéro " ;
    var numero = 1;
    var nombre = parseFloat(prompt(msg + numero + ":"));
    var max = nombre;
    

    // Traitement
    for(var index=2; index<=3; index ++){
        nombre = parseFloat(prompt(msg + index + ":"));
        if (nombre > max ){
            max = nombre;
            numero = index;
        }
    }

    //Affichage
    alert("Le plus grand nombres tapé est : " + max + "\n c-était le nombre numéro : " + numero );
}

// //Exercice 8
// function test05_08(){
//     var msg = "Entrer le nombre numéro " ;
//     var numero = 1;
//     var nombre = parseFloat(prompt(msg + numero + ":"));
//     var max = nombre;
//     var nummax = numero
//     while(nombre != 0 ){
//         nombre = parseFloat(prompt(msg + index + ":"));
//         numero ++
//         if (nombre > max ){
//             max = nombre;
//             nummax = numero;
//         }
//     }
//     alert("Le plus grand nombres tapé est : " + max + "\n c'était le nombre numéro : " + numero );
// }
