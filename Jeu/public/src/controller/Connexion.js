import Controller from "../core/Controller.js";

export default class Connexion extends Controller {

    form;
    constructor() {
        super();
        document.title = "Connexion";
        let user=this.state.user[0];
     console.log(user);

        this.form = document.getElementById("form");
        console.log(this.form);
        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
         let x=   new FormData(this.form);
            console.log(Array.from(x));
        });
        this.form.addEventListener("formdata",(e)=>{
            const data= e.formData;
            if (data.get("mail")==="" && data.get("password")==="") return;
            this.state.mail=data.get("mail");
            console.log(data.get("mail"))
            this.state.password=data.get("password");
            console.log(data.get("password"));

            Object.defineProperty(user, "mail", {
                enumerable: false,
                configurable: true,
                writable: false,
                value: this.state.mail
              });
              Object.defineProperty(user, "password", {
                enumerable: false,
                configurable: true,
                writable: false,
                value: this.state.password
              });
              Object.defineProperty(user, "role", {
                enumerable: false,
                configurable: true,
                writable: false,
                value: "USER"
              });
              Object.defineProperty(user, "statut", {
                enumerable: false,
                configurable: true,
                writable: false,
                value: "connecte"
            });
            console.log(user);
            
             this.go("/administration");
        })
    }

}