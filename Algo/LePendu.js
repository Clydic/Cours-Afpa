function lePendu(){
    // --Début Programme principale--
    //Initialisation
    const DICO = ["canard", "pomme","maison", "loi","dauphin","chat"];
    var nbEssai = 6;
    var mot = "";
    var lettre ="";
    var listeLettre = [];
    var motTiret = "";
    var lettreTrouve = [];


    //Etape 1 Choix du mot Aléatoire
    
    mot = choixDuMotAlea(DICO).toLowerCase();
    lettreTrouve=rempTabBool(mot);
    
    while(nbEssai>=0 && lettreTrouve.includes(false)){
         //Etape 2 Afficher les tirets
        motTiret=afficherMotTiret(mot , lettreTrouve)
        // console.log(motTiret);
        //Etape 3 Donner 1 lettre
        lettre=donnerLettre(listeLettre , nbEssai, motTiret);
        //Etape 4 Tester si la lettre est dans le mot
        if(lettInWord(mot,lettre)){
        //Etape 5 MAJ Mot
            majWord(mot, lettre, lettreTrouve);
        }else{
            nbEssai -- ;
        }
   
    }
    
   epilogue(nbEssai,mot);
}

// --Fin Programme Principale --


//Etape 1 choix du mot aléatoire
/**Choisi un mot au hasard dans un tableau prédéfini
 * @param {array of word} liste_mot 
 * IN : Array
 * OUT : String
 */
function choixDuMotAlea(liste_mot){
    var index = Math.floor(Math.random()*liste_mot.length);
    var mot = liste_mot[index];
    return mot;
}

// test la fonction du choix de mot aléatoire
function testchoixDuMotAlea(){
    var listeMot = ["Sanji", "Luffy","Zorro", "Nami","Robin","Usopp"]; 
    console.log(choixDuMotAlea(listeMot));
}

//Etape2
/**
 * Remplit un tableau de la taille de word avec des booléens false
 * @param {String} word 
 */
// function rempTabBool(word){
//     var tableau =[]
//     for(let i = 0 ; i < word.length ; i++){
//         tableau.push(false);
//     }
//     return tableau;
// }
function rempTabBool(word){
    return new Array(word.length).fill(false)
    
}


/**
 * Affiche le mot avec les tirets et lettre trouvé
 * @param {String} word 
 * @param {Array of Boolean} tabBool 
 */ 
function afficherMotTiret(word, tabBool){
    var mot_tiret = []
    for(let i = 0 ; i < word.length ; i++){
        if(tabBool[i]){
            
            mot_tiret.push(word[i]);
        }else{
            mot_tiret.push("_");
        }
    }
    return mot_tiret.join(" ");
 }
// console.log(afficherMotTiret("sanji",[true,false,false,false,false]));

//Etape 3 
// 
/**
 * Demande une lettre à l'utilisateur et vérifie la saisie
 * IN :
 * @param {Array of letters} liste 
 * @param {Number} nbEssai 
 * OUT : Number
 */
function donnerLettre(liste , nbEssai , mot_tiret){
    // Initilisation
    var msg = "Choisisez une lettre entre a et z\n" 
    + "Voici les lettres déjà joué : "
    + liste.join() + " \n Il vous reste : " + nbEssai
    +" essaie(s) \n " +mot_tiret
   
    var flag = true
    //Traitement
    //Tant que la saisie n'est pas une lettre 
    while(flag){
        flag = false
        var choix = prompt(msg);
        if(choix == null){
            console.log("Saisie incorrect");
            flag = true ;            
        }else{
            choix.toLowerCase();
            if(choix < "a" || choix > "z"){
                flag = true;
            }
            else if(choix.length!=1){
                flag = true;
            }
           else{
                for(let i = 0 ; i < liste.length ; i++){
                    if(liste[i] == choix){
                        flag = true;
                        break;
                    }
                }
        
            }
    
        }
    }
    liste.push(choix);
    return choix;
}

function testdonnerLettre(){
    var l = ["r","u","o","p"]
    console.log(donnerLettre(l,10) + "\n" + l);
}
// Etape 4
/**
 * Teste la présence de la lettre dans le mot
 *
 * @param {String} word 
 * @param {String} letter 
 * OUT : Boolean
 */ 

function lettInWord(word, letter){
    return word.includes(letter)
}

// Etape 5
//Met à jour le tableau booléen qui inqique lettres déjà trouvé
//IN : String , String , Tableau
//OUT : None
function majWord(word, letter, tabBool){
    for(let i = 0 ; i< word.length; i ++ ){
        if(word.charAt(i) == letter){
            tabBool[i] = true
        }
    }
} 
// Epilogue
/**
 * Affiche le message de fin avec le résultat et le mot à trouver.
 * @param {Number} nb 
 * @param {String} word 
 * OUT : None
 */
function epilogue(nb, word){
    msg = "La partie est finie \n";

    if(nb < 0){
        msg += "Vous avez perdu le mot était : " + word;
    }else{
       
        msg += "Toute mes félicititation vous avez trouvé : " + word;
    }
    alert(msg);
}
// var tableau = [false,false,false,true,false];
// majWord("sanji", "n", tableau);
// console.log(tableau);
// majWord("sanji", "r", tableau);
// console.log(tableau);
