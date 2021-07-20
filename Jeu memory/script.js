function main(){
    const INIT = '123456123456';
    const CHEMIN = "images/"
    const DOS = "dos.jpg";
    var tCartes = new Array();
    // Etape 2 : Créer le tableau alétoire
    tCartes = initCartes(INIT);
    //Etape 3 : Initiliser le tableau de carte, 
    //Ajouter les dos des cartes et les event "click"
    showBackCard();
    

    //Etape 4 : Ajouter un timer sur la 2nde carte
    timer();
    // Etape 5 : Tester les doublons valides

    // Etape 6 : 
    console.log("main")
    

/**
 * Crée un tableau Html d'image.
 */
    function showBackCard(){
        var maDive = document.getElementById("zone");
        var tbl = document.createElement("table");
        var tblBody = document.createElement("tbody");
        var indice = 0
        for(let i=0; i<3; i++){
            var row = document.createElement("tr")
            for(let j=0; j<4; j++ ){
                var img =createImage(indice , tCartes[indice]);
                indice++
                var cell = document.createElement("td");
                cell.appendChild(img);
                row.appendChild(cell);
            }
            tblBody.appendChild(row);
        }
        tbl.appendChild(tblBody);
        maDive.appendChild(tbl);
        
        
    }
    // /**
    //  * Créer un tableau mélangé avec les valeurs rentrées
    //  * @param {String} INIT 
    //  * @returns {Array(Sring)}
    //  */
    function initCartes(INIT){
         return INIT.split('').sort(function(){return 0.5-Math.random(); });
     }

    function retourneImage(id) {
        var monImg = document.getElementById(id);
        var name = monImg.getAttribute("name");
        monImg.setAttribute("src", CHEMIN + name);
    }
    function remetImage(id){
        var monImg = document.getElementById(id);
        monImg.removeEventListener("")
        var name = monImg.getAttribute("name");
        monImg.setAttribute("src", CHEMIN + DOS);

    }

    function createImage(idImg, nameImg) {
        var monImg = document.createElement('img');
        monImg.setAttribute("src", CHEMIN + DOS);
        monImg.setAttribute("id", idImg);
        monImg.setAttribute("name", nameImg+".jpg");
        monImg.setAttribute("alt", "carte");
        monImg.addEventListener("click",function() {
            retourneImage(idImg);
        });
        return monImg;
    }
    
    
}
main();