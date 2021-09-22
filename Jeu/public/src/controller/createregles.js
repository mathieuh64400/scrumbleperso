import Controller from "../core/Controller.js"
export default class Createregles extends Controller {
    constructor() {
        super();
        document.title = " Creation Regles du Jeu";

        const form= document.getElementById("formcreateregles");

        form.onsubmit = function (e) {
            e.preventDefault();
        
            console.log("go");
            let validationmessage=document.getElementById("messageflash");
            validationmessage.innerHTML="nouvelle regles creer";
            let button=document.createElement('button');
           let lienrelance= document.createElement('a');
           lienrelance.innerHTML="NEW";
           lienrelance.setAttribute("href","/createregles");

           validationmessage.appendChild(button);
           button.appendChild(lienrelance);

        
        }
       


       
       



        

        }}


