import Controller from "../core/Controller.js";

export default class UserstoriesSelect extends Controller {

    constructor() {

        super();
        document.title = "selection du paquet de userstories";

        let urlchoisi = this.state.adminuserstories;
        console.log(urlchoisi);
        const entries = new Map([
            ['url', '.....'],
            ['configuration', '....']

        ]); //
        const obj = Object.fromEntries(entries);
        console.log(obj);
        urlchoisi.push(obj);
        console.log(urlchoisi);
        // traitement du formulaire
        const myForm = document.getElementById("formpaquet");

        myForm.addEventListener('submit', function (e) {
            e.preventDefault();


            let paquetselect = document.getElementById('paquet').value;
            let paquetselectconfiguration = document.getElementById('configuration').value;


            console.log(paquetselect);

            console.log(paquetselectconfiguration);

            //  console.log(texte);
            // let image=document.getElementById('myFile').files[0];
            // console.log(image);

            const formData = new FormData(myForm);
            console.log(formData);

            console.log("go");
            Object.defineProperty(urlchoisi[0], "url", {
                enumerable: false,
                configurable: true,
                writable: false,
                value: paquetselect
            });
            Object.defineProperty(urlchoisi[0], "configuration", {
                enumerable: false,
                configurable: true,
                writable: false,
                value: paquetselectconfiguration
            });
             let validationmessage = document.getElementById("messageflash");
             validationmessage.innerHTML = "clicker sur le bouton pour continuer a traiter les userstories ";
             validationmessage.style.marginLeft = "20%";
             validationmessage.style.marginTop = "2%";
             let button = document.createElement('button')
             button.classList.add('btnregles');
             let lienrelance = document.createElement('a');
             lienrelance.innerHTML = "Suite";
             lienrelance.setAttribute("href", "/adminuserstories");
             lienrelance.setAttribute("data-link", "adminuserstories");

             validationmessage.appendChild(button);
             button.appendChild(lienrelance);
        })











    }

}