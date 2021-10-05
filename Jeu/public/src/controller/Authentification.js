import Controller from "../core/Controller.js";

export default class Authentification extends Controller {

    form;
    constructor() {
        super();
        document.title = "Authentification";

        const myForm = document.getElementById("form");
        console.log(myForm);

        myForm.addEventListener('submit', function (e) {
            e.preventDefault();
      
            let h = new Headers();
            h.append('Accept', 'application/json');
      
            let nom = document.getElementById('nom').value;
            let password = document.getElementById('password').value;
            let mail = document.getElementById('mail').value;
      
            console.log(nom);
      
            // console.log(password);
      
            console.log(mail);
            // let image=document.getElementById('myFile').files[0];
            // console.log(image);
      
            const formData = new FormData(myForm);
            console.log(formData);
          
            fetch('http://localhost:3050/api/user/register', {
                method: 'POST',
                body: JSON.stringify({
                  name: nom,
                  password: password,
                  email: mail,
                  // role: "USER"
                  
                }),
                headers: {
                  "Content-type": "application/json; charset=UTF-8"
                }
              }).then(res => res.json())
              .then(data => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
              .catch(err => console.log(err))
            console.log("go");
            

            let submition = document.querySelector('input[type=submit]');
            console.log(submition);
            submition.addEventListener('click', (e) => {
              e.preventDefault();
                location.reload(); 

            let validationmessage = document.getElementById("messageflash");
            // validationmessage.innerHTML = "nouvelle regles creer";
            })


           
            // validationmessage.style.marginLeft = "20%";
            // let button = document.createElement('button')
            // button.classList.add('btnregles');
            // let lienrelance = document.createElement('a');
            // lienrelance.innerHTML = "NEW";
            // lienrelance.setAttribute("href", "/createregles");
      
            // validationmessage.appendChild(button);
            // button.appendChild(lienrelance);
          })
      


        // this.form = document.getElementById("form");
        // console.log(this.form);
        // this.form.addEventListener("submit", (e) => {
        //     e.preventDefault();
        //  let x=   new FormData(this.form);
        //     console.log(Array.from(x));
        // });
        // this.form.addEventListener("formdata",(e)=>{
        //     const data= e.formData;
        //     if (data.get("mail")==="" || data.get("password")===""|| data.get("level")==="") return;
        //     this.state.mail=data.get("mail");
        //     console.log(data.get("mail"))
        //     this.state.password=data.get("password");
        //     console.log(data.get("password"))
        //     this.state.level=data.get("level");
        //     console.log(data.get("level"));
            
        //      
        // })

    }

}