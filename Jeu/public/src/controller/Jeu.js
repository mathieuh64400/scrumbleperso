import Controller from "../core/Controller.js";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";


export default class Jeu extends Controller {
    constructor() {
        super();
        let joueurs = this.state.joueurs; //recupération de la liste  des joueurs
        console.log(joueurs);
        let nomJoueur = this.state.joueurs.name;
        console.log("Hic"); 
       
        

        //console.log(typeof joueurs); //verification du type de donnée récupérer
        //console.log(this.state.joueurs.length); //récupération de la longueur de la liste de joueurs
        let nbrejoeur = joueurs.length - 2; //récupération de la longueur de la liste de joueurs de type developpeurs
        if (joueurs.length >= 3) { //possibilité de jouer si le il y  a au minimun 3 membres choisis
            //console.log(nbrejoeur);
            let nmbredejoeur = document.getElementById("nmbredejoeur"); //selection balise ou id = nmbredejoeur
            let nameJoueur = document.getElementById("nameJoeur"); //selection balise ou id = namedejoeur
            let text = ""; //definition d'une varaible qui posséde le texte (nom des joueurs) comme valeur donc initialement est vide
            if (joueurs != "") { //si la liste des joeurs type developpeurs existe
                if (joueurs.statut != "Responsabilite") { //si le statut de ces joeurs  est différents du  type responsabilité
                    for (const joueur of joueurs) { // pour tout les joueur parmi la liste des joueurs
                        //console.log(joueur.statut); // recup du statut
                        //console.log(joueur.name); // recup du nom des joueurs pour chaque joueurs

                        if (joueur.statut == "Developpeur") { //si le statut du joeur est type developpeur uniquement
                            text += " " + joueur.name + ","; // la variable text est rempli par l'iteration dde noms des joueurs
                            //console.log(joueur, joueur.name, joueur.statut);
                            //console.log(joueur.name, typeof (joueur.name));
                            nameJoueur.innerHTML = text; // le contenu de la balise nameJoeur est à pour valeur text soit le nom des joueurs
                           
                        }
                    }
                }
                //console.log(nameJoeur);
                //console.log(".........................................................................................");

                ////////console.log(nmbredejoeur);
                nmbredejoeur.innerHTML = nbrejoeur; //le nombre de developpeur est affiché comme contenu de la balise nmbrejoeur;
            } else {
                //console.log(nbrejoeur);
                alert("le nombre de developpeur n'est pas au minimun égal à 1! retournez à l'étape 1 pour continuer à joeur")
            }
        }
        //    création du dé:
        let eltref = document.getElementById("ref");

        //console.log(eltref);

        for (let i = 0; i < nbrejoeur; i++) {

            let overlay = document.createElement("a");
            overlay.setAttribute("href", "#")
            overlay.classList.add("die-overlay");
            let list = document.createElement("ol");
            list.classList.add("die-list");
            list.classList.add("even-roll");


            list.setAttribute("data-roll", "");
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
            //console.log(i);
            list.id = "die-" + i;

            overlay.appendChild(list);
            eltref.append(overlay);


        }
        
        let dice = [...document.querySelectorAll(".die-overlay")];
        
        
        //console.log(dice);
        dice.forEach(De => { //boucle sur chaque div auquel on applique un evenement click qui lance la fonction selectionner
            De.addEventListener('click', (e) => rollDice(e, De));
            
        });
        
        let x = this.state.joueurs; console.log(x);

        function rollDice(e, elmt) {
            e.preventDefault();
            
            console.log(e);
            let afficheresult = document.getElementById("resultatTirage");
            console.log("resultat:", afficheresult, console.log(e.target));
            let result = " ";

            console.log(elmt);
            const die = elmt.firstElementChild;

            toggleClasses(die);
            console.log(die);
            die.dataset.roll = getRandomNumber(1, 6);
            result += [die.dataset.roll] ;
            console.log(result);
           
           
            let myArray = {};
            for (let i = 0; i < nbrejoeur; i++) {
                console.log("die-" + i);
                for (const name of x) {
                    console.log(name.name);
                    console.log(nbrejoeur);
                    console.log(name.statut);
                    if (name.statut == "Developpeur") {
                        myArray[name.name] = "die-" + i;
                        console.log(myArray);
                    }
                }
            }
            setTimeout(function () {
             
                afficheresult.innerHTML = "le tirage est le suivant pour Joeur"+"XXX"+" "+ ":"+" " + result;
            }, 1000); 

            
            
        }
        // let x = this.state.joueurs; console.log(x);
        // function findPlayer() {
         
        // }
       
          


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
            chart.tooltip.label.fontSize = 20;
            chart.tooltip.label.textAlign = "middle";
            chart.tooltip.label.maxWidth = 5;
            chart.tooltip.label.wrap = true;
            //    chart.tooltip.pointerOrientation="down";
            console.log(chart, "cela marche!!!!!");

            chart.innerRadius = am4core.percent(30);
            chart.data = [{
                "case": "1",
                "case2": "1",
                "case3": "1",
                "taille": "2",
                "taille2": "2",
                "taille3": "2",
                "taille4": "20",
                "taille5": "10.44",
                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#B1F0B0"),
                "color4": am4core.color("#8DEB8B"),
                "color5": am4core.color("#7E7D7F")

            }, {
                "case": "2",
                "case2": "2",
                "case3": "2",
                "taille2": "2",
                "taille": "2",
                "taille3": "2",
                "taille4": "20",
                "taille5": "10.44",
                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#B1F0B0"),
                "color4": am4core.color("#A0E98B"),
                "color5": am4core.color("#7E7D7F")
            }, {
                "case": "3",
                "case2": "3",
                "case3": "3",
                "taille2": "2",
                "taille": "2",
                "taille3": "2",
                "taille4": "20",
                "taille5": "10.44",
                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#B1F0B0"),
                "color4": am4core.color("#CEBB8B"),
                "color5": am4core.color("#7E7D7F")
            }, {
                "case": "4",
                "case2": "4",
                "case3": "4",
                "taille2": "2",
                "taille": "2",
                "taille3": "2",
                "taille4": "20",
                "taille5": "10.44",
                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#B1F0B0"),
                "color4": am4core.color("#E8A18B"),
                "color5": am4core.color("#7E7D7F"),
            }, {
                "case": "5",
                "case2": "5",
                "case3": "5",
                "taille2": "2",
                "taille": "2",
                "taille3": "2",
                "taille4": "20",
                "taille5": "10.44",
                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#B8EEB0"),
                "color4": am4core.color("#F9918C"),
                "color5": am4core.color("#7E7D7F"),
            }, {
                "case": "6",
                "case3": "6",
                "taille2": "2",
                "taille": "2",
                "taille3": "2",
                "taille5": "10.44",
                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#B8EEB0"),
                "color5": am4core.color("#7E7D7F"),
            }, {
                "case": "7",
                "case3": "7",
                "taille2": "2",
                "taille": "2",
                "taille3": "2",
                "taille5": "10.44",
                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#B8EEB0"),
                "color5": am4core.color("#7E7D7F"),
            }, {
                "case": "8",
                "case3": "8",
                "taille2": "2",
                "taille": "2",
                "taille3": "2",
                "taille5": "10.44",
                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#B8EEB0"),
                "color5": am4core.color("#7E7D7F"),
            }, {
                "case": "9",
                "case3": "9",
                "taille2": "2",
                "taille": "2",
                "taille3": "2",
                "taille5": "10.44",
                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#B8EEB0"),
                "color5": am4core.color("#7E7D7F"),
            }, {
                "case": "10",
                "case3": "10",
                "taille2": "2",
                "taille": "2",
                "taille3": "2",
                "taille5": "2",
                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#B8EEB0"),
                "color5": am4core.color("#7E7D7F"),
            }, {
                "case": "11",
                "case3": "11",
                "taille2": "2",
                "taille": "2",
                "taille3": "2",
                "taille5": "2",
                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#C2E5B0"),
                "color5": am4core.color("#7E7D7F"),
            }, {
                "case": "12",
                "case3": "12",
                "taille2": "2",
                "taille": "2",
                "taille3": "2",
                "taille5": "2",
                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#C2E5B0"),
                "color5": am4core.color("#7E7D7F"),
            }, {
                "case": "13",
                "taille2": "2",
                "taille": "2",
                "taille3": "2",

                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#C2E5B0")
            }, {
                "case": "14",
                "taille2": "2",
                "taille": "2",
                "taille3": "2",

                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#C2E5B0")
            }, {
                "case": "15",
                "taille2": "2",
                "taille": "2",
                "taille3": "2",

                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#C2E5B0")
            }, {
                "case": "16",
                "taille2": "2",
                "taille": "2",
                "taille3": "2",

                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#CDD9AF")
            }, {
                "case": "17",
                "taille2": "2",
                "taille": "2",
                "taille3": "2",

                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#CDD9AF")
            }, {
                "case": "18",
                "taille2": "2",
                "taille": "2",
                "taille3": "2",

                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#CDD9AF")
            }, {
                "case": "19",
                "taille2": "2",
                "taille": "2",
                "taille3": "2",

                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#CDD9AF")
            }, {
                "case": "20",
                "taille2": "2",
                "taille": "2",
                "taille3": "2",

                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#CDD9AF")
            }, {
                "case": "21",
                "taille2": "2",
                "taille": "2",
                "taille3": "2",

                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#CDD9AF")
            }, {
                "case": "22",
                "taille2": "2",
                "taille": "2",
                "taille3": "2",

                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#CDD9AF")
            }, {
                "case": "23",
                "taille2": "2",
                "taille": "2",
                "taille3": "2",

                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#CDD9AF")
            }, {
                "case": "24",
                "taille2": "2",
                "taille": "2",
                "taille3": "2",

                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#CDD9AF")
            }, {
                "case": "25",
                "taille2": "2",
                "taille": "2",
                "taille3": "2",

                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#CDD9AF")
            }, {
                "case": "26",
                "taille": "2",
                "taille2": "2",
                "taille2": "2",
                "taille3": "2",

                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#D8CFB0")
            }, {
                "case": "27",
                "taille2": "2",
                "taille": "2",
                "taille3": "2",

                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#D8CFB0")
            }, {
                "case": "28",
                "taille2": "2",
                "taille": "2",
                "taille3": "2",
                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#D8CFB0")
            }, {
                "case": "29",
                "taille2": "2",
                "taille": "2",
                "taille3": "2",

                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#D8CFB0")
            }, {
                "case": "30",
                "taille2": "2",
                "taille": "2",
                "taille3": "2",

                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#D8CFB0")
            }, {
                "case": "31",
                "taille2": "2",
                "taille": "2",
                "taille3": "2",

                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#E2C5B0")
            }, {
                "case": "32",
                "taille2": "2",
                "taille": "2",
                "taille3": "2",

                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#E2C5B0")
            }, {
                "case": "33",
                "taille2": "2",
                "taille": "2",
                "taille3": "2",

                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#E2C5B0")
            }, {
                "case": "34",
                "taille2": "2",
                "taille": "2",
                "taille3": "2",

                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#E2C5B0")
            }, {
                "case": "35",
                "taille2": "2",
                "taille": "2",
                "taille3": "2",
                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#ECBBB0")
            }, {
                "case": "36",
                "taille2": "2",
                "taille": "2",
                "taille3": "2",
                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#ECBBB0")
            }, {
                "case": "37",
                "taille2": "2",
                "taille": "2",
                "taille3": "2",
                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#ECBBB0")
            }, {
                "case": "38",
                "taille2": "2",
                "taille": "2",
                "taille3": "2",

                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#ECBBB0")
            }, {
                "case": "39",
                "taille2": "2",
                "taille": "2",
                "taille3": "2",

                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#ECBBB0")
            }, {
                "case": "40",
                "taille2": "2",
                "taille": "2",
                "taille3": "2",

                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#ECBBB0")
            }, {
                "case": "41",
                "taille2": "2",
                "taille": "2",
                "taille3": "2",

                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#ECBBB0")
            }, {
                "case": "42",
                "taille2": "2",
                "taille": "2",
                "taille3": "2",

                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#ECBBB0")
            }, {
                "case": "43",
                "taille2": "2",
                "taille": "2",
                "taille3": "2",

                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#F4B3B0")
            }, {
                "case": "44",
                "taille2": "2",
                "taille": "2",
                "taille3": "2",

                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#F4B3B0")
            }, {
                "case": "45",
                "taille2": "2",
                "taille": "2",
                "taille3": "2",

                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#F4B3B0")
            }, {
                "case": "46",
                "taille2": "2",
                "taille": "2",
                "taille3": "2",

                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#F4B3B0")
            }, {
                "case": "47",
                "taille": "2",
                "taille2": "2",
                "taille3": "2",
                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#F4B3B0")
            }, {
                "case": "48",
                "taille2": "2",
                "taille": "2",
                "taille3": "2",

                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#F4B3B0")
            }, {
                "case": "49",
                "taille2": "2",
                "taille": "2",
                "taille3": "2",

                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#F4B3B0")
            }, {
                "case": "50",
                "taille2": "2",
                "taille": "2",
                "taille3": "2",

                "color": am4core.color("#FDD75D"),
                "color2": am4core.color("#FDD75D"),
                "color3": am4core.color("#F4B3B0")
            }];

            // Ajout du niveau Jour
            const pieSeries5 = chart.series.push(new am4charts.PieSeries());
            pieSeries5.dataFields.value = "taille5";
            pieSeries5.dataFields.category = "case3";
            pieSeries5.slices.template.stroke = am4core.color("#2B2D31");
            pieSeries5.slices.template.strokeWidth = 2;
            pieSeries5.slices.template.strokeOpacity = 1;
            pieSeries5.slices.template.propertyFields.fill = "color5";
            pieSeries5.labels.template.disabled = true;
            pieSeries5.ticks.template.disabled = true;
            pieSeries5.slices.template.tooltipText = "";
            pieSeries5.tooltip.pointerOrientation = "down";
            const hs5 = pieSeries5.slices.template.states.getKey("hover");
            hs5.properties.scale = 1;
            const as5 = pieSeries5.slices.template.states.getKey("active");
            as5.properties.shiftRadius = 0;
            pieSeries5.slices.template.cursorOverStyle = am4core.MouseCursorStyle.pointer;

            pieSeries5.slices.template.tooltipText = "{category}: XXXXX";



            // Ajout du 4 niveau:
            const pieSeries4 = chart.series.push(new am4charts.PieSeries());
            pieSeries4.dataFields.value = "taille4";
            pieSeries4.dataFields.category = "case2";
            pieSeries4.slices.template.stroke = am4core.color("#2B2D31");
            pieSeries4.slices.template.strokeWidth = 2;
            pieSeries4.slices.template.strokeOpacity = 1;
            pieSeries4.slices.template.propertyFields.fill = "color4";
            pieSeries4.labels.template.disabled = true;
            pieSeries4.ticks.template.disabled = true;
            pieSeries4.slices.template.tooltipText = "";
            const hs4 = pieSeries4.slices.template.states.getKey("hover");
            hs4.properties.scale = 1;
            const as4 = pieSeries4.slices.template.states.getKey("active");
            as4.properties.shiftRadius = 0;
            pieSeries4.slices.template.tooltipText = "{category}: Y";

            // Ajout du troisième niveau:
            const pieSeries3 = chart.series.push(new am4charts.PieSeries());
            pieSeries3.dataFields.value = "taille3";
            pieSeries3.dataFields.category = "case";
            pieSeries3.slices.template.stroke = am4core.color("#2B2D31");
            pieSeries3.slices.template.strokeWidth = 2;
            pieSeries3.slices.template.strokeOpacity = 1;
            pieSeries3.slices.template.propertyFields.fill = "color3";
            pieSeries3.labels.template.disabled = true;
            pieSeries3.ticks.template.disabled = true;
            pieSeries3.slices.template.tooltipText = "";
            const hs3 = pieSeries3.slices.template.states.getKey("hover");
            hs3.properties.scale = 1;
            const as3 = pieSeries3.slices.template.states.getKey("active");
            as3.properties.shiftRadius = 0;
            pieSeries3.slices.template.tooltipText = "{category}: ZZ";

            // Ajout d'un second cercle  qui est le plus bas
            const pieSeries2 = chart.series.push(new am4charts.PieSeries());
            pieSeries2.dataFields.value = "taille2";
            pieSeries2.dataFields.category = "case";
            pieSeries2.slices.template.stroke = am4core.color("#2B2D31");
            pieSeries2.slices.template.strokeWidth = 2;
            pieSeries2.slices.template.strokeOpacity = 1;
            pieSeries2.slices.template.propertyFields.fill = "color2";
            pieSeries2.labels.template.disabled = true;
            pieSeries2.ticks.template.disabled = true;
            pieSeries2.slices.template.tooltipText = "";
            const hs2 = pieSeries2.slices.template.states.getKey("hover");
            hs2.properties.scale = 1;
            const as2 = pieSeries2.slices.template.states.getKey("active");
            as2.properties.shiftRadius = 0;
            pieSeries2.slices.template.tooltipText = "{category}: RER";

            // premier cercle qui est le plus haut
            const pieSeries = chart.series.push(new am4charts.PieSeries());
            pieSeries.dataFields.value = "taille";
            pieSeries.dataFields.category = "case";
            pieSeries.slices.template.stroke = am4core.color("#2B2D31");
            pieSeries.slices.template.strokeWidth = 2;
            pieSeries.slices.template.strokeOpacity = 1;
            pieSeries.slices.template.propertyFields.fill = "color";
            pieSeries.tooltip.pointerOrientation = "vertical";
            pieSeries.labels.template.disabled = true;
            pieSeries.ticks.template.disabled = true;
            pieSeries.tooltip.label.maxWidth = 210;
            pieSeries.tooltip.label.wrap = true;
            pieSeries.slices.template.tooltipHTML = "En tant que commerçant, je veux ajouter et éditer de nouveaux produits dans ma boutique.<br><br> &#x2605; &#x2605; &#x2605; &#x2605; &#x2605; ";
            const hs = pieSeries.slices.template.states.getKey("hover");
            hs.properties.scale = 1;
            const as = pieSeries.slices.template.states.getKey("active");
            as.properties.shiftRadius = 0;

            pieSeries.tooltip.pointerOrientation = "vertical";
            console.log(chart.series);

            console.log(chart.series.values);
            chart.series.values.forEach((elt => {
                let y = [];
                let x = elt.slices.template.events.target.uid;
                console.log(x);
            }))
            chart.series.values.forEach((pie) => {
                pie.slices.template.events.on("hit", function (ev) {
                    console.log(pie);
                    console.log(ev);

                    console.log("cloneId" + "  " + ev.target.cloneId, "clone_uid:" + ev.target.uid);
                }, this);
                console.log(this);



            });
            //console.log(chart.series.template.dataItems.template.uid);

        }



        plateaudeJeu();
    }



}