function test08_01() {
    //initialisation
    var tableau = []
    var sstableau= []
    //Traitement
    for (let i = 0 ; i < 13 ; i++){
        sstableau.push(0);
    }    
    for (let i = 0 ; i < 6 ; i++){
        tableau.push(sstableau)
    }

//Affichage
tableau[5][3]=4;
console.table(tableau/*.join("\n")*/);
}

function test08_01b(){
    //Initialisation
    var tableau = []

    //Traitement
    for(let i = 0; i < 6; i++){
        tableau[i] = [];
        for (let j = 0 ; j < 13 ; j++){
            tableau[i][j]=0;
        }
    }
    //Affichage
    console.table(tableau);
}

function test08_06() {
    //Initialisation
    var tableau = [];
    var nb_alea = Math.trunc(Math.random()*1000);
    var max = nb_alea;
    var x = 0;
    var y = 0;

    for(let i = 0; i < 13; i++){
        tableau[i] = [];
        for (let j = 0; j < 9; j++) {

            tableau[i][j] = Math.trunc(Math.random()*1000);
            }
            
        }
    for(let i = 0 ; i < 13 ; i++){
        for(let j = 0; j < 9; j++){
            if (tableau[i][j] > max){
                max=tableau[i][j];
                x=i;
                y=j;
            }

        }
    }
    console.table(tableau);
    console.log ("Le plus grands nombre est : " + max + 
                 "\n Il se situe à la ligne " + x + " et la colonne " + y);

}

function test_Math() {
    var n = 10;
    var nb_alea=0
    for(let i = 0; i < n; i++){
        nb_alea=Math.trunc(Math.random()*100);
        console.log(nb_alea);
    }
    
}

function test08_07(){
    //Initialisation
    var damier = [];
    const N = 10;
    const  LONGUEUR = 10
    const LARGEUR = 10
    var xp = parseInt(prompt("Veuillez indiquer à quelle ligne se situe votre pion"));
    var yp =  parseInt(prompt("Veuillez indiquer à quelle colonne se situe votre pion"));
    affichage = "Pour déplacer votre pion taper\n 7 pour aller au NO \n"
    +" 1 pour aller au haut NE\n 9 pour aller au SO \n"
    +" et 3 pour aller au SE. \n "+ "4 si vous voulez arrêter."
    " Si vous allez plus loin que le damier \n"+
    "le jeu se termine.\n";
    var deplacement =0;
    var pion ="X";
    var fGame = true;
   
    //Traitement
    // On teste si le pion est placé dans le damier

    while (xp > LARGEUR || yp > LONGUEUR || yp < 0 || xp < 0){
        console.log("Votre ligne et votre colonne doit être strictment inférieur à " + n); 
        xp = parseInt(prompt("Veuillez indiquer à quelle ligne se situe votre pion"));
        yp =  parseInt(prompt("Veuillez indiquer à quelle colonne se situe votre pion"));

    }
    
    // On crée le damier
    for(let i = 0; i < LARGEUR ; i++){
        damier[i] = [];

        for (let j = 0 ; j < LONGUEUR; j++) {
                 damier[i][j] = 0;
        }      
        }
        
    
    while (fGame){
        //Test qui fait sortir de la boucle
        if (xp > LARGEUR || yp > LONGUEUR || yp < 0 || xp < 0){
            fGame = false;
            affichage="La partie est fini";
        }else{
            //On Affiche le message de la variable affichage
            console.log(affichage) ;
            
            // On place le pion sur le damier
            damier[xp][yp] = pion; 

            // On affiche le Damier avec le Pion
            console.table(damier) ;

            // On demande la direction
            deplacement=parseInt(prompt("Où voulez-vous allez ? "));

            //On remplace la case où est placé le pion
            damier[xp][yp]=0 ; 

            switch(deplacement){// On teste les différents cas de déplacement
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
                case 5 : // On stop la partie
                    fGame= false;
                    affichage="La partie est finie";
                    break;
                default:
                    /*On redemarre la boucle parceque la valeur écrite n'appartient pas à
                    au valeur autorisé*/ 
                    console.log("Veuillez entrer 0,1,2,3 ou 4");
                    break;
            }
        }
        

    }
    //On affiche le message de fin de partie.
    console.log(affichage)
}
