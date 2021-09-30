import Controller from "../core/Controller.js"
export default class Createroles extends Controller {
    constructor() {
        super();
        document.title = " Creation Regles du Jeu";
        let user=this.state.user;
        console.log(user);

        this.form= document.getElementById("formcreateregles");
      
        console.log(this.form);
        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
         let x= new FormData(this.form);
            console.log(Array.from(x));
        });

        this.form.addEventListener("formdata",(e)=>{
            const data= e.formData;
            if (data.get("level")==="") return;
            this.state.level=data.get("level");
            console.log(data.get("level"));

            let validationmessage=document.getElementById("messageflash");
            validationmessage.innerHTML="nouvelle regles creer";
            validationmessage.style.marginLeft="20%";
            let button=document.createElement('button')
            button.classList.add('btnregles');
           let lienrelance= document.createElement('a');
           lienrelance.innerHTML="NEW";
           lienrelance.setAttribute("href","/createroles");

           validationmessage.appendChild(button);
           button.appendChild(lienrelance);

 Object.defineProperty(user, "role", {
            enumerable: false,
            configurable: true,
            writable: false,
            value:this.state.level 
          });
            
             this.go("/administration");
        })
       
       
       


       
       



        

        }}
