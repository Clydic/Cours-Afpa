function test07_01(){
    // on Initialise les variable
    var N = parseInt(prompt("combien de nombre voulez vous entrer? ")); // On demande le nombre d'entré
    var tableau = []; //Le tableau à remplir
    var msg = "Les nombres sont consécutif"; // Le message à afficher 


    //Traitement
    // 1- On remplit le tableau
    for(var i = 0 ; i < N ; i++){
        tableau[i] = parseInt(prompt("Veuillez entrer un nombre"));  
    }
    //2- On tri le tableau
    tableau.sort(function(a, b) {
        return a - b;
      });
    
    //3- On vérifie si les nombre se suivent
    
    for ( var j = 0 ; j < tableau .length-1 ; j++){
        
        if (tableau[j] + 1 != tableau[j+1]){
           
            msg="Les nombres NE sont PAS consécutif";
            break;
        } 
    } 

    //On affiche le message et la liste trié.
    console.log(msg);
    

    console.log(tableau.join(", "));
}


function test07_01_alter(){
    var tNombres = [] ;
    var nombre = 0 ; 
}


function test07_03(){
    msg = "Exercice 3 : \n"
    // on Initialise les variable
    var tableau1 = [56,95,5,12,36];
    var N = tableau1.length;
    var temp = 0;

    //Traitement
    msg+="Ancien tableau : " + tableau1.join() +"\n"
    for(var i = 0 ; i < (N)/2; i++){
        temp = tableau1[(N-1)-i];
        tableau1[(N-1)-i] = tableau1[i];
        tableau1[i]= temp;
    }
    msg+="Tableau inversé : " + tableau1.join() + "\n";
    //Affichage
console.log(msg);
}

function test07_04(){
    msg = "Exercice 4 : \n"
    // on Initialise les variable
    var tableau = [56,95,5,12,36];
    var indice = parseInt(prompt("Veuillez indiquer l'indice du nombre à supprimer (Attention l'indice commence à 0"));
   
    //Traitement 
    msg+= "Le tableau avant suppression : " + tableau + "\n";
    /* On va remplacer écraser les nombre à partir de 
    l'indice par le nombre suivant et on supprime le dernier à la fin*/
    for( let i = indice ; i < tableau.length-1 ; i++){
        tableau[i] = tableau[i+1];
        }
    tableau.pop();
    msg+= "Le tableau après suppression : " + tableau;

    //Affichage    
   
    console.log(msg);
    }

function test07_05_nonOptimale(){
    // on Initialise les variable
    var dictionnaire = ["Banane", "Fraise","Poire" ,"Pomme","Tomate" ];
    var N = dictionnaire.length;
    var mCherche = prompt("Quel mot cherchez-vous dans ce petit dictionnaire? ");
    var flagTrouve = false;
    var msg="";
    //Traitement 
    for(let i =0; i < N; i++){
        if (dictionnaire[i] == mCherche){
            flagTrouve = true;
            break;
        }
    }
    if (flagTrouve) msg="Le mot est dans le dictionnaire";
    else msg="Le mot n'est pas dans CE dictionnaire;"

        //Affichage  
    console.log(msg);

}
function test07_05(){
    var dico = ["Banane", "Cerise","Fraise","Poire" ,"Pomme","Tomate" ];
    var N = dico.length;
    var wSearched = prompt("Quel mot cherchez-vous dans ce petit dictionnaire? ");
    flagFound = false;
    var msg="Le mot n'est pas dans le dictionnaire";

    while(!flagFound){
        
        if(N==1){
            flagFound = true;
            if(dico[0] == wSearched){
                msg="Le mot est dans le dictionnaire";
            }
        }
       

        else {
            if (wSearched == dico[parseInt(N/2)]){
                dictionnaire=[mCherche];
                N=1;
            }    
            else if (wSearched < dico[parseInt(N/2)]){
                dico = dico.slice(0,N/2);
                N=dico.length;
            }
            else{
                dico = dictionnaire.slice(parseInt((N+1)/2),N);
                N=dico.length;
            }
        }
    }   
console.log(msg);
}
function test07_05b(){
    // We initiate  the variable dico
    var dico = ["Cerise","Fraise" ,"Pomme","Tomate","Banane","Poire" ];
    // 1- We sort dico
    dico.sort();
    
    var N = dico.length;
    
    var wSearched = prompt("Quel mot cherchez-vous dans ce petit dictionnaire? ");
    flagFound = false;
    var msg = "Le mot n'est pas dans le dictionnaire";
    for(let i = 0; i < N/2; i++){
        if ((wSearched == dico[i] ) || (wSearched == dico[N-i-1])){
            msg= "Le mot est dans le dictionnaire";
            break;
        }
    }
console.log(msg);    

}


