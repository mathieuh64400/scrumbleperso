import Controller from "../core/Controller.js";
//  const interact = require('..node_modules/interactjs') ;
import  interact from 'interactjs';
// import Sortable from "../component/Sortable.js";
export default class Etape3 extends Controller {
  constructor() {
    super();
    document.title = "Etape3:Backlog";

    console.log(this.state);

    //  url = url selectionné au cours de l'étape deux et mis dans le state
    let url = "http://localhost:3003/paquet1";
    const cadrillage = document.getElementById("ref"); //selction du cadre gris contenat l'ensemble des cartes

    let hpCharacters = []; //création d'un tableau destiné a recevoir les datas

    const loadCharacters = async () => { //ensemble de la fonction qui est asynchrone
      try {
        const res = await fetch(url); //stockage dans une constante des données issues du paquet 1 grace a un fetch 
        hpCharacters = await res.json();
        console.log(hpCharacters); //mise des données dans le tableau de données  
        displayCharacters(hpCharacters); //céation d'une fonction avec ce  tableau de données en paramétres


        let sortable = new Sortable(document.getElementById("ref")); //creation d'un objet  sortable avec pour valeur les elements avec l'id ref soit le cadre


      } catch (err) {
        console.error(err);
      }
    };
    const displayCharacters = (characters) => { //fonction fléchée displayCharacters
      const htmlString = characters //création d'une constante de mapage des données (characters)qui retoune sous forme de contenu (innerhtml de  )
        .map((character, index) => {
          return `
                        <div class="forme" id="sousref${index}" data-position="${character.dposition}"data-id="${character.id}"data-choisi="false">
                                <div class="repartition">
                                  <p>Usrestorie:${character.id}</p> 
                                  <p>Depend:${character.Dependance}<p>
                                </div>
                                  <h3> ${character.titre}</h3>
                                  <p> ${character.contenu}</p>
                                  <p> Size: </p>
                                  <p> Value: </p>
                               <div id="interet${character.id}"class="croix"> + </div>
                        
                        </div>
                        
                     `;
        })
        .join('');
      cadrillage.innerHTML = htmlString;

      let card = document.querySelectorAll("div.croix");
      console.log("somme des", card);

      card.forEach(elements => {
        elements.addEventListener("click", selection);
      });

      function selection() {
        this.dataset.choisi = true;
        prioriser();

      }

      function prioriser() {
        let priorite = document.querySelectorAll("div[data-choisi='true']");

        let text = document.querySelector("#nombrecarteSelected");
        console.log(text);
        console.log(priorite);
        let tableauassociatif= new Array();

       let listeltselectionne=Array.from(priorite);
       
        console.log(tableauassociatif);
        console.log(listeltselectionne);
        document.querySelector("#nombrecarteSelected").textContent = "vous avez selectionné " + priorite.length + " " + "cartes";

        console.log(priorite.length);

        if (priorite.length >=4) {
          alert("vous avez sélectionné suffisement de cartes");

        }
        console.log(listeltselectionne);
        console.log(listeltselectionne[0]);
        for (let i= 0; i < 5; i++) {
          if (listeltselectionne[i] != "") {
            listeltselectionne[i].innerHTML = "A";
            listeltselectionne[i].classList.add

          }
        }
       


      }

    }


    loadCharacters();

    // ajout de la prioriété de choix avec double click


    var Sortable = function (element, scrollable) {

      var rect;
      let self = this;
      if (scrollable == null) {
        scrollable = document.getElementById("ref");
      }
      this.scrollable = scrollable;
      this.element = element;
      this.items = document.querySelectorAll(this.element.dataset.sortable);
      console.log(this.element.dataset.sortable);
      console.log(this.element);
      console.log(this.items);
      let x = this.items[0];
      rect = x.getBoundingClientRect();

      this.item_width = Math.floor(rect.width);
      this.item_height = Math.floor(rect.height);
      // console.log(this.item_width,this.item_height);
      this.cols = Math.floor(this.element.offsetWidth / this.item_width);
      // console.log(this.cols);

      for (let index = 0; index < this.items.length; index++) {
        const item = this.items[index];

        item.classList.add("position");
        var position = item.dataset.position;
        this.moveItem(item, item.dataset.position);
        item.style.border = "1px solid #475158";
      }

      interact(this.element.dataset.sortable, {
        context: this.element
      }).draggable({
        inertia: false,
        manualStart: false,
        autoScoll: {
          container: scrollable,
          margin: 10,
          speed: 600
        },
        onmove: function (e) {
          self.move(e);
        }
      }).on('dragstart', function (e) {
        var r = e.target.getBoundingClientRect();
        console.log(r.left);
        e.target.classList.add('drag');
        self.startPosition = e.target.dataset.position;
        self.offset = {
          x: e.clientX - r.left,
          y: e.clientY - r.top
        };
        console.log(x);
        self.scrollTopStart = self.scrollable.scrollTop;
      }).on('dragend', function (e) {
        e.target.classList.remove('drag');
        self.moveItem(e.target, e.target.dataset.position);
      })

    };

    Sortable.prototype.move = function (e) {
      var p = this.getXY(this.startPosition);
      var x = p.x + (e.clientX - e.clientX0);
      var y = p.y + (e.clientY - e.clientY0);
      e.target.style.transform = "translate3D(" + x + "px," + y + "px,0px)";
      var oldposition = e.target.dataset.position;

      var newPosition = this.guessPosition(x + this.offset.x, y + this.offset.y);
      if (oldposition != newPosition) {

        this.swap(oldposition, newPosition);
        e.target.dataset.position = newPosition;
      }
      this.guessPosition(x, y);
    }

    // pour que Sortable.prototype.move
    Sortable.prototype.getXY = function (position) {
      var larg = this.item_width * (position % this.cols);
      var long = this.item_height * Math.floor(position / this.cols);
      return {
        x: larg,
        y: long
      }

    }
    Sortable.prototype.guessPosition = function (x, y) {
      let col = Math.floor(x / this.item_width);
      if (col >= this.cols) {
        col = this.cols - 1
      }
      if (col <= 0) {
        col = 0;
      }

      console.log(col);
      let row = Math.floor(y / this.item_height);
      if (row < 0) {
        row = 0
      }
      var position = col + row * this.cols;
      if (position >= this.items.lenght) {
        return this.items.lenght - 1;
      }
      return position;

    }
    Sortable.prototype.swap = function (oldPosition, endPosition) {
      for (let index = 0; index < this.items.length; index++) {
        const item = this.items[index];
        if (!item.classList.contains('drag')) {
          var position = parseInt(item.dataset.position, 10);
          if (position >= endPosition && position < oldPosition && endPosition < oldPosition) {
            this.moveItem(item, position + 1)
          } else if (position < endPosition && position > oldPosition && oldPosition < endPosition) {
            this.moveItem(item, position - 1);
          }
        }
      }
    };
    Sortable.prototype.moveItem = function (item, position) {

      let p = this.getXY(position);
      item.style.transform = "translate3D(" + p.x + "px," + p.y + "px,0px)";
      item.dataset.position = position;
    };
  }
}