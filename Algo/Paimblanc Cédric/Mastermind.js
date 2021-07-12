function mastermind() {
     //Initalisation
    const TCOULEUR=["rouge", "vert","jaune","noir","bleu","violet","blanc","marron"];
    var tChoixA = ["maron", "vert", "vert", "jaune"];
    var tChoixB = [];
    var tTent = [];
    var tPLace = []
    var bienPlace = 0;
    var malPlace = 0;
    var tentRest = 8;
    var test = true;
    var msg=""
    
   
    //Traitement
    // Etape 1
    tChoixA = choixCouleur(TCOULEUR,4); 
    // Etape 2
    tChoixB = choixCouleur(TCOULEUR,4);
    tTent.push(tTent);
   
    // Etape 3
    test = testCouleur(tChoixA , tChoixB);

    //Etape 4 
    if(test){
        msg="BRAVO vous avez gagné"
    }else{
        
        tPLace=place(tChoixA , tChoixB);
        bienPlace=tPLace[0];
        malPlace = tPLace[1];
             
            
        
    }
    //Affichage

}
// On choisit n couleurs dans le tableau donné et on retourne un tableau des couleurs choisis
/**
 * 
 * @param {Array} array 
 * @param {Int} n 
 * @returns Array
 */
function choixCouleur(array, n) {
    var couleur = ""
    var flag = false
    var tchoix = []
    while(flag == false)
        if (tchoix.length==n){
            flag = true;
        }
        else{
            couleur=prompt("Veuillez choisir " + n + " couleur " +
            " dans la liste si dessous \n" + array.join(" \n ") + "\n" 
                                + "Les couleurs déjà choisies: " + tchoix.join(" \n ")).toLowerCase();
            if(array.includes(couleur)){
                tchoix.push(couleur);
            }
        }
        return tchoix;
}


// On test deux tableaux
/**
 * 
 * @param {Array} tchoixA 
 * @param {Array} tchoixB 
 * @returns Boolean
 */
function testCouleur(tchoixA , tchoixB){
    return tchoixA == tchoixB
    
}
// Teste si les éléments sont dans le tableau, 
//si c'est le cas, test si ils sont à la bonne place.
/**
 * 
 * @param {Array} tchoixa 
 * @param {Array} tchoixb 
 return Array*/
function place(tchoixa , tchoixb){
    var bon = 0;
    var mauvais = 0;
    
    for ( i in tchoixb){
        if(tchoixa.includes(tchoixb[i])){
            if(tchoixa[i] == tchoixb[i]){
                bon ++;
            }
            else{
                mauvais ++ ; 
            }
        }   
    }
    return [bon,mauvais];

}
alert(place(["bob","bill","paul","bob"], ["bob","bill","bill","boule"]))