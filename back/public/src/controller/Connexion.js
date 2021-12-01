import Controller from "../core/Controller.js";

export default class Connexion extends Controller {

  form;
  constructor() {
    super();
    document.title = "Connexion";
    let user = this.state.user;
    //console.log(user);

    this.form = document.getElementById("form");
    //console.log(this.form);
    
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      let x = new FormData(this.form);
      // //console.log(Array.from(x));
    });
    this.form.addEventListener("formdata", (e) => {
      const data = e.formData;
      //console.log(data);
      if (data.get("mail") === "" && data.get("password") === "") return;



      let h = new Headers();
      h.append('Accept', 'application/json');
      this.state.mail = data.get("mail");
      let themaillogin = this.state.mail;

      this.state.password = data.get("password");
      let thepassword = this.state.password;
      // //console.log(data.get("password"),thepassword);

      fetch('http://localhost:3050/api/user/login', {
          method: 'POST',
          body: JSON.stringify({

            password: thepassword,
            email: themaillogin,
            // role: "USER"

          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        }).then(res => res.json())
       .then(data => //console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
        .catch(err => //console.log(err))
      //console.log("go");
  Object.defineProperty(user, "mail", {
          enumerable: false,
          configurable: true,
          writable: false,
          value: themaillogin
        });
 Object.defineProperty(user, "role", {
        enumerable: false,
        configurable: true,
        writable: false,
        value: "ADMIN"
      });
      Object.defineProperty(user, "statut", {
        enumerable: false,
        configurable: true,
        writable: false,
        value: "connecte"
      });

      //console.log(user);

      // let submition = document.querySelector('input[type=submit]');
      // //console.log(submition);
      // submition.addEventListener('click', (e) => {
      //   e.preventDefault();
      //   //console.log(user);
    
      // })

      this.go("/administration");
    })
  }

}