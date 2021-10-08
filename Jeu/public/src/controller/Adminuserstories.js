// import { log } from "console";
import Controller from "../core/Controller.js";

export default class Adminuserstories extends Controller {

    constructor() {

        super();
        document.title = "gestion des usesrstories";
        let urlchoisi = this.state.adminuserstories;
        console.log(this.state);
        console.log(urlchoisi[0]);

        console.log(urlchoisi);
        let listurl =['paquet1','paquet2','paquet3'];
        let listconfiguration=['paquet1.1','paquet1.2','paquet1.3','paquet1.4','paquet1.5']
     
        
        let contenutable = document.getElementById("contenutable");
        console.log(contenutable);
        console.log(contenutable);

        let derniertr = contenutable.lastChild;
        console.log(derniertr);
        const myForm = document.getElementById("myForm");

        // get une userstorie

if((urlchoisi[0].url===listurl[0]|| urlchoisi[0].url===listurl[1] || urlchoisi[0].url===listurl[2])&& urlchoisi[0].configuration===''){
    let url='http://localhost:3018/'+urlchoisi[0].url;
    let hpCharacters = [];

    const loadCharacters = async () => {
        try {
            const res = await fetch(url, {
                method: 'GET'
            });
            hpCharacters = await res.json();
            console.log(res + "  " + hpCharacters);
            displayCharacters(hpCharacters);
        } catch (err) {
            console.error(err);
        }
    };

    const displayCharacters = (characters) => {
        const htmlString = characters
            .map((character) => {
                return `
                    <tr data-regles="${character.id}">
                        <td>${character.id}</td>
                        <td id="titre">${character.titre}</td>
                        <td id="contenu">${character.contenu}</td>
                        <td id="img">${character.img}</td>
                        <td id="dposition">${character.dposition}</td>
                        <td id="Dependance">${character.Dependance}</td>
                        <td id="size">${character.taille}/${character.size}</td>
                        <td data-id="${character.id}"> <button class="edit" id="edit-post" data-id="${character.id}"> Edit </button> <button class="delete" id="${character.id}"> Delete</button> </td>
                    </tr>
                            
                `;
            })
            .join('');
        contenutable.innerHTML = htmlString;

        let tr = document.querySelectorAll("tr[data-regles]");
        console.log(tr.length);
// supprimer une userstorie
let supp = document.querySelectorAll('.delete');
    // console.log(supp);
    console.log(supp[0]);
    supp.forEach(element => {
        element.addEventListener("click", (e) => {
            e.preventDefault()


            fetch(url + '/' + element.id, {
                method: 'DELETE'
            }).then((data) => console.log(data)).catch((err) => console.log(err))

            
        })
    });
    // update

  let edit = document.querySelectorAll(".edit");
  console.log(edit);
  edit.forEach(editelement => {
    editelement.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(e.target.id, editelement);

      let editButtonIsPressed = e.target.id == 'edit-post';
      console.log(editButtonIsPressed);
      if (editButtonIsPressed) {
        console.log("editsysteme", e.target.parentElement.dataset.id);


        var elt = editelement.closest("tr[data-regles]");
        console.log(elt);

        let titre = elt.querySelector('#titre').textContent;
        let contenu = elt.querySelector('#contenu').textContent;
        let dposition = elt.querySelector('#dposition').textContent;
        let Dependance = elt.querySelector('#Dependance').textContent;
        console.log(titre);



        // console.log(greatfather, e.target.parentElement);
        let id = e.target.parentElement.dataset.id;

        // correspond au input;
        let thetitre = document.getElementById('titre')
        console.log(thetitre);
        let theDependance = document.getElementById('Dependance');
        let thedposition = document.getElementById('dposition');
        let thecontenu = document.getElementById('textarea');

        thetitre.value = titre;
        thecontenu.value = contenu;
        theDependance.value = Dependance;
        thedposition.value=dposition;
        console.log(thetitre);
        // update existing post

        let submition = document.querySelector('input[type=submit]');
        console.log(submition);
        submition.addEventListener('click', (e) => {
          e.preventDefault();
          console.log("go");
        //   let idtest = '6156f28cd8bc2822c7003a0b'
          fetch('http://localhost:3018'+'/'+  id, {
            method: 'PATCH',
            body: JSON.stringify({
                // id: tr.length + 1,
                titre: titre,
                contenu: contenu,
                img: "https://media.istockphoto.com/photos/blue-sky-and-white-clouds-background-picture-id825778252?k=20&m=825778252&s=612x612&w=0&h=i5tqMrPeAshcGZ_Clma9t_wp9rIw1bkm0gdz2ozR7OQ=,",
                dposition: dposition,
                Dependance: Dependance
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          }).then(res => res.json()).then(() => location.reload())
        })


      }

      // loadCharacters()
    })

  }
)
        // create form

        myForm.addEventListener('submit', function (e) {
            e.preventDefault();
            console.log(tr.length);
            let h = new Headers();
            h.append('Accept', 'application/json');

            let titre = document.getElementById('titre').value;
            let contenu = document.getElementById('textarea').value;
            let dposition = document.getElementById('dposition').value;
            let Dependance = document.getElementById('Dependance').value;
            let id = document.getElementById("id").value;
            console.log(contenutable);
            let derniertr = contenutable.lastChild;
            console.log(derniertr);
            console.log(id);
            console.log(titre);

            console.log(contenu);


            // let image=document.getElementById('myFile').files[0];
            // console.log(image);

            const formData = new FormData(myForm);
            console.log(formData);
            // formData.append('image',image,"image.png");
            fetch(url, {
                    method: 'POST',
                    body: JSON.stringify({
                        id: tr.length + 1,
                        titre: titre,
                        contenu: contenu,
                        img: "https://media.istockphoto.com/photos/blue-sky-and-white-clouds-background-picture-id825778252?k=20&m=825778252&s=612x612&w=0&h=i5tqMrPeAshcGZ_Clma9t_wp9rIw1bkm0gdz2ozR7OQ=,",
                        dposition: dposition,
                        Dependance: Dependance
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                }).then(res => res.json())
                .then(data => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
                .catch(err => console.log(err))
            console.log("go");

            let validationmessage = document.getElementById("messageflash");
            validationmessage.innerHTML = "nouvelle usesrstorie crée";
            validationmessage.style.marginLeft = "20%";
            let button = document.createElement('button')
            button.classList.add('btnregles');
            let lienrelance = document.createElement('a');
            lienrelance.innerHTML = "NEW";
            lienrelance.setAttribute("href", "/adminuserstories");

            validationmessage.appendChild(button);
            button.appendChild(lienrelance);
        })

    }
    loadCharacters();
   

} else if ((urlchoisi[0].url===listurl[0]|| urlchoisi[0].url===listurl[1] || urlchoisi[0].url===listurl[2]) 
&&( urlchoisi[0].configuration===listconfiguration[0],urlchoisi[0].configuration===listconfiguration[1],urlchoisi[0].configuration===listconfiguration[2],urlchoisi[0].configuration===listconfiguration[3],urlchoisi[0].configuration===listconfiguration[4],urlchoisi[0].configuration===listconfiguration[5])){
    let url='http://localhost:3018/'+urlchoisi[0].configuration;
    let hpCharacters = [];

    const loadCharacters = async () => {
        try {
            const res = await fetch(url, {
                method: 'GET'
            });
            hpCharacters = await res.json();
            console.log(res + "  " + hpCharacters);
            displayCharacters(hpCharacters);
        } catch (err) {
            console.error(err);
        }
    };

    const displayCharacters = (characters) => {
        const htmlString = characters
            .map((character) => {
                return `
                    <tr data-regles="${character.id}">
                        <td>${character.id}</td>
                        <td id="titre">${character.titre}</td>
                        <td id="contenu">${character.contenu}</td>
                        <td id="img">${character.img}</td>
                        <td id="dposition">${character.dposition}</td>
                        <td id="Dependance">${character.Dependance}</td>
                        <td data-id="${character.id}"> <button class="edit" id="edit-post" data-id="${character.id}"> Edit </button> <button class="delete" id="${character.id}"> Delete</button> </td>
                    </tr>
                            
                `;
            })
            .join('');
        contenutable.innerHTML = htmlString;

        let tr = document.querySelectorAll("tr[data-regles]");
        console.log(tr.length);
// supprimer une userstorie
let supp = document.querySelectorAll('.delete');
    // console.log(supp);
    console.log(supp[0]);
    supp.forEach(element => {
        element.addEventListener("click", (e) => {
            e.preventDefault()


            fetch(url + '/' + element.id, {
                method: 'DELETE'
            }).then((data) => console.log(data)).catch((err) => console.log(err))

            
        })
    });
    // update

  let edit = document.querySelectorAll(".edit");
  console.log(edit);
  edit.forEach(editelement => {
    editelement.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(e.target.id, editelement);

      let editButtonIsPressed = e.target.id == 'edit-post';
      console.log(editButtonIsPressed);
      if (editButtonIsPressed) {
        console.log("editsysteme", e.target.parentElement.dataset.id);


        var elt = editelement.closest("tr[data-regles]");
        console.log(elt);

        let titre = elt.querySelector('#titre').textContent;
        let contenu = elt.querySelector('#contenu').textContent;
        let dposition = elt.querySelector('#dposition').textContent;
        let Dependance = elt.querySelector('#Dependance').textContent;
        console.log(titre);



        // console.log(greatfather, e.target.parentElement);
        let id = e.target.parentElement.dataset.id;

        // correspond au input;
        let thetitre = document.getElementById('titre')
        console.log(thetitre);
        let theDependance = document.getElementById('Dependance');
        let thedposition = document.getElementById('dposition');
        let thecontenu = document.getElementById('textarea');

        thetitre.value = titre;
        thecontenu.value = contenu;
        theDependance.value = Dependance;
        thedposition.value=dposition;
        console.log(thetitre);
        // update existing post

        let submition = document.querySelector('input[type=submit]');
        console.log(submition);
        submition.addEventListener('click', (e) => {
          e.preventDefault();
          console.log("go");
        //   let idtest = '6156f28cd8bc2822c7003a0b'
          fetch('http://localhost:3018'+'/'+  id, {
            method: 'PATCH',
            body: JSON.stringify({
                // id: tr.length + 1,
                titre: titre,
                contenu: contenu,
                img: "https://media.istockphoto.com/photos/blue-sky-and-white-clouds-background-picture-id825778252?k=20&m=825778252&s=612x612&w=0&h=i5tqMrPeAshcGZ_Clma9t_wp9rIw1bkm0gdz2ozR7OQ=,",
                dposition: dposition,
                Dependance: Dependance
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          }).then(res => res.json()).then(() => location.reload())
        })


      }

      // loadCharacters()
    })

  }
)
        // create form

        myForm.addEventListener('submit', function (e) {
            e.preventDefault();
            console.log(tr.length);
            let h = new Headers();
            h.append('Accept', 'application/json');

            let titre = document.getElementById('titre').value;
            let contenu = document.getElementById('textarea').value;
            let dposition = document.getElementById('dposition').value;
            let Dependance = document.getElementById('Dependance').value;
            let id = document.getElementById("id").value;
            console.log(contenutable);
            let derniertr = contenutable.lastChild;
            console.log(derniertr);
            console.log(id);
            console.log(titre);

            console.log(contenu);


            // let image=document.getElementById('myFile').files[0];
            // console.log(image);

            const formData = new FormData(myForm);
            console.log(formData);
            // formData.append('image',image,"image.png");
            fetch(url, {
                    method: 'POST',
                    body: JSON.stringify({
                        id: tr.length + 1,
                        titre: titre,
                        contenu: contenu,
                        img: "https://media.istockphoto.com/photos/blue-sky-and-white-clouds-background-picture-id825778252?k=20&m=825778252&s=612x612&w=0&h=i5tqMrPeAshcGZ_Clma9t_wp9rIw1bkm0gdz2ozR7OQ=,",
                        dposition: dposition,
                        Dependance: Dependance
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                }).then(res => res.json())
                .then(data => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
                .catch(err => console.log(err))
            console.log("go");

            let validationmessage = document.getElementById("messageflash");
            validationmessage.innerHTML = "nouvelle usesrstorie crée";
            validationmessage.style.marginLeft = "20%";
            let button = document.createElement('button')
            button.classList.add('btnregles');
            let lienrelance = document.createElement('a');
            lienrelance.innerHTML = "NEW";
            lienrelance.setAttribute("href", "/adminuserstories");

            validationmessage.appendChild(button);
            button.appendChild(lienrelance);
        })

    }
    loadCharacters();
}


    }
}