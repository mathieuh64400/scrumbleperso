import Controller from "../core/Controller.js";

export default class UserstoriesSelect extends Controller {

    constructor() {

        super();
        document.title = "selection du paquet de userstories";

        let urlchoisi = this.state.adminuserstories;
        //console.log(urlchoisi);
        const paquettraite= {
            'url':'tttt',
            'configuration':'....'
        }
        //console.log(typeof(paquettraite),paquettraite);
        const me = Object.create(paquettraite);
        //console.log(me);
        urlchoisi.push(me);
      

      
        //console.log(urlchoisi);
        //console.log(urlchoisi[0].url);
        //console.log(this.state.adminuserstories,this.state.adminuserstories[0].url,this.state.adminuserstories[0].configuration);
        // traitement du formulaire
        const myForm = document.getElementById("formpaquet");

        myForm.addEventListener('submit', function (e) {
            e.preventDefault();


            let paquetselect = document.getElementById('paquet').value;
            let paquetselectconfiguration = document.getElementById('configuration').value;


            //console.log(paquetselect);

            //console.log(paquetselectconfiguration);

            //  //console.log(texte);
            // let image=document.getElementById('myFile').files[0];
            // //console.log(image);

            const formData = new FormData(myForm);
            //console.log(formData);

            //console.log("go");
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
            //console.log(urlchoisi[0],urlchoisi);

             let validationmessage = document.getElementById("messageflash");
             validationmessage.innerHTML = "clicker sur le bouton pour continuer à traiter les userstories ";
             validationmessage.style.marginLeft = "20%";
             validationmessage.style.marginTop = "2%";
             let button = document.createElement('button');
             button.classList.add('btnregles');
             let lienrelance = document.createElement('a');
             lienrelance.innerHTML = "Suite";
             lienrelance.setAttribute("href", "/adminuserstories");
             lienrelance.setAttribute("data-link", "/adminuserstories");
             validationmessage.appendChild(button);
             button.appendChild(lienrelance);
             this.refreshLinks()
             //console.log(this.state);
        }.bind(this))











    }

}