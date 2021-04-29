import Controller from "../core/Controller.js"
export default class Etape2 extends Controller {
  constructor() {
    super();
    document.title = "Etape du jeu 2"
    console.log("jeu:etape2");
    console.log(this.state);

    const span = document.getElementsByTagName('span');
    const div = document.getElementsByTagName('div');
    var l = 0;
    span[1].onclick = () => {
      l++;
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

    const listeUserStories = document.querySelectorAll("article[data-selected]");
    console.log(listeUserStories);

    listeUserStories.forEach(listeUserStorie => {
      listeUserStorie.addEventListener('click', selectionner);
    });

    function selectionner() {
      this.dataset.selected = this.dataset.selected == "true" ? "false" : "true";

      // this.dataset.selected = this.dataset.selected == "true" ? this.dataset.cadreselected=="false" : this.dataset.cadreselected=="true";

      alert('votre selection est réussie!!Validez-la en cliquant sur le bouton Finalisez la préparation');

      const selection = document.querySelectorAll('article[data-selected="true"]').length;

      const elementSelected = document.querySelectorAll('article[data-selected="true"]');

      console.log(selection, elementSelected);


      // selection de tout les data-cadreref 

      const listecadrerefs = document.querySelectorAll("article[data-cadreselected]");
      listecadrerefs.forEach(listecadreref => {
        listecadreref.addEventListener('click', selectionnercadre);
      });

      function selectionnercadre() {
        this.dataset.cadreselected = this.dataset.cadreselected == "true" ? "false" : "true";
        const cadreselected = document.querySelectorAll('article[data-cadreselected="true"]');
        console.log(cadreselected);

        if (selection == 1 && elementSelected[0] != "" && cadreselected[0] != "") {
          let titre = document.querySelector("h2");
          let cadrevert = document.querySelector('article[data-cadreselected="true"]');
          console.log(cadrevert);
          cadrevert.style.border = "2em green solid";

          let docResultat = document.createElement("p");
          docResultat.style.textAlign = "center";

          docResultat.setAttribute("id", "nbre");
          docResultat.innerHTML = " Bravo !!!! <br> vous avez selectionné votre projet!! <br> Continuez votre préparation"
          titre.appendChild(docResultat);
        }
      }



    }
    // let validation = document.querySelectorAll('button[data-link]="/etape3"');
    // validation.addEventListener("click", actionner());

    // function actionner() {
    //   this.go("/etape3");
    // };


  }



}