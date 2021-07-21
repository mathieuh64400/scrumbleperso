import Controller from "../core/Controller.js";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";



export default class Jeu extends Controller {
  constructor() {
    super();

    let joueurs = this.state.joueurs; //recupération de la liste  des joueurs

    let color1 = "white";
    let color2 = "red";
    let color3 = "blue";
    let color4 = "yellow";
    let color5 = "green";
    let color6 = "orange";
    let color7 = "pink";
    let color8 = "black";
    let color = [color1, color2, color3, color4, color5, color6, color7, color8];
    console.log(color);

    // création des cartes 


    let carteDayli = "http://localhost:3003/carteJeudayli/";
    let carteRevue = "http://localhost:3003/carteJeuRevue/";
    let cartePb = " http://localhost:3003/carteJeuPb/";
    let colorcard = ["blue", "green", "red"];
    console.log(colorcard);


    let idList = ["carteday", "carterev", "cartepb"];
    let backid=["backid1", "backid2", "backid3"];
    console.log(idList);

    let longtab = idList.length;
    let controlCard = [carteDayli, carteRevue, cartePb];

    // creation des cartes:
    for (let h = 0; h < longtab; h++) {
      let minicarte1 = document.getElementById(idList[h]);
      console.log(minicarte1);
      minicarte1.addEventListener("click", createbigcard);

      function createbigcard() {
       
          console.log(minicarte1);
        
        let carte = document.getElementById("carte");
        // carte.style.border="10px solid red";
        carte.addEventListener("click", flipcard);
        console.log(carte);
        let front = document.createElement("div");
        front.classList.add("front");
        front.style.backgroundColor = colorcard[h];
        console.log(colorcard[h], front);
       let back = document.createElement("div");
        console.log(back);
        if (front.style.backgroundColor == colorcard[h]) {
 
          back.classList.add("back");
          back.id = backid[h];
          back.style.border = "5px solid " + colorcard[h];
          back.style.color = "black";
          let titre = document.createElement('h3');
          let paragraphe = document.createElement('p');
          let croix = document.createElement('p');
          croix.innerText = "+";
          croix.id = "interet1";
          croix.classList.add("croix1");

          if(back.id=="backid1"){
             let urlfetch= controlCard[0]
          
          //  for (let i = 1; i < 11; i++) { 
            fetch(urlfetch + 5)
            .then(res => res.json())
            .then(data => {
                titre.innerText = `${data.titre}`;
                paragraphe.innerText = `${data.contenu}`;
              }

            );
            paragraphe.style.fontSize="0.9em";
          back.appendChild(titre);
          back.appendChild(paragraphe);
          back.appendChild(croix);
        // }
          }else if (back.id=="backid2") {
            let urlfetch= controlCard[1];
          
          //  for (let i = 1; i < 11; i++) { 
            fetch(urlfetch + 2)
            .then(res => res.json())
            .then(data => {
                titre.innerText = `${data.titre}`;
                paragraphe.innerText = `${data.contenu}`;
              }

            );
            paragraphe.style.fontSize="0.9em";
          back.appendChild(titre);
          back.appendChild(paragraphe);
          back.appendChild(croix);
            
          } else if(back.id=="backid3") {
            let urlfetch= controlCard[2]
          
          //  for (let i = 1; i < 11; i++) { 
            fetch(urlfetch + 3)
            .then(res => res.json())
            .then(data => {
                titre.innerText = `${data.titre}`;
                paragraphe.innerText = `${data.contenu}`;
              }

            );
            paragraphe.style.fontSize="0.9em";
          back.appendChild(titre);
          back.appendChild(paragraphe);
          back.appendChild(croix);
            
          }
         
        };
        carte.appendChild(front);
        carte.appendChild(back);


        let croixclick = document.getElementById("interet1");
        console.log(croixclick);
        croixclick.addEventListener("click", validate);

        function validate() {
          console.log("x");
          croixclick.innerHTML = `<span class=cercle> \ud83d\udc4d </span>`;
          setTimeout(function () {
            let carte = document.getElementById("carte");
            console.log(carte);

            // carte validée
            let carteaurebus = document.getElementById("carterebu");
            console.log("xx:", carteaurebus);
            let frontrejet = document.createElement("div");
            frontrejet.classList.add("front");

            if (front.style.backgroundColor == "blue") {
              frontrejet.style.backgroundColor = colorcard[h];
            } else if (front.style.backgroundColor == "green") {
              frontrejet.style.backgroundColor = colorcard[h];
            } else if (front.style.backgroundColor == "red") {
              frontrejet.style.backgroundColor = colorcard[h];
            }
            carteaurebus.appendChild(frontrejet);
            carte.innerHTML = "";
            carte.classList.remove("active");

          }, 3000)

        }

        // } 

        // loadCharacters();
        //     console.log(carte);
      }

      function flipcard() {
        carte.classList.add("active");
      }
    }
    // }
    // creation des joueurs et des dés.

    console.log(joueurs.statut);
    console.log(joueurs);
    let nomJoueur = this.state.joueurs.name;
    console.log("Hic");
    //console.log(typeof joueurs); //verification du type de donnée récupérer
    //console.log(this.state.joueurs.length); //récupération de la longueur de la liste de joueurs
    let nbrejoeur = joueurs.length - 2; //récupération de la longueur de la liste de joueurs de type developpeurs

    //    création du dé:
    let eltref = document.getElementById("ref");
    eltref.style.display = "flex";
    eltref.style.flexDirection = "row";


    for (let i = 0; i < nbrejoeur; i++) {

      let overlay = document.createElement("a");
      overlay.setAttribute("href", "#");
      overlay.style.marginRight = "5%";
      overlay.classList.add("die-overlay");
      let list = document.createElement("ol");
      list.classList.add("die-list");
      list.classList.add("even-roll");
      list.setAttribute("data-roll", "");
      list.setAttribute("data-level", i + 1);
      list.innerHTML = `
           <li class="die-item" data-side="1">
          <span class="dot"></span>
        </li>
        <li class="die-item" data-side="2">
          <span class="dot"></span>
          <span class="dot"></span>
        </li>
        <li class="die-item" data-side="3">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </li>
        <li class="die-item" data-side="4">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </li>
        <li class="die-item" data-side="5">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </li>
        <li class="die-item" data-side="6">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </li>;`

      list.id = "die-" + i;
      console.log(list.id);
      overlay.appendChild(list);
      eltref.append(overlay);


      let cube1 = document.getElementById("die-0");
      let cube2 = document.getElementById("die-1");
      let cube3 = document.getElementById("die-2");
      let cube4 = document.getElementById("die-3");
      let cube5 = document.getElementById("die-4");
      let cube6 = document.getElementById("die-5");
      let cube7 = document.getElementById("die-6");
      let cube8 = document.getElementById("die-7");

      let cube = [cube1, cube2, cube3, cube4, cube5, cube6, cube7, cube8];
      console.log(cube[0]);

      if (cube[i] != "") {
        console.log(cube[i]);
        let face = cube[i].querySelectorAll("li.die-item");
        console.log(face);
        for (var j = 0; j < face.length; j++) {

          console.log(face[1]);
          face[j].style.background = color[i];
          console.log(face[j].style.background, color[i]);
        }
      }

    }


    let dice = [...document.querySelectorAll(".die-overlay")];


    //console.log(dice);
    dice.forEach(De => { //boucle sur chaque div auquel on applique un evenement click qui lance la fonction selectionner
      De.addEventListener('click', (e) => rollDice(e, De));

    });
    //console.log(nbrejoeur);
    let nmbredejoeur = document.getElementById("nmbredejoeur");
    let list = document.getElementById("listJoueur");
    console.log(list);
    nmbredejoeur.style.fontSize = "1.1em";
    //selection balise ou id = nmbredejoeur
    let nameJoueur = document.getElementById("nameJoeur"); //selection balise ou id = namedejoeur
    let myarray = {};
    let listimage = ["url('../../assets/img/atomium.png')", "url('../../assets/img/chichen-itza.png')", "url('../../assets/img/egyptian.png')", "url('../../assets/img/eiffel-tower.png')", "url('../../assets/img/giza.png')", "url('../../assets/img/statue-of-liberty.png')", "url('../../assets/img/torii-gate.png')", "url('../../assets/img/pisa.png')"];
    console.log(listimage.length);
    let text = ""; //definition d'une varaible qui posséde le texte (nom des joueurs) comme valeur donc initialement est vide
    //let nameDev = "";definition d'une variable avec le role identique que la variable text mais servant dans le cas du Dé;

    if (joueurs.length >= 3) { //possibilité de jouer si le il y  a au minimun 3 membres choisis
      if (joueurs != "") { //si la liste des joeurs  existe
        let developpeurs = joueurs.filter((e) => e.statut === 'Developpeur')
        console.log('deve', developpeurs)
        for (let i = 0; i < developpeurs.length; ++i) {

          const syscolor = document.createElement("div");
          syscolor.classList.add("cercles");
          syscolor.style.background = color[i];
          syscolor.setAttribute("draggable", "true");
          syscolor.classList.add("itemGame");


// ////////////////////////////////////////////////////////////////
          let backapion = document.getElementById("backapion");
          backapion.style.display = "flex";
          backapion.style.flexDirection = "row";
          console.log(backapion);
          let pion = document.createElement('div');
          pion.classList.add("pion");

          const label = document.createElement("span");
          label.style.marginTop = "2%";
          label.style.marginRight = "1%";
          label.innerHTML = developpeurs[i].name;
          label.style.color = color[i];
          console.log(developpeurs[0]);
          // pion
          pion.style.backgroundColor = label.style.color;
          console.log(pion);
          pion.style.backgroundImage = listimage[i];
          console.log(pion.style.backgroundImage, listimage[i]);
          // fin pion

          // la variable text est rempli par l'iteration de noms des joueurs
          console.log(developpeurs[i].name, "....", text);
          // nameJoueur.innerHTML =  text ;
          backapion.append(pion);
          nameJoueur.append(label);

          list.append(syscolor);
          console.log(syscolor);

          nameJoueur.classList.add("repartition");
          nameJoueur.style.width = "100%";



          // creation du drage and drop sur accordeon
          const zonejoueur= document.querySelectorAll('.cadrebox');
          const itemGame=document.querySelectorAll('.itemGame');
          console.log(zonejoueur,itemGame);
          let draggedItem = null;
          itemGame.forEach(element => {
            // const item = element[i];
            // console.log(element[i])
             element.addEventListener('dragstart', function (e) { // sur chaque carte on effectue un evement d'activation du déplacement
                 console.log('dragstart', e);
                 draggedItem = element; // 1 elt deplacé = un item
                 setTimeout(function () {
                     element.style.display = "none"; // chaque item n'a pas de style display particulier
                 }, 0)

             })
             element.addEventListener('dragend', function () { // sur chaque carte on effectue un evement de fin du déplacement
               console.log('dragend');
               setTimeout(function (e) {
                   draggedItem.style.display = "block"; // chaque item déplacé a style display particulier block
                  //  draggedItem = null;
               }, 0)
           })
           zonejoueur.forEach(zone=>{
            zone.addEventListener('dragover', function (e) {
              e.preventDefault();
          });
          zone.addEventListener('dragenter', function (e) {
              e.preventDefault();
          });
          zone.addEventListener('drop', function (){
          //  e.preventDefault();
              zone.append(draggedItem);
          });
           })
        //    for (let j = 0; j < zonejoueur.length; j++) { // chaque item déplacé a style display particulier block
        //      const listZoneJ = zonejoueur[j];
           

        //  }
          });
          // for (let i = 0; i < itemGame.length; i++) { // boucle sur chaque list d'items 
             
          // }
        }
        nmbredejoeur.innerHTML = nbrejoeur; //le nombre de developpeur est affiché comme contenu de la balise nmbrejoeur;
      } else {
        //console.log(nbrejoeur);
        alert("le nombre de developpeur n'est pas au minimun égal à 1! retournez à l'étape 1 pour continuer à joeur")
      }
    } else {
      //console.log(nbrejoeur);
      alert("le nombre de developpeur n'est pas au minimun égal à 1! retournez à l'étape 1 pour continuer à joeur")
    }
    let afficheresult = document.getElementById("#resultatTirage");
    let textDe = "";
    let numberDe;
    let textResult = "";
    let tableauDesRes = [];

    function rollDice(e, elmt) {
      e.preventDefault();
      console.log(elmt);
      // console.log(e);
      let afficheresult = document.getElementById("resultatTirage");
      afficheresult.style.marginTop = "-10%";
      console.log("resultat:", afficheresult, console.log(e.target));
      let result = " ";
      console.log(result);
      // console.log('deve', developpeurs)
      // console.log(elmt);
      const die = elmt.firstElementChild;

      toggleClasses(die);
      console.log(die);
      die.dataset.roll = getRandomNumber(1, 6);

      result = die.dataset.roll;



      setTimeout(function () {
        let listeDe = document.querySelectorAll("ol[data-level]");
        console.log(listeDe);
        let developpeurs = joueurs.filter((e) => e.statut === 'Developpeur')
        console.log('deve', developpeurs);
        for (let i = 0; i < developpeurs.length; ++i) {


          console.log(numberDe);
          let listDice = listeDe.forEach(Res => {
            tableauDesRes = [Res.dataset.roll];
            console.log("resultat dans tableau sont" + developpeurs[i].name + tableauDesRes);
          });
          console.log(listeDe);
          console.log("le array du resultat" + tableauDesRes);
          myarray[developpeurs[i].name] = tableauDesRes;
          console.log("le array du resultat" + myarray[developpeurs[i].name]);

        }
        afficheresult.innerHTML = "Votre dé a pour resultat:" + result;

      }, 1000);



    }

    function toggleClasses(die) {
      die.classList.toggle("odd-roll");
      die.classList.toggle("even-roll");
    }

    function getRandomNumber(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    // creation objet avec resultat



    // creation de la méthode pour créer le plateau de jeu
    console.log("cela marche?");

    function plateaudeJeu() {
      const chart = am4core.create("chartdiv", am4charts.PieChart);
      chart.tooltip.getFillFromObject = false;
      chart.tooltip.background.fill = am4core.color("#67b7dc");
      chart.tooltip.label.maxWidth = 5;
      chart.tooltip.label.wrap = true;

      //    chart.tooltip.pointerOrientation="down";
      console.log(chart, "cela marche!!!!!");

      chart.innerRadius = am4core.percent(38);
      chart.data = [{
          case: "1",
          case2: "1",
          case3: "1",
          taille: "2",
          taille2: "2",
          taille3: "2",
          taille4: "20",
          taille5: "10.44",
          text5: "Jour1",
          text4: "DETTE INEXISTANTE X3",
          text3: "0",
          text2: "50",
          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#B1F0B0"),
          color4: am4core.color("#8DEB8B"),
          color5: am4core.color("#7E7D7F"),
        },
        {
          case: "2",
          case2: "2",
          case3: "2",
          taille2: "2",
          taille: "2",
          taille3: "2",
          taille4: "20",
          taille5: "10.44",
          text5: "Jour2",
          text4: "DETTE FAIBLE X4",
          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#B1F0B0"),
          color4: am4core.color("#A0E98B"),
          color5: am4core.color("#7E7D7F"),
        },
        {
          case: "3",
          case2: "3",
          case3: "3",
          taille2: "2",
          taille: "2",
          taille3: "2",
          taille4: "20",
          taille5: "10.44",
          text5: "Jour3",
          text4: "DETTE MOYENNE X5",
          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#B1F0B0"),
          color4: am4core.color("#CEBB8B"),
          color5: am4core.color("#7E7D7F"),
        },
        {
          case: "4",
          case2: "4",
          case3: "4",
          taille2: "2",
          taille: "2",
          taille3: "2",
          taille4: "20",
          taille5: "10.44",
          text5: "Jour4",
          text4: "DETTE IMPORTANTE X9",
          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#B1F0B0"),
          color4: am4core.color("#E8A18B"),
          color5: am4core.color("#7E7D7F"),
        },
        {
          case: "5",
          case2: "5",
          case3: "5",
          taille2: "2",
          taille: "2",
          taille3: "2",
          taille4: "20",
          taille5: "10.44",
          text5: "Jour5",
          text4: "DETTE INSURMONTABLE X12",
          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#B8EEB0"),
          color4: am4core.color("#F9918C"),
          color5: am4core.color("#7E7D7F"),
        },
        {
          case: "6",
          case3: "6",
          taille2: "2",
          taille: "2",
          taille3: "2",
          taille5: "10.44",
          text5: "Jour6",
          text3: "5",
          text2: "55",
          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#B8EEB0"),
          color5: am4core.color("#7E7D7F"),
        },
        {
          case: "7",
          case3: "7",
          taille2: "2",
          taille: "2",
          taille3: "2",
          taille5: "10.44",
          text5: "Jour7",
          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#B8EEB0"),
          color5: am4core.color("#7E7D7F"),
        },
        {
          case: "8",
          case3: "8",
          taille2: "2",
          taille: "2",
          taille3: "2",
          taille5: "10.44",
          text5: "Jour8",
          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#B8EEB0"),
          color5: am4core.color("#7E7D7F"),
        },
        {
          case: "9",
          case3: "9",
          taille2: "2",
          taille: "2",
          taille3: "2",
          taille5: "10.44",
          text5: "Jour9",
          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#B8EEB0"),
          color5: am4core.color("#7E7D7F"),
        },
        {
          case: "10",
          case3: "10",
          taille2: "2",
          taille: "2",
          taille3: "2",
          taille5: "2",
          text5: "*",
          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#B8EEB0"),
          color5: am4core.color("#7E7D7F"),
        },
        {
          case: "11",
          case3: "11",
          taille2: "2",
          taille: "2",
          taille3: "2",
          taille5: "2",
          text5: "*",
          text3: "10",
          text2: "60",
          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#C2E5B0"),
          color5: am4core.color("#7E7D7F"),
        },
        {
          case: "12",
          case3: "12",
          taille2: "2",
          taille: "2",
          taille3: "2",
          taille5: "2",
          text5: "*",
          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#C2E5B0"),
          color5: am4core.color("#7E7D7F"),
        },
        {
          case: "13",
          taille2: "2",
          taille: "2",
          taille3: "2",

          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#C2E5B0"),
        },
        {
          case: "14",
          taille2: "2",
          taille: "2",
          taille3: "2",

          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#C2E5B0"),
        },
        {
          case: "15",
          taille2: "2",
          taille: "2",
          taille3: "2",

          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#C2E5B0"),
        },
        {
          case: "16",
          taille2: "2",
          taille: "2",
          taille3: "2",
          text3: "15",
          text2: "65",

          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#CDD9AF"),
        },
        {
          case: "17",
          taille2: "2",
          taille: "2",
          taille3: "2",

          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#CDD9AF"),
        },
        {
          case: "18",
          taille2: "2",
          taille: "2",
          taille3: "2",

          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#CDD9AF"),
        },
        {
          case: "19",
          taille2: "2",
          taille: "2",
          taille3: "2",

          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#CDD9AF"),
        },
        {
          case: "20",
          taille2: "2",
          taille: "2",
          taille3: "2",

          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#CDD9AF"),
        },
        {
          case: "21",
          taille2: "2",
          taille: "2",
          taille3: "2",
          text3: "20",
          text2: "70",

          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#CDD9AF"),
        },
        {
          case: "22",
          taille2: "2",
          taille: "2",
          taille3: "2",

          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#CDD9AF"),
        },
        {
          case: "23",
          taille2: "2",
          taille: "2",
          taille3: "2",

          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#CDD9AF"),
        },
        {
          case: "24",
          taille2: "2",
          taille: "2",
          taille3: "2",

          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#CDD9AF"),
        },
        {
          case: "25",
          taille2: "2",
          taille: "2",
          taille3: "2",

          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#CDD9AF"),
        },
        {
          case: "26",
          taille: "2",
          taille2: "2",
          taille2: "2",
          taille3: "2",
          text3: "25",
          text2: "75",

          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#D8CFB0"),
        },
        {
          case: "27",
          taille2: "2",
          taille: "2",
          taille3: "2",

          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#D8CFB0"),
        },
        {
          case: "28",
          taille2: "2",
          taille: "2",
          taille3: "2",
          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#D8CFB0"),
        },
        {
          case: "29",
          taille2: "2",
          taille: "2",
          taille3: "2",

          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#D8CFB0"),
        },
        {
          case: "30",
          taille2: "2",
          taille: "2",
          taille3: "2",

          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#D8CFB0"),
        },
        {
          case: "31",
          taille2: "2",
          taille: "2",
          taille3: "2",
          text3: "30",
          text2: "80",

          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#E2C5B0"),
        },
        {
          case: "32",
          taille2: "2",
          taille: "2",
          taille3: "2",

          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#E2C5B0"),
        },
        {
          case: "33",
          taille2: "2",
          taille: "2",
          taille3: "2",

          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#E2C5B0"),
        },
        {
          case: "34",
          taille2: "2",
          taille: "2",
          taille3: "2",

          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#E2C5B0"),
        },
        {
          case: "35",
          taille2: "2",
          taille: "2",
          taille3: "2",
          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#ECBBB0"),
        },
        {
          case: "36",
          taille2: "2",
          taille: "2",
          taille3: "2",
          text3: "35",
          text2: "85",
          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#ECBBB0"),
        },
        {
          case: "37",
          taille2: "2",
          taille: "2",
          taille3: "2",
          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#ECBBB0"),
        },
        {
          case: "38",
          taille2: "2",
          taille: "2",
          taille3: "2",

          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#ECBBB0"),
        },
        {
          case: "39",
          taille2: "2",
          taille: "2",
          taille3: "2",

          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#ECBBB0"),
        },
        {
          case: "40",
          taille2: "2",
          taille: "2",
          taille3: "2",

          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#ECBBB0"),
        },
        {
          case: "41",
          taille2: "2",
          taille: "2",
          taille3: "2",
          text3: "40",
          text2: "90",

          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#ECBBB0"),
        },
        {
          case: "42",
          taille2: "2",
          taille: "2",
          taille3: "2",

          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#ECBBB0"),
        },
        {
          case: "43",
          taille2: "2",
          taille: "2",
          taille3: "2",

          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#F4B3B0"),
        },
        {
          case: "44",
          taille2: "2",
          taille: "2",
          taille3: "2",

          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#F4B3B0"),
        },
        {
          case: "45",
          taille2: "2",
          taille: "2",
          taille3: "2",

          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#F4B3B0"),
        },
        {
          case: "46",
          taille2: "2",
          taille: "2",
          taille3: "2",
          text3: "45",
          text2: "95",

          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#F4B3B0"),
        },
        {
          case: "47",
          taille: "2",
          taille2: "2",
          taille3: "2",
          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#F4B3B0"),
        },
        {
          case: "48",
          taille2: "2",
          taille: "2",
          taille3: "2",

          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#F4B3B0"),
        },
        {
          case: "49",
          taille2: "2",
          taille: "2",
          taille3: "2",

          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#F4B3B0"),
        },
        {
          case: "50",
          taille2: "2",
          taille: "2",
          taille3: "2",

          color: am4core.color("#FDD75D"),
          color2: am4core.color("#FDD75D"),
          color3: am4core.color("#F4B3B0"),
        },
      ];

      // Ajout du niveau Jour
      const pieSeries5 = chart.series.push(new am4charts.PieSeries());
      pieSeries5.dataFields.value = "taille5";
      pieSeries5.dataFields.category = "case3";

      pieSeries5.slices.template.stroke = am4core.color("#2B2D31");
      pieSeries5.slices.template.strokeWidth = 2;
      pieSeries5.slices.template.strokeOpacity = 1;
      pieSeries5.slices.template.propertyFields.fill = "color5";
      // pieSeries5.labels.template.disabled = true;
      pieSeries5.ticks.template.disabled = true;
      pieSeries5.slices.template.tooltipText = "";
      // pieSeries5.tooltip.pointerOrientation = "down";
      const hs5 = pieSeries5.slices.template.states.getKey("hover");
      hs5.properties.scale = 1;
      const as5 = pieSeries5.slices.template.states.getKey("active");
      as5.properties.shiftRadius = 0;
      pieSeries5.slices.template.cursorOverStyle = am4core.MouseCursorStyle.pointer;


      pieSeries5.alignLabels = false;




      pieSeries5.labels.template.radius = am4core.percent(-20.5);
      pieSeries5.labels.template.fill = am4core.color("white");
      pieSeries5.labels.template.relativeRotation = 0;

      pieSeries5.labels.template.text = "{text5}";

      // Ajout du 4 niveau:
      const pieSeries4 = chart.series.push(new am4charts.PieSeries());
      pieSeries4.dataFields.value = "taille4";
      pieSeries4.dataFields.category = "case2";
      pieSeries4.slices.template.stroke = am4core.color("#2B2D31");
      pieSeries4.slices.template.strokeWidth = 2;
      pieSeries4.slices.template.strokeOpacity = 1;
      pieSeries4.slices.template.propertyFields.fill = "color4";

      pieSeries4.ticks.template.disabled = true;
      pieSeries4.slices.template.tooltipText = "";
      const hs4 = pieSeries4.slices.template.states.getKey("hover");
      hs4.properties.scale = 1;
      const as4 = pieSeries4.slices.template.states.getKey("active");
      as4.properties.shiftRadius = 0;
      // pieSeries4.slices.template.tooltipText = "{category}: Y";
      pieSeries4.labels.template.bent = true;
      pieSeries4.labels.template.text = "{text4}";
      // pieSeries4.labels.template.color="black";
      pieSeries4.labels.template.fontSize = "0.75em";
      pieSeries4.labels.template.maxBottom = "5%";
      pieSeries4.alignLabels = false;
      pieSeries4.labels.template.radius = am4core.percent(-13.5);
      pieSeries4.labels.template.fill = am4core.color("white");
      pieSeries4.labels.template.relativeRotation = 0;
      // Ajout du troisième niveau:

      const pieSeries3 = chart.series.push(new am4charts.PieSeries());
      pieSeries3.dataFields.value = "taille3";
      pieSeries3.dataFields.category = "case";
      pieSeries3.slices.template.stroke = am4core.color("#2B2D31");
      pieSeries3.slices.template.strokeWidth = 2;
      pieSeries3.slices.template.strokeOpacity = 1;
      pieSeries3.slices.template.propertyFields.fill = "color3";

      pieSeries3.ticks.template.disabled = true;
      const hs3 = pieSeries3.slices.template.states.getKey("hover");
      hs3.properties.scale = 1;
      const as3 = pieSeries3.slices.template.states.getKey("active");
      as3.properties.shiftRadius = 0;
      pieSeries3.slices.template.tooltipText = "";
      pieSeries3.labels.template.bent = true;
      pieSeries3.labels.template.text = "{text3}";
      pieSeries3.alignLabels = false;
      pieSeries3.labels.template.radius = am4core.percent(-10.5);
      pieSeries3.labels.template.textAlign = "center";
      pieSeries3.labels.template.fill = am4core.color("white");
      pieSeries3.labels.template.relativeRotation = 0;
      // Ajout d'un second cercle  qui est le plus bas

      const pieSeries2 = chart.series.push(new am4charts.PieSeries());
      pieSeries2.dataFields.value = "taille2";
      pieSeries2.dataFields.category = "case";
      pieSeries2.slices.template.stroke = am4core.color("#2B2D31");
      pieSeries2.slices.template.strokeWidth = 2;
      pieSeries2.slices.template.strokeOpacity = 1;
      pieSeries2.slices.template.propertyFields.fill = "color2";
      pieSeries2.ticks.template.disabled = true;
      pieSeries2.slices.template.tooltipText = "";
      const hs2 = pieSeries2.slices.template.states.getKey("hover");
      hs2.properties.scale = 1;
      const as2 = pieSeries2.slices.template.states.getKey("active");
      as2.properties.shiftRadius = 0;
      // pieSeries2.slices.template.tooltipText = "{category}: RER";
      pieSeries2.labels.template.bent = true;
      pieSeries2.labels.template.text = "{text2}";
      pieSeries2.alignLabels = false;
      pieSeries2.labels.template.radius = am4core.percent(-9.5);
      pieSeries2.labels.template.textAlign = "left";
      pieSeries2.labels.template.fill = am4core.color("white");
      pieSeries2.labels.template.relativeRotation = 0;

      // premier cercle qui est le plus haut

      const pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "taille";
      pieSeries.dataFields.category = "case";
      pieSeries.slices.template.tooltipText = "";
      pieSeries.slices.template.stroke = am4core.color("#2B2D31");
      pieSeries.slices.template.strokeWidth = 2;
      pieSeries.slices.template.strokeOpacity = 1;
      pieSeries.slices.template.propertyFields.fill = "color";
      pieSeries.tooltip.pointerOrientation = "vertical";
      pieSeries.slices.template.cursorOverStyle = am4core.MouseCursorStyle.pointer; //cursor sous forme de main
      pieSeries.ticks.template.disabled = true;
      pieSeries.alignLabels = false;
      pieSeries.labels.template.text = "{text3}";
      pieSeries.labels.template.radius = am4core.percent(-9.5);
      pieSeries.labels.template.textAlign = "left";
      pieSeries.labels.template.fill = am4core.color("white");
      pieSeries.labels.template.relativeRotation = 0;

      ////////////////////  tooltip //////

      let USERSTORIES =
        "En tant que commerçant, je veux ajouter et éditer de nouveaux produits dans ma boutique.<br><br> &#x2605; &#x2605; &#x2605; &#x2605; &#x2605; ";

      pieSeries.ticks.template.disabled = true; //elimine le fait que les tooltip sont invisibles
      pieSeries.tooltip.label.maxWidth = 210; //taille du tootip
      pieSeries.tooltip.label.wrap = true; //contenu du tootip va a la ligne
      pieSeries.slices.template.tooltipHTML = ""; //tooltip

      const hs = pieSeries.slices.template.states.getKey("hover");
      hs.properties.scale = 1;
      // const as = pieSeries.slices.template.states.getKey("active");
      // as.properties.shiftRadius = 0;

      ///////////////////////Element Central/////////////////////:::

      var label = pieSeries.createChild(am4core.Label);

      label.html =
        "<div style='text-align:center; font-size=1em;'> Are you Ready to <br> <strong>SCRUMBLE</strong><br>  Réseau Pyxis / Fabrique Numerique Paloise</div>";
      label.isMeasured = false;
      label.x = am4core.percent(75);
      label.horizontalCenter = "middle";
      label.verticalCenter = "middle";
      label.marginLeft = "-33%";
      label.align = "center";
      label.isMeasured = false;

      label.fontSize = "1.25em";
      label.wrap = true;
      label.config = {
        fill: "white",
      };



      // Add slice click event
      var currentSlice;
      pieSeries.slices.template.events.on("hit", function (ev) {
        // active l'ecouteur d'evenement grace a  on et l'event d'eclanche click grace a hit
        if (currentSlice) {
          currentSlice.tooltip.hide(); //
        }
        currentSlice = ev.target;
        currentSlice.tooltipHTML = USERSTORIES;
        console.log(current.slice);
        currentSlice.showTooltip();
      });

      // Set up page click event to close open tooltip
      am4core.getInteraction().body.events.on("hit", function () {
        if (currentSlice) {
          currentSlice.tooltip.hide();
          console.log(currentSlice);
        }
      });
      // add click listener

      console.log(chart.series.values);

      // pieSeries.slices.template.events.on("hit", function(ev) {
      //     var series = ev.target.dataItem.component;
      //     series.slices.each(function(item) {
      //       if (item.isActive && item != ev.target) {
      //         item.isActive = false;
      //         console.log(item);
      //       }
      //     })
      //   });

      chart.hiddenState.properties.innerRadius = am4core.percent(0);
      chart.hiddenState.properties.radius = am4core.percent(250);

      pieSeries.slices.template.events.on("hit", function (ev) {
        console.log(ev.target.dataItem.value);
      });

      chart.series.values.forEach((pie) => {
        pie.slices.template.events.on(
          "hit",
          function (ev) {
            console.log(pie);
            console.log(ev);
            let xx = document.querySelector(ev.target.id);
            // xx.addEventListener("click",alert('Alors cela marche'));

            console.log(xx);
            console.log(
              "cloneId" + "  " + ev.target.cloneId,
              "clone_uid:" + ev.target.uid
            );
          },
          this
        );
        console.log(this);
      });
      //console.log(chart.series.template.dataItems.template.uid);
    }



    plateaudeJeu();
  }



}