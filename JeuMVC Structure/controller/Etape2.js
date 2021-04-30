import Controller from "../core/Controller.js";
// import Xhrrequest from "../component/Xhrrequest.js";
export default class Etape2 extends Controller {
  constructor() {
    super();
    document.title = "Etape du jeu 2"
    console.log("jeu:etape2");
    console.log(this.state);

    let url0 = "http://localhost:3000/paquet1";
    let url1 = "http://localhost:3000/paquet2";
    let url2 = "http://localhost:3000/paquet3";

    var O = new Object();
    O[url0] = 0;
    O[url1] = 1;
    O[url2] = 2;

  
    console.log(O)
    for (var i in O) {
      console.log(i);
      console.log(i +" "+O[i]);
      let elt;
      elt[i]= document.querySelectorAll("#paquet"+O[i]);
      console.log(elt[O]);
    }

    // selection de l'ensemble des div avec l'attribut data-selected
    const listeUserStories = document.querySelectorAll("div[data-selected]");
    console.log(listeUserStories);

    listeUserStories.forEach(listeUserStorie => { //boucle sur chaque div auquel on applique un evenement click qui lance la fonction selectionner
      listeUserStorie.addEventListener('click', selectionner);
    });

    function selectionner() {
      this.dataset.selected = this.dataset.selected == "true" ? "false" : "true"; //si  le dataset.selected de notre div selectionner est true elle passe a false sinon reste a true

      // this.dataset.selected = this.dataset.selected == "true" ? this.dataset.cadreselected=="false" : this.dataset.cadreselected=="true";

      alert('votre selection est réussie!!Validez-la en cliquant sur le bouton Finalisez la préparation'); //message utilisateur de validation de la manoeuvre

      const selection = document.querySelectorAll('div[data-selected="true"]').length; //verification que l'ensemble des div avec le data-selected est bien = a 1

      const elementSelected = document.querySelectorAll('div[data-selected="true"]'); //verification que l'ensemble des element avec le data-selected =trues soit bien = une div

      console.log(selection, elementSelected);


      // selection de tout les data-cadreref 

      const listecadrerefs = document.querySelectorAll("section[data-cadreselected]"); // selection de l'ensemble des article avec l'attribut data-cadreselected
      listecadrerefs.forEach(listecadreref => {
        listecadreref.addEventListener('click', selectionnercadre); //boucle sur chaque article auquel on applique un evenement click qui lance la fonction selectionnercadre
      });

      function selectionnercadre() {
        this.dataset.cadreselected = this.dataset.cadreselected == "true" ? "false" : "true"; //voir cas prcdent meme logique
        const cadreselected = document.querySelectorAll('section[data-cadreselected="true"]'); //verification que l'ensemble des elements avec le data-selected =trues soit bien = un article
        console.log(cadreselected);

        if (selection == 1 && elementSelected[0] != "" && cadreselected[0] != "") { //si presence d'un seul element selectionner non vide en relation avec un article [data-cadreselected="true"] non vide
          let titre = document.querySelector("h2"); //selection du titre 
          let cadrevert = document.querySelector('section[data-cadreselected="true"]'); // verdissement de ces contours
          console.log(cadrevert);
          cadrevert.style.border = "0.2em green solid";

          let docResultat = document.createElement("p"); // ajout message de felicitation
          docResultat.style.textAlign = "center";
          docResultat.style.fontSize = "0.75em";


          docResultat.innerHTML = " Bravo !!!!  vous avez selectionné votre projet!! "
          titre.appendChild(docResultat); // mise en tant qu'enfant du titre du message de felicitation


        }
      }


    }




  }
  //importer les user stories (3 jeu de fichiers Json avec une classe Userstories et mis en place avec une requet Ajax)
  //sauvegarder le nom du paquetselectionner state (equipe a creer ou ajout de cette a prop a state joueur prééxistant)


}