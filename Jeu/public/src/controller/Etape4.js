import Controller from "../core/Controller.js";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

export default class Etape4 extends Controller {
    constructor() {
        super();
        document.title = "Etape4:Tableau Kanban"
        const list_items = document.querySelectorAll('.list-item');
        const lists = document.querySelectorAll('.list');
        let draggedItem = null; // initialisation du mouvement de deplacement des items a  un etat intial

        for (let i = 0; i < list_items.length; i++) { // boucle sur chaque list d'items 
            const item = list_items[i];
            item.addEventListener('dragstart', function (e) { // sur chaque carte on effectue un evement d'activation du déplacement
                console.log('dragstart', e);
                draggedItem = item; // 1 elt deplacé = un item
                setTimeout(function () {
                    item.style.display = "none"; // chaque item n'a pas de style display particulier
                }, 0)

            })

            item.addEventListener('dragend', function () { // sur chaque carte on effectue un evement de fin du déplacement
                console.log('dragend');
                setTimeout(function (e) {
                    draggedItem.style.display = "block"; // chaque item déplacé a style display particulier block
                    draggedItem = null;
                }, 0)
            })
            for (let j = 0; j < lists.length; j++) { // chaque item déplacé a style display particulier block
                const list = lists[j];
                list.addEventListener('dragover', function (e) {
                    e.preventDefault();
                });
                list.addEventListener('dragenter', function (e) {
                    e.preventDefault();
                });
                list.addEventListener('drop', function () {
                    this.append(draggedItem);
                });

            }
        }

    }
    cteatePlateau(){
        const chart = am4core.create("chartdiv", am4charts.PieChart);

// chart.events.on("hit", (e) => {
//     console.log("chart", e);
// })
console.log(chart, "cela marche!!!!!");

chart.innerRadius = am4core.percent(35);
chart.data = [{
        "case": "1",
        "case2": "1",
        "case3":"1",
        "taille": "2",
        "taille2": "2",
        "taille3": "2",
        "taille4": "20",
        "taille5":"10.44",
        "color": am4core.color("#FDD75D"),
        "color2": am4core.color("#FDD75D"),
        "color3": am4core.color("#B1F0B0"),
        "color4": am4core.color("#8DEB8B"),"color5": am4core.color("#7E7D7F")

    }, {
        "case": "2",
        "case2": "2","case3":"2",
        "taille2": "2",
        "taille": "2",
        "taille3": "2",
        "taille4": "20",
        "taille5":"10.44",
        "color": am4core.color("#FDD75D"),
        "color2": am4core.color("#FDD75D"),
        "color3": am4core.color("#B1F0B0"),
        "color4": am4core.color("#A0E98B"),"color5": am4core.color("#7E7D7F")
    }, {
        "case": "3",
        "case2": "3","case3":"3",
        "taille2": "2",
        "taille": "2",
        "taille3": "2",
        "taille4": "20",
        "taille5":"10.44",
        "color": am4core.color("#FDD75D"),
        "color2": am4core.color("#FDD75D"),
        "color3": am4core.color("#B1F0B0"),
        "color4": am4core.color("#CEBB8B"),"color5": am4core.color("#7E7D7F")
    }, {
        "case": "4",
        "case2": "4","case3":"4",
        "taille2": "2",
        "taille": "2",
        "taille3": "2",
        "taille4": "20",
        "taille5":"10.44",
        "color": am4core.color("#FDD75D"),
        "color2": am4core.color("#FDD75D"),
        "color3": am4core.color("#B1F0B0"),
        "color4": am4core.color("#E8A18B"),"color5": am4core.color("#7E7D7F"),
    }, {
        "case": "5",
        "case2": "5","case3":"5",
        "taille2": "2",
        "taille": "2",
        "taille3": "2",
        "taille4": "20",
        "taille5":"10.44",
        "color": am4core.color("#FDD75D"),
        "color2": am4core.color("#FDD75D"),
        "color3": am4core.color("#B8EEB0"),
        "color4": am4core.color("#F9918C"),"color5": am4core.color("#7E7D7F"),
    }, {
        "case": "6","case3":"6",
        "taille2": "2",
        "taille": "2",
        "taille3": "2",
        "taille5":"10.44",
        "color": am4core.color("#FDD75D"),
        "color2": am4core.color("#FDD75D"),
        "color3": am4core.color("#B8EEB0"),"color5": am4core.color("#7E7D7F"),
    }, {
        "case": "7","case3":"7",
        "taille2": "2",
        "taille": "2",
        "taille3": "2",
        "taille5":"10.44",
        "color": am4core.color("#FDD75D"),
        "color2": am4core.color("#FDD75D"),
        "color3": am4core.color("#B8EEB0"),"color5": am4core.color("#7E7D7F"),
    }, {
        "case": "8","case3":"8",
        "taille2": "2",
        "taille": "2",
        "taille3": "2",
        "taille5":"10.44",
        "color": am4core.color("#FDD75D"),
        "color2": am4core.color("#FDD75D"),
        "color3": am4core.color("#B8EEB0"),"color5": am4core.color("#7E7D7F"),
    }, {
        "case": "9","case3":"9",
        "taille2": "2",
        "taille": "2",
        "taille3": "2",
        "taille5":"10.44",
        "color": am4core.color("#FDD75D"),
        "color2": am4core.color("#FDD75D"),
        "color3": am4core.color("#B8EEB0"),"color5": am4core.color("#7E7D7F"),
    }, {
        "case": "10","case3":"10",
        "taille2": "2",
        "taille": "2",
        "taille3": "2",
        "taille5":"2",
        "color": am4core.color("#FDD75D"),
        "color2": am4core.color("#FDD75D"),
        "color3": am4core.color("#B8EEB0"),"color5": am4core.color("#7E7D7F"),
    }, {
        "case": "11","case3":"11",
        "taille2": "2",
        "taille": "2",
        "taille3": "2",
        "taille5":"2",
        "color": am4core.color("#FDD75D"),
        "color2": am4core.color("#FDD75D"),
        "color3": am4core.color("#C2E5B0"),"color5": am4core.color("#7E7D7F"),
    }, {
        "case": "12","case3":"12",
        "taille2": "2",
        "taille": "2",
        "taille3": "2",
        "taille5":"2",
        "color": am4core.color("#FDD75D"),
        "color2": am4core.color("#FDD75D"),
        "color3": am4core.color("#C2E5B0"),"color5": am4core.color("#7E7D7F"),
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
    },
    // {
    //     "case": "29",
    //     "taille2": "2",
    //     "taille": "2",
    //     "taille3": "2",

    //     "color": am4core.color("#FDD75D"),
    //     "color2": am4core.color("#FDD75D"),
    //     "color3": am4core.color("#B9EEB0")
    // }
    , {
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
    }
];
// Ajout du niveau Jour
const pieSeries5 = chart.series.push(new am4charts.PieSeries());
pieSeries5.dataFields.value = "taille5";
pieSeries5.dataFields.category = "case3";
pieSeries5.slices.template.stroke = am4core.color("#4a2abb");
pieSeries5.slices.template.strokeWidth = 2;
pieSeries5.slices.template.strokeOpacity = 1;
pieSeries5.slices.template.propertyFields.fill = "color5";
pieSeries5.labels.template.disabled = true;
pieSeries5.ticks.template.disabled = true;
pieSeries5.slices.template.tooltipText = "";
const hs5 = pieSeries5.slices.template.states.getKey("hover");
hs5.properties.scale = 1;
const as5 = pieSeries5.slices.template.states.getKey("active");
as5.properties.shiftRadius = 0;
// Ajout du 4 niveau:
const pieSeries4 = chart.series.push(new am4charts.PieSeries());
pieSeries4.dataFields.value = "taille4";
pieSeries4.dataFields.category = "case2";
pieSeries4.slices.template.stroke = am4core.color("#4a2abb");
pieSeries4.slices.template.strokeWidth = 2;
pieSeries4.slices.template.strokeOpacity = 1;
pieSeries4.slices.template.propertyFields.fill = "color4";
pieSeries4.labels.template.disabled = true;
pieSeries4.ticks.template.disabled = true;
pieSeries4.slices.template.tooltipText = "";
const hs1 = pieSeries4.slices.template.states.getKey("hover");
hs1.properties.scale = 1;
const as1 = pieSeries4.slices.template.states.getKey("active");
as1.properties.shiftRadius = 0;

// Ajout du troisième niveau:
const pieSeries3 = chart.series.push(new am4charts.PieSeries());
pieSeries3.dataFields.value = "taille3";
pieSeries3.dataFields.category = "case";
pieSeries3.slices.template.stroke = am4core.color("#4a2abb");
pieSeries3.slices.template.strokeWidth = 2;
pieSeries3.slices.template.strokeOpacity = 1;
pieSeries3.slices.template.propertyFields.fill = "color3";
pieSeries3.labels.template.disabled = true;
pieSeries3.ticks.template.disabled = true;
pieSeries3.slices.template.tooltipText = "";
const hs2 = pieSeries3.slices.template.states.getKey("hover");
hs2.properties.scale = 1;
const as2 = pieSeries3.slices.template.states.getKey("active");
as2.properties.shiftRadius = 0;


// Ajout d'un second cercle  qui est le plus bas
const pieSeries2 = chart.series.push(new am4charts.PieSeries());
pieSeries2.dataFields.value = "taille2";
pieSeries2.dataFields.category = "case";
pieSeries2.slices.template.stroke = am4core.color("#4a2abb");
pieSeries2.slices.template.strokeWidth = 2;
pieSeries2.slices.template.strokeOpacity = 1;
pieSeries2.slices.template.propertyFields.fill = "color2";
pieSeries2.labels.template.disabled = true;
pieSeries2.ticks.template.disabled = true;
pieSeries2.slices.template.tooltipText = "";
const hs3 = pieSeries2.slices.template.states.getKey("hover");
hs3.properties.scale = 1;
const as3 = pieSeries2.slices.template.states.getKey("active");
as3.properties.shiftRadius = 0;

// premier cercle qui est le plus haut
const pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "taille";
pieSeries.dataFields.category = "case";
pieSeries.slices.template.stroke = am4core.color("#4a2abb");
pieSeries.slices.template.strokeWidth = 2;
pieSeries.slices.template.strokeOpacity = 1;
pieSeries.slices.template.propertyFields.fill = "color";
pieSeries.labels.template.disabled = true;
pieSeries.ticks.template.disabled = true;
pieSeries.slices.template.tooltipText = "";
const hs4 = pieSeries.slices.template.states.getKey("hover");
hs4.properties.scale = 1;
const as4 = pieSeries.slices.template.states.getKey("active");
as4.properties.shiftRadius = 0;



console.log(chart.series);

console.log(chart.series.values);

chart.series.values.forEach((pie) => {
    pie.slices.template.events.on("hit", function (ev) {
        // console.log("clicked on ", ev.target);
        console.log(ev.target.cloneId);
    }, this);
});
 console.log(chart.series.template.dataItems.template.uid);

// pieSeries.slices.template.events.on("hit", function(ev) {
//         console.log("clicked on ", ev.target);
//       }, this);
// });
    }
}