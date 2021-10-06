import Controller from "../core/Controller.js";
//  const interact = require('..node_modules/interactjs') ;
import interact from 'interactjs';
import {
  array,
  object
} from "@amcharts/amcharts4/core";
// import Sortable from "../component/Sortable.js";
export default class Etape3 extends Controller {
  constructor() {
    super();
    document.title = "Etape3:Backlog";

    console.log(this.state.paquet);
    let paqueturl = this.state.paquet;
    console.log(typeof (paqueturl));
    let paqueturlbase = paqueturl[0].url;
    console.log(paqueturlbase);

    //  url = url selectionné au cours de l'étape deux et mis dans le state

    // let sysurl;
    // sysurl.innerHTML= urljeu;
    // console.log(sysurl);
    // const cadrillage = document.getElementById("ref"); //selction du cadre gris contenat l'ensemble des cartes

    // let hpCharacters = []; //création d'un tableau destiné a recevoir les datas

    // const loadCharacters = async () => { //ensemble de la fonction qui est asynchrone
    //   try {
    //     const res = await fetch(url); //stockage dans une constante des données issues du paquet 1 grace a un fetch 
    //     hpCharacters = await res.json();
    //     console.log(hpCharacters); //mise des données dans le tableau de données  
    //     displayCharacters(hpCharacters); //céation d'une fonction avec ce  tableau de données en paramétres


    //     let sortable = new Sortable(document.getElementById("ref")); //creation d'un objet  sortable avec pour valeur les elements avec l'id ref soit le cadre


    //   } catch (err) {
    //     console.error(err);
    //   }
    // };
    // const displayCharacters = (characters) => { //fonction fléchée displayCharacters
    //   const htmlString = characters //création d'une constante de mapage des données (characters)qui retoune sous forme de contenu (innerhtml de  )
    //     .map((character, index) => {
    //       return `
    //                     <div class="forme" id="sousref${index}" data-position="${character.dposition}"data-id="${character.id}"data-choisi="false">
    //                             <div class="repartition">
    //                               <p>Usrestorie:${character.id}</p> 
    //                               <p>Depend:${character.Dependance}<p>
    //                             </div>
    //                               <h3> ${character.titre}</h3>
    //                               <p> ${character.contenu}</p>
    //                               <p> Size: </p>
    //                               <p> Value: </p>
    //                            <div id="interet${character.id}"class="croix"> + </div>

    //                     </div>

    //                  `;
    //     })
    //     .join('');
    //   cadrillage.innerHTML = htmlString;



    // }


    // loadCharacters();




    let obj1 = {};
    let obj2 = {};
    let obj3 ={};
    let obj4={};
    let paquetref = this.state.paquet[0];
    let confref = this.state.paquet[0].configuration;
    console.log(confref);
    class Detail {
      constructor(id, type, titre, contenu, img, dposition, Dependance) {
        this.id = id;
        this.type = type;
        this.titre = titre;
        this.contenu = contenu;
        this.img = img;
        this.dposition = dposition;
        this.Dependance = Dependance;

      }
      afficher() {
        const cadrillage = document.getElementById("ref");
        console.log(cadrillage);

        if (this.titre != "...") {
          let carte = document.createElement("div");
          carte.classList.add('forme');
          carte.style.border = " 5px solid  #475158";
          carte.id = "sousref" + this.id;
          carte.setAttribute('data-position', this.dposition);
          carte.setAttribute('data-id', this.id);
          carte.setAttribute('data-cartechoisi', "false");
          let sousdiv = document.createElement("div");
          sousdiv.classList.add('repartition');
          let para1 = document.createElement('p');
          para1.innerHTML = "Userstorie:" + this.id;
          let para2 = document.createElement('p');
          para2.innerHTML = "Depend" + this.Dependance;
          let titre = document.createElement("h3");
          titre.innerHTML = this.titre;
          let para3 = document.createElement("p");
          para3.innerHTML = this.contenu;
          let size = document.createElement("p");
          let value = document.createElement("p");
          value.innerHTML = ""
          size.innerHTML = "";
          let eletclick = document.createElement("div");
          eletclick.id=this.id ;
          eletclick.classList.add("croix");
          eletclick.innerHTML = "+";


          cadrillage.appendChild(carte);
          carte.appendChild(sousdiv);
          sousdiv.appendChild(para1);
          sousdiv.appendChild(para2);
          carte.appendChild(titre);
          carte.appendChild(para3);
          carte.appendChild(size),
            carte.appendChild(eletclick);
        } else {
          let carte = document.createElement("div");
          carte.classList.add('transp');
          carte.id = "";
          console.log(carte);
          let sousdiv = document.createElement("div");
          sousdiv.classList.add('repartition');
          let para1 = document.createElement('p');
          para1.innerHTML = "";
          let para2 = document.createElement('p');
          para2.innerHTML = "";
          let titre = document.createElement("h3");
          titre.innerHTML = "";
          let para3 = document.createElement("p");
          para3.innerHTML = "";
          let size = document.createElement("p");
          let value = document.createElement("p");
          value.innerHTML = ""
          size.innerHTML = "";
          let eletclick = document.createElement("div");
          eletclick.id = "";
          eletclick.classList.add("croix");
          eletclick.innerHTML = "....";

          cadrillage.appendChild(carte);
          carte.appendChild(sousdiv);
          sousdiv.appendChild(para1);
          sousdiv.appendChild(para2);
          carte.appendChild(titre)
          carte.append(para3);
          let eltselected = document.querySelectorAll("div.forme");
          console.log(eltselected);
          eltselected.forEach(e => {
            e.addEventListener('click', choix);
            console.log(e);
          });

          function choix() {
            this.dataset.cartechoisi = true;
            let prioritecarte = document.querySelectorAll("div[data-cartechoisi='true']");
            console.log(prioritecarte);
            prioritecarte.forEach(elt => {
              elt.style.border = '2px solid green';
              console.log(elt);
            })

          }

          let card = document.querySelectorAll("div.croix");
          console.log(card);
          card.forEach(elements => {
            elements.addEventListener("click", selection);
          });

          function selection() {
            this.dataset.choisi = true;
            prioriser();

          }

          function prioriser() {
            console.log(card);
            let priorite = document.querySelectorAll("div[data-choisi='true']");
            let text = document.querySelector("#nombrecarteSelected");
            console.log(text);
            console.log(priorite);
            let tableauassociatif = new Array();
            console.log(tableauassociatif);
            let listeltselectionne = Array.from(priorite);


            if(listeltselectionne[0]!=""){
              let ident=listeltselectionne[0].id; //correspond a l'id de la userstorie donc a un id sur 25 pas au titre 
              console.log(ident);
              listeltselectionne[0].innerHTML = "A";
              listeltselectionne[0].classList.add("marque");
              console.log(obj1);
            Object.defineProperty(obj1, "carteid1", {
              enumerable: false,
              configurable: true,
              writable: false,
              value: ident
            });
            }
            if(listeltselectionne[1]!=""){
              listeltselectionne[0].innerHTML = "A";
              listeltselectionne[0].classList.add("marque");
              listeltselectionne[1].innerHTML = "A";
              listeltselectionne[1].classList.add("marque");
              let ident1=listeltselectionne[1].id;
              console.log(ident1);
              console.log(obj2);
              Object.defineProperty(obj2, "carteid2", {
                enumerable: false,
                configurable: true,
                writable: false,
                value: ident1
              });
            }
            if(listeltselectionne[2]!=""){
              listeltselectionne[0].innerHTML = "A";
              listeltselectionne[0].classList.add("marque");
              listeltselectionne[1].innerHTML = "A";
              listeltselectionne[1].classList.add("marque");
              listeltselectionne[2].innerHTML = "A";
              listeltselectionne[2].classList.add("marque");
              let ident2=listeltselectionne[2].id;
              console.log(ident2);
              console.log(obj3);
              Object.defineProperty(obj3, "carteid3", {
                enumerable: false,
                configurable: true,
                writable: false,
                value: ident2
              });
            }
            if(listeltselectionne[3]!=""){
              listeltselectionne[0].innerHTML = "A";
              listeltselectionne[0].classList.add("marque");
              listeltselectionne[1].innerHTML = "A";
              listeltselectionne[1].classList.add("marque");
              listeltselectionne[2].innerHTML = "A";
              listeltselectionne[2].classList.add("marque");
              listeltselectionne[3].innerHTML = "A";
              listeltselectionne[3].classList.add("marque");
              let ident3=listeltselectionne[3].id;
              console.log(ident3);
              console.log(obj4);
              Object.defineProperty(obj4, "carteid4", {
                enumerable: false,
                configurable: true,
                writable: false,
                value: ident3
              });
            }
            console.log(listeltselectionne);
            document.querySelector("#nombrecarteSelected").textContent = "vous avez selectionné " + priorite.length + " " + "cartes";
            console.log(priorite.length);
            if (priorite.length >= 4) {
              document.querySelector("#nombrecarteSelected").style.fontSize = "3em";
              document.querySelector("#nombrecarteSelected").textContent = "VOUS AVEZ SELECTIONNE 4 CARTES!!! c'EST SUFFISANT";

            }
            console.log("liste:", listeltselectionne);
            console.log(listeltselectionne[0]);
            
            console.log(obj2);
              Object.defineProperty(paquetref, "carte1", {
              enumerable: false,
              configurable: true,
              writable: false,
              value: obj1.carteid1
            });
           
           
               Object.defineProperty(paquetref, "carte2", {
              enumerable: false,
              configurable: true,
              writable: false,
              value: obj2.carteid2
            });
            
            Object.defineProperty(paquetref, "carte3", {
              enumerable: false,
              configurable: true,
              writable: false,
              value: obj3.carteid3
            });
            Object.defineProperty(paquetref, "carte4", {
              enumerable: false,
              configurable: true,
              writable: false,
              value: obj4.carteid4
            });
            console.log(paquetref);
            for (let i = 0; i < 5; i++) {
              if (listeltselectionne[i] != "") {
                listeltselectionne[i].innerHTML = "A";
                listeltselectionne[i].classList.add("marque");


              }
             
            }

          }
        }


      }
    }
    let premiertirage = document.getElementById("devoiler");
    console.log(premiertirage);
    let listurl = [];
    console.log(listurl);
    let I = 0;
    let nbreclick = I;
    console.log(nbreclick);
    let nbreurl = listurl.length;
    let urlselect = listurl[I];
    console.log(urlselect, I);

    if (paqueturlbase === 'http://localhost:3018/paquet1') {
      console.log(paqueturlbase, typeof (paqueturlbase));
      listurl = ['http://localhost:3003/paquet1', 'http://localhost:3003/paquet1.1', 'http://localhost:3003/paquet1.2', 'http://localhost:3003/paquet1.3', 'http://localhost:3003/paquet1.4'];
      I = 0;

      console.log(listurl);
      nbreurl = listurl.length;
      console.log(nbreurl);
      urlselect = listurl[I];

      console.log(urlselect, I);
      if (nbreclick === 0) {
        console.log(nbreclick);
        console.log(listurl);
        let urlcas = listurl[0];
        console.log(urlcas);

        console.log(obj1);

        premiertirage.addEventListener('click', function () {

          console.log(obj1);
          Object.defineProperty(obj1, "configuration", {
            enumerable: false,
            configurable: true,
            writable: false,
            value: urlcas
          });
          console.log(paquetref);
          Object.defineProperty(paquetref, 'configuration', {
            value: obj1.configuration,
            configurable: true,
            writable: false
          });
          console.log(urlcas, obj1.configuration);
          derouler(urlcas);

        })
      }
      let realance = document.getElementById('plus');
      console.log(realance);
      realance.addEventListener('click', function modifyclick() {
          I++;
          console.log(I);
          nbreclick = I;
          console.log(nbreclick);
          if (nbreclick > 0 && nbreclick < nbreurl) {
            let newurl = listurl[nbreclick];
            console.log(newurl);
            console.log(obj2);
            Object.defineProperty(obj2, "configuration", {
              enumerable: false,
              configurable: true,
              writable: false,
              value: newurl
            });


            Object.defineProperty(paquetref, "configuration", {
              enumerable: false,
              configurable: true,
              writable: false,
              value: obj2.configuration
            });
            console.log(obj2, obj2.configuration);


            console.log(paquetref);
            newderouler(newurl)
          }
        }

      )

    }

    function derouler(urlcas) {

      let xhr = new XMLHttpRequest();
      xhr.open("GET", urlcas, true);
      xhr.onreadystatechange = function () {
        console.log(xhr.readyState);
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {

          let datas = JSON.parse(xhr.response);
          const cadrillage = document.getElementById("ref");
          console.log(cadrillage);
          cadrillage.innerHTML = "";

          datas.forEach(element => {
            let Deatail = new Detail(element.id, element.type, element.titre, element.contenu, element.img, element.dposition, element.Dependance);
            Deatail.afficher();
          })
        } else if (xhr.readyState < 4) {
          console.log(xhr.readyState);
        } else(console.log("vous avez un pb"));
      }
      xhr.send(null);
    }


    function newderouler(newurl) {

      let xhr = new XMLHttpRequest();
      xhr.open("GET", newurl, true);
      console.log(newurl);

      // Object.defineProperty(obj, 'configuration', {
      //   value: newurl,
      //   writable: false
      // });


      xhr.onreadystatechange = function () {
        console.log(xhr.readyState);
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {

          let datas = JSON.parse(xhr.response);
          const cadrillage = document.getElementById("ref");
          console.log(cadrillage);
          cadrillage.innerHTML = "";

          datas.forEach(element => {
            let Deatail = new Detail(element.id, element.type, element.titre, element.contenu, element.img, element.dposition, element.Dependance);
            Deatail.afficher();
          })
        } else if (xhr.readyState < 4) {
          console.log(xhr.readyState);
        } else(console.log("vous avez un pb"));
      }
      xhr.send(null);
    }

  }
}