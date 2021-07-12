function perimetre(){
    //Initialisation
    var resultat=0;
    var forme = "polygone quelconque";
    var tTriangle=[];
    var n = arguments.length;
    //Traitement
    switch(n){
        case 0:
            document.write("Vous devez entrer au moins une largeur <br/>");
            break;
        case 1:
            forme=" carré ";
            resultat= 4*arguments[0];
            break;
        case 2:
            forme="rectangle";
            resultat=(arguments[0]+arguments[1])*2;
            break;
        case 3:
            forme="triangle";
            tTriangle=Array.from(arguments).sort((a,b)=>a-b);//[arguments[0],arguments[1],arguments[2]];
            
            if (tTriangle[0]+tTriangle[1]>tTriangle[2]&&tTriangle[0]+tTriangle[2]> tTriangle[1]&&tTriangle[1]+tTriangle[2]>tTriangle[0]) {
                if(arguments[0]===arguments[1] && arguments[1]===arguments[2] && arguments[0]===arguments[2]){
                    forme+=" équilatérale ";
                }
                else if(arguments[0]===arguments[1] || arguments[1]===arguments[2] || arguments[0]===arguments[2]){
                    forme+=" isocèle ";
                }
                else if (Math.pow(tTriangle[2],2)===Math.pow(tTriangle[0],2)+Math.pow(tTriangle[1],2)){
                    forme+=" rectangle";
                }
            }
            else{
                n=-1
                document.write("Attention vos valeurs ne permettent pas d'avoir un triangle <br/>");
            }
           
        default:
            for(let i in arguments){
                resultat+= arguments[i];
            }

        
    }
    //Affichage
    if (n>0){
        document.write("Votre " + forme + " fait " + resultat + "cm" +"<br/>");
    }
    

}

// funtion pythagore(a,b,c){
//     var tVar=[a,b,c];
//     var rectangle=false
//     for(let i in tVar){
//         if(tVar[i]^2){}
//     }
// }

//--------Programme Principale--------
perimetre();
perimetre(4);
perimetre(1,1/2);
perimetre(3,3,5);
perimetre(1,1,6);
perimetre(3,3,3);
perimetre(3,4,5);
perimetre(1,2,3,4,5,6);