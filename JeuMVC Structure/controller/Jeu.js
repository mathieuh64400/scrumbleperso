import Controller from "../core/Controller.js";


export default class Jeu extends Controller {
    constructor (){
        super();
      
    //    création du dé:
    let dice = [...document.querySelectorAll(".die-list")];
    console.log(dice);
   
   function rollDice() {
      
       dice.forEach(die => {
         toggleClasses(die);
         die.dataset.roll = getRandomNumber(1, 6);
       });
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
     
     document.getElementById("die-1").addEventListener("click", rollDice);
     




     
    }
}