//Exercice 3

function test02_03(){
    var HT, nombre, TVA, TTC;
    var msg= "Exo 3:\n";

    HT = parseFloat(prompt("Quel est le prix hors taxe de l'article ? "));//alert(), config
    nombre = parseInt(prompt("Combien y a-t-il d'article ? "));
    TVA = parseFloat(prompt("Quel est le montent de la TVA ? "));
    TTC = HT * nombre * (1+TVA);

    msg+="Le Prix TTC est de " + TTC + " euros";
    console.log(msg);
}
