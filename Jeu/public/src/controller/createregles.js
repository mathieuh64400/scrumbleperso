import Controller from "../core/Controller.js"
export default class Createregles extends Controller {
    constructor() {
        super();
        document.title = "Creation Regles du Jeu";

        const myForm = document.getElementById("myForm");
        console.log("toto");
        console.log( document.title, 'formulaire' ,myForm);
 let myfile=document.getElementById('myFile');
            console.log(myfile);
        myForm.addEventListener('submit', function (e) {
            e.preventDefault();

            let h = new Headers();
            h.append('Accept','application/json');

            let titre= document.getElementById('titre').value;
            console.log(titre);
            let contenu= document.getElementById('contenu').value;
            console.log(contenu);
            let texte= document.getElementById('textarea').value;
            console.log(texte);
           

            const formData = new FormData(myForm);
            formData.append('myfile',myfile.files[0]);
            console.log( 'list :',myfile.files);
            console.log(formData);
            // formData.append('image',image,"image.png");
            fetch('http://localhost:3050/api/regles', {
                    method: 'POST',
                    body: JSON.stringify({
                        titre:titre ,
                        contenu: contenu,
                        texte: texte,
                        img:"https://media.istockphoto.com/photos/blue-sky-and-white-clouds-background-picture-id825778252?k=20&m=825778252&s=612x612&w=0&h=i5tqMrPeAshcGZ_Clma9t_wp9rIw1bkm0gdz2ozR7OQ=,",
                        video:"Mountains - 2266.mp4"
                    }), headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                }).then(res => res.json())
                .then(data => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
                .catch(err => console.log(err))
            console.log("go");
            let validationmessage = document.getElementById("messageflash");
            validationmessage.innerHTML = "nouvelle regles creer";
            validationmessage.style.marginLeft = "20%";
            let button = document.createElement('button')
            button.classList.add('btnregles');
            let lienrelance = document.createElement('a');
            lienrelance.innerHTML = "NEW";
            lienrelance.setAttribute("href", "/createregles");

            validationmessage.appendChild(button);
            button.appendChild(lienrelance);
        })










    }
}