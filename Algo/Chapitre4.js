//Exercice3
function test04_03(){
    var heure = parseInt(prompt("Entrer l'heure."));
    var minute = parseInt(prompt("Entrer les minutes"));
    var seconde = parseInt(prompt("Entrer les secondes"));

    seconde+=1;
    if (seconde == 60){
        seconde = 0;
        minute += 1;
    }
    if(minute == 60){
        minute = 0;
        heure += 1;

    }
    if(heure == 24){
        heure = 0;
    }

    console.log("Dans une seconde il sera "+heure+" heure "+  minute +" minute(s) et " +seconde+" secondes ")
}
//Exercice5
function test04_05(){
    var age = parseInt(prompt("Quel est votre âge? ")) ;
    var sexe = prompt("Etes-vous un homme ou un femme? ").toLowerCase ;
    var impot;
    var msg = "Vous êtes ";

    if ((sexe == "homme" && age >= 20) || (sexe == "femme" && age<=35 && age>= 18)){
        impot = "imposable";
    } 


    else {
        impot = "non imposable, c'est inadmissible, vous avez de la chance!!!!";

    } 
    

    console.log(msg + impot);
}
// Exercice 6
function test04_06(){
    var C1 = parseFloat(prompt("Entrez le résultat du Candidat 1")); // Candidat 1
    var C2 = parseFloat(prompt("Entrez le résultat du Candidat 2")); // Candidat 2
    var C3 = parseFloat(prompt("Entrez le résultat du Candidat 3")); // Candidat 3
    var C4 = parseFloat(prompt("Entrez le résultat du Candidat 4")); // Candidat 4
    var msg = "Vous êtes ";
    var resultat ;
    if (C4>50 || C2>50 || C3>50 || C1<12.5){

        resultat = "battu";

    } else if(C1 > 50){

        resultat = "élu, félicitation!!!";

    }else if(C1 > C2 && C1 > C3 && C1 > C4){

        resultat = " favorable pour le second tour.";

    } else{
        resultat = "défavorable pour le sond tour.";
    }

    console.log(msg + resultat);

}
//Exercice7
function test04_07(){
    //Initialisation
    var age = parseInt(prompt("Quel âge avez vous?")); 
    var permis = parseInt(prompt("Depusi combien de temps avez vous votre permis? "));
    var ancienneté = parseInt(prompt("Depuis combien de temps êtes vous chez nous? "));
    var accident = parseInt(prompt("Combien d'accident avez-vous provoqué? "));
    var forfait;
    var pts = 3 - accident; // Initialise avec le nombre d'accident
    var msg = "Vous aurez le forfait "

    //Traitement
    if ( age < 25) {
        pts --;  
    }

    if( permis < 2){
        pts --;
    }

    if ( pts >=0 && ancienneté >= 1){
        msg = "Vous n'êtes pas accepté.";
    }

       
    

    // Affichage
    switch(pts){
        case(4): 
            msg += "bleu";
            break;
        case(3): 
            msg += "vert";
            break;
        case(2): 
            msg += "orange";
            break;
        case(1):
            msg += "rouge";
        default: 
            msg = "Vous n'êtes pas accepté.";
            break;
    }

    
    console.log(msg);
    }

//Exercice8
/*function test04_08() {
    //Initialisation
    var jour = parseInt(prompt("Entrer le jour. "));
    var mois = parseInt(prompt("Entrer le numéro de mois. "));
    var annee = parseInt(prompt("Entrer l'année. "));
    var msg = "Cette date est ";
    var date= new Date(annee, mois-1, jour);

    if (date.getDate() == "jour" && date. getMonth() == mois;
    if (mois == 2 && annee /= 4 && annee /= 100 && annee /= 400) {
        
                    bissextile = true;
                }
                else{
                    bissextile = false;
                }
            }
            else{
                bissextile = true;
            }    
        }
        else{
            bissextile = false;
        }
        if (jour <= 29 && bissextile){
                date = "vraie"
        }
        else{
            date= "vraie"
        }
    }
    else if (jour == 31) {   
    
        if( mois == 1 || mois == 3 || mois == 5 || mois == 7 || mois == 8 || mois == 10 || mois == 12){
            date = "vraie";
        }
        else{
            date = "fausse";
        }
    }  
    else {
        date = "vraie";
    }

    
    console.log(msg + date);
}*/