import Controller from "../core/Controller.js";

export default class Authentification extends Controller {

    form;
    constructor() {
        super();
        document.title = "Authentification";

        this.form = document.getElementById("form");
        console.log(this.form);
        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
         let x=   new FormData(this.form);
            console.log(Array.from(x));
        });
        this.form.addEventListener("formdata",(e)=>{
            const data= e.formData;
            if (data.get("mail")==="" || data.get("password")===""|| data.get("level")==="") return;
            this.state.mail=data.get("mail");
            console.log(data.get("mail"))
            this.state.password=data.get("password");
            console.log(data.get("password"))
            this.state.level=data.get("level");
            console.log(data.get("level"));
            
            // this.go("/");
        })
    }

}