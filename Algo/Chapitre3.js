//Exercice 2
function test03_02(){
    var msg= "Exo2: \n";
    var nb1 = parseInt(prompt("Entrez un premier nombre: "));
    var nb2 = parseInt(prompt("Entrez un deuxième nombre: "));

    msg+= "Le produit de " + nb1 + " et " + nb2 +" est ";
    if (Math.sign(nb1) == Math.sign(nb2)){
        msg+= "positif.";

    }
    else{
        msg+= "négatif. ";
    }
    console.log(msg)
}
//Exercice 3
function test03_03(){
    var nom1 = prompt("Donnez un premier Prénom.");
    var nom2 = prompt("Donnez un deuxième Prénom.");
    var nom3 = prompt("Donnez un troisième Prénom.");

    if(nom1<nom2  && nom2<nom3){
       console.log("Les Prénoms sont rangés dans l'ordre");
        
    }
    else{
        console.log("Les prénoms ne sont pas rangés dans l'ordre");
    }
}
//Exercice 6
function test03_06(){
var age = prompt("Mon enfant quel âge as-tu?");
var msg = "Exercie 6: \n Tu es ";
var categorie ;

if (age < 6){
    categorie="dans aucune catégorie.";

    
}
else if (age <=7 ){
    categorie="un Poussin.";

    
}
else if( age <= 9){
    
    categorie="un Pupille.";
}
else if(age<=11){
    
    categorie="un Minime.";
}
else{
    categorie = "un Cadet.";
}
msg+= categorie;
console.log(msg);
}