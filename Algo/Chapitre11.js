//Exercice 1
function test11_01(){
    
    console.log("La somme de 1, 2, 3, 4, 5 est : " 
                + sum5(1 , 2 , 3 , 4, 5) + "\n");
    console.log("La somme des éléments du tableau [2,4,6,8,10,12] est " 
    + sum_tab([2,4,6,8,10,12]) + "\n");

    console.log(sum_arg([2,4,6,8,10,12]));
    console.log(sum_arg(1 , 2 , 3 , 4, 5 , 6));

    console.log(test_exemple_cours("Avez-vous des enfants?"))

    
}
// Exercice Test
function test_exemple_cours(){
    var question = ["Avez-vous des enfants", "Etes-vous marié?", 
    "Avez vous le permis?"];
    
    for (let i = 0 ; i < question.length ; i++ ){
        var rep =""
        rep = repOuiNon(question[i]);
        console.log(rep);
    }

}
// On calcule  la somme de 5 réelles et renvoie un réelle. 
function sum5(n1 , n2 , n3 , n4 , n5){
    
    return n1 + n2 + n3 + n4 + n5;
}

/* On calcule la somme des éléments réelles d'un tableau 
et renvoie un réelle.*/

function sum_tab(tableau){
    // Initialisation.
    var res = 0;

    //Calcul de la somme des éléments réelles du tableau.
    for(let i = 0; i < tableau.length ; i++){
        res += tableau[i];
    } 

    // On renvoie la somme qui est un réelle.
    return res ;
}

function sum_arg(){
    var res = 0
    for(let i = 0; i < arguments.length ; i++){
        if (typeof(arguments[i]) == "number"){
            res += arguments[i];
        }
        else{
           var tab = arguments[i];
           res+= eval(tab.join("+"));

        }
    }
     // On renvoie la somme qui est un réelle.
     return res ;
}
/*Affiche la question reçu en paramètre, et renvoie la réponse
IN : String
OUT : String */

function repOuiNon(msg){
    do{
        var rep = prompt(msg + "\n" 
                    + "Taper Oui ou Non").toLowerCase();
    }while ( rep != "oui" && rep != "non") ;
    
    return rep;

}


//Exercice 4
/*Récupère une phrase et une lettre et affiche la phrase modifié */
function test11_03(){
    var phrase = prompt("Veuillez écrire une phrase. \n" , "Au soleil");
    var lettre = prompt("Quelle lettre voulez vous supprimer", "l");
    console.log("Votre nouvelle phrase : " + purge(phrase,lettre));
}


/* Une fonction qui prend en entrée une chaine de caractère et une lettre
 et renvois une chaine
 IN : String , String
 Out : String*/
function purge(chaine , lettre){
   // Initialisation
    var n = chaine.length;
    var minLettre = lettre.toLowerCase();
     // Traitement
    /*On parcours la liste et l'on compare chaques caractères avec
    la lettre entrée en paramètre */
    for(let i = 0; i < n ; i++){
        if(chaine[i] == minLettre ){
            chaine = chaine.substring(0,i)+chaine.substring(i+1,n);
        }
        
    }
    //on renvoie la phrase modifié                  
return chaine;
}

//Exercice 4

function test11_04(){
    console.log(purgeUpgrade("fruit banane chocolat" , "o", "n", "k", "w", "f"));
}

function purgeUpgrade( chaine , lettres){
    for(i = 1 ; i < arguments.length ; i ++ ){
        for(j = 0 ; j < chaine.length ; j ++ ){
            if (arguments[i] == chaine[j]){
                chaine = chaine.substring(0,j)
                +chaine.substring(j+1,chaine.length);
            }
        }
    }
    return chaine
}

function test11_04b(){
    console.log(purgeUpgrade2("au revoir ami du soir" , "oir"));

}

function purgeUpgrade2( chaine , delChaine){
    var temp = "";
    var l = delChaine.length;
    for(let i = 0 ; i < chaine.length - delChaine.length+1 ; i ++ ){
        temp = chaine.substr(i,l);
        if(temp == delChaine){
            chaine = chaine.substring(i-l,i)
                +chaine.substring(i+l,chaine.length-delChaine.length);
        }    
            
    }
    
    return chaine;
}
function jeuDeDameSimplifie() {
    console.log("Jeu de dames simplifié avec Fonctions");

    // 1- Initialiser les variables
    const TAILLE = 8;
    const CASE_VIDE = 0;
    var tDamier = [];
    var tPion = [-1,-1];
    var mouv = -1;
    var bDeplacement = true;
    var newCoord = [];

    // 2- Remplir le damier
    tDamier = remplirDamier(TAILLE, CASE_VIDE);

    // 3- Position du pion + contrôle de saisie
    tPion = positionPion(TAILLE);

    // 4- Ajouter le pion dans le damier
    tDamier = addPion(tPion, tDamier);

    //addPion(tPion, tDamier);
    while(bDeplacement){
    // 5- Afficher le damier
        afficheDamier(tDamier);

    // 6- Demander un déplacement + contrôle (1,3,5,7,9)
        mouv = askMouv();
    // 6-1 On met en mémoire les nouvelle coordonnée
        newCoord = modifCoord(tPion , mouv);
    // 7- On Teste si les nouvelles coordonnées sont valide 
    //    Déplacement valide = TRUE
    //    Déplacement invalide ou sortie = FALSE
        bDeplacement = testDeplacement(mouv, TAILLE, newCoord);
        // 8- Déplacer le pion si le mouvement est bon en mettant à jour ses coordonnées.
        if(bDeplacement){
            
            tDamier = mouvPion(tPion, mouv, tDamier , newCoord);
        }
    
        
    
    // 5- Afficher le damier
    // afficheDamier(tDamier);
    }
    console.log("La partie est finie")
}
// Etape 2
// Créer et Remplir le damier
// IN : taille, symbole à mettre dans chaque case
// OUT : Retourne le damier créé
function remplirDamier(dim, symbole) {
    var tDamier=[];

    for(let i = 0; i < dim ; i++){
        tDamier[i] = [];
    
        for (let j = 0 ; j < dim; j++) {
                 tDamier[i][j] = symbole;

        }
    }
    return tDamier;
}


/* Fonction qui affiche un damier avec des dimension 
et un symbole préremplis*/
function testDamier(){

    var tDamier =remplirDamier(8, "$");
    console.table(tDamier);
}


// Etape 3
/* Fonction qui demande la position du pion avec la taille du Damier en
en argument
 IN : Entier
 Out : Tableau*/
function positionPion(n){ 
    //Initialisation
    var alerte = "la valeur indiqué doit être comprise entre 1 et " + n
    //Traitement
    do{
    var ligne = parseInt(prompt("Veuillez indiquer à"+
       " quelle ligne se situe votre pion "+ alerte));

    var colonne =  parseInt(prompt("Veuillez indiquer à quelle colonne "+
    "se situe votre pion " + alerte));
    var symbole = prompt("De quelle sera la forme de votre pion?");

    }while(ligne < 1 || ligne > n || colonne < 1 || colonne > n) ;
    // Retourne un tableau
    return [ligne -1 , colonne -1, symbole];
}


/* Fonction qui prend en entrée la taille du damier
et demande la position du pion puis renvoie un tableau contenant
les coordonnée du pion*/
function testPositionPion(){
    var pion = positionPion(8);
    console.log("La position du pion : " + pion);
}


//Etape4

/*Fonction qui prend en entrée le tableau de position du pion et 
le damier. Place le symbole représentant le pion sur le damier 
et renvoie le  damier
IN : Tableau , Tableau
OUT : Tableau */
function addPion(tPion, tDamier){
    // Initialisation
    var x = tPion[0];
    var y = tPion[1];
    var symbole = tPion[2];
    // Traitement
    tDamier[x][y] = symbole;
    // Renvoie du damier
    console.log("Votre pion est de la forme :" + symbole);
    return tDamier;
}


/* Fonction de test de les fonctions addPion et afficheDamier */
function testAddPion(){
    var tDamier =remplirDamier(8, "P");
    var tPion = positionPion(8);
    tDamier = addPion(tPion, tDamier);
    afficheDamier(tDamier);
}




 //Etape 5
/* Fonction qui prend entrée le damier et l'affiche
IN : Tableau
OUT : Rien*/
function afficheDamier(damier){
    console.table(damier);
}


//Etape 6
/*Fonction qui demande la direction
IN : None
OUT : Entier */
function askMouv(){
    var consigne = "1 pour le SO \n 7 pour le NO \n 9 pour le NE \n "+
        "3 pour le SE \n 5 pour sortir";
    
    do{
        var mouv = parseInt(prompt("Où voulez-vous allez ?\n " + consigne));
    }while(mouv != 1 && mouv != 7 && mouv != 9 && mouv != 3 &&
        mouv != 5 );
    return mouv;
}




/*Etape 7 On test si le déplacement est valide 
IN : Nombre, Nombre, Tableau
OUT : Booléen*/
function testDeplacement(mouv, n, coord){
    /*On met le coordonnée dans des variables pour plus de lisibilité 
    et on initialise le test à true*/
    var xp = coord[0];
    var yp = coord[1];
    var inDamier = true ;
    /* On teste si le mouvement entrée est celle de la sortie ou 
    si les nouvelle coordonnées sont dans le dmaier*/
        if((mouv == 5) || (xp >= n || yp >= n || yp < 0 || xp < 0)){
            inDamier = false;           
        }    
    // Renvoie le résulat du teste    
    return inDamier;
}


function testTestDeplacement(){
    var test = testDeplacement(7, 8, [2,4]);
    var test2 = testDeplacement(3, 8, [8,8]);
    console.log("test : " + test + "\n test2 : " + test2);
}



// 8- Déplacer le pion
function mouvPion(pion, mouv, damier, coord){
   
    var symbole = pion[2];// On met le sympbole dans une variable pour plus lisibilité.
    damier[pion[0]][pion[1]]=0; // On transforme la case occupé
    //On met à jour les coordonnées du pion
    pion[0] = coord[0]; 
    pion[1] = coord[1];
    //On déplace le pion dans sa nouvelle case
    damier[pion[0]][pion[1]] = symbole;
    //On renvoie le nouveau damier
    return damier;

}

/*Modifie les coordonnées du pion selon le mouvement entrée et 
renvoie les nouvelles coordonnées
IN : Tableau , Nombre
OUt : Tableau*/

function modifCoord(pion , mouv){
    // On met les coordonnée du pion dans des variables pour ne pas les modifier tout de suite
    var xp = pion[0];
    var yp = pion[1];
    switch(mouv){// On teste les différents cas de déplacement
        case 7 : //On se déplace en haut à gauche
            xp -= 1;
            yp -= 1 ;
            break;
        case 9 : //On se déplace en haut à droite
            xp -= 1;
            yp += 1 ;
        
            break;
        case 1 : //On se déplace en bas à gauche
            xp += 1;
            yp-= 1 ;
        
            break;
        case 3 : //On se déplace en bas à droite
            xp += 1;
            yp+= 1 ;
            
            break;
    }
    //on renvoie les nouvelles coordonnées.
    return[xp,yp];
}


    