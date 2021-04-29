import Controller from "../core/Controller.js"
export default class Etape2 extends Controller {
  constructor() {
    super();
    document.title = "Etape du jeu 2"
    console.log("jeu:etape2");
    console.log(this.state);
    // voir si le state est conservé dans cette page
    
    const span = document.getElementsByClassName('fleche'); //selectionne tous les elements de classes fléches (a asvoir mes 6 fleches)
    const div = document.getElementsByClassName('box'); //selectionne toutes les div de type classes Box (a savoir les 30 div de l'article)
    var l = 0; //position du point l a 0;
    span[1].onclick = () => {// si on clique sur la premiere fléche (fleche1) on itere la valeur de l (direction droite (1) en -; direction gauche en - car ref de depart inverser(fléche o))
      l++;
       for (var i of div) {//on effectue le depalcement en px sur tout les div
        if (l == 0) {
          i.style.left = "0px";
        }
        if (l == 1) {
          i.style.left = "-740px";
        }
        if (l == 2) {
          i.style.left = "-1480px";
        }
        if (l == 3) {
          i.style.left = "-2220px";
        }
        if (l == 4) {
          i.style.left = "-2960px";
        }

        if (l > 4) {
          l = 4;
        }
      }
    }
    span[0].onclick = () => {
      l--;
      for (var i of div) {
        if (l == 0) {
          i.style.left = "0px";
        }
        if (l == 1) {
          i.style.left = "-740px";
        }
        if (l == 2) {
          i.style.left = "-1480px";
        }
        if (l == 3) {
          i.style.left = "-2220px";
        }
        if (l == 4) {
          i.style.left = "-2960px";
        }
        if (l < 0) {
          l = 4;
        }
      }
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

       alert('votre selection est réussie!!Validez-la en cliquant sur le bouton Finalisez la préparation');//message utilisateur de validation de la manoeuvre

      const selection = document.querySelectorAll('div[data-selected="true"]').length; //verification que l'ensemble des div avec le data-selected est bien = a 1

      const elementSelected = document.querySelectorAll('div[data-selected="true"]');//verification que l'ensemble des element avec le data-selected =trues soit bien = une div

      console.log(selection, elementSelected);


      // selection de tout les data-cadreref 

      const listecadrerefs = document.querySelectorAll("article[data-cadreselected]");// selection de l'ensemble des article avec l'attribut data-cadreselected
      listecadrerefs.forEach(listecadreref => {
        listecadreref.addEventListener('click', selectionnercadre);//boucle sur chaque article auquel on applique un evenement click qui lance la fonction selectionnercadre
      });

      function selectionnercadre() {
        this.dataset.cadreselected = this.dataset.cadreselected == "true" ? "false" : "true";//voir cas prcdent meme logique
        const cadreselected = document.querySelectorAll('article[data-cadreselected="true"]');//verification que l'ensemble des elements avec le data-selected =trues soit bien = un article
        console.log(cadreselected);

        if (selection == 1 && elementSelected[0] !="" && cadreselected[0] != "") {//si presence d'un seul element selectionner non vide en relation avec un article [data-cadreselected="true"] non vide
          let titre = document.querySelector("h2");//selection du titre 
          let cadrevert = document.querySelector('article[data-cadreselected="true"]');// verdissement de ces contours
          console.log(cadrevert);
          cadrevert.style.border = "0.2em green solid";

          let docResultat = document.createElement("p");// ajout message de felicitation
          docResultat.style.textAlign = "center";
          docResultat.style.fontSize="0.75em";

          
          docResultat.innerHTML = " Bravo !!!!  vous avez selectionné votre projet!! "
          titre.appendChild(docResultat);// mise en tant qu'enfant du titre du message de felicitation
      
           
        }
      }

      
    }
   
 
    

  }
  //importer les user stories (3 jeu de fichiers Json avec une classe Userstories et mis en place avec une requet Ajax)
  //sauvegarder le nom du paquetselectionner state (equipe a creer ou ajout de cette a prop a state joueur prééxistant)
 //maintenant il faut pouvoir se diriger vers etape 3 quand on clique sur finaliser .

}