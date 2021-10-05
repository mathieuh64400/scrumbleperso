import Controller from "../core/Controller.js";

export default class Administrationregles extends Controller {

  constructor() {

    super();
    document.title = "gestion des regles";

    let user = this.state.user[0];
    console.log(user);
    // console.log(user);

    // creation regles 

    const myForm = document.getElementById("myForm");

    myForm.addEventListener('submit', function (e) {
      e.preventDefault();

      let h = new Headers();
      h.append('Accept', 'application/json');

      let titre = document.getElementById('titre').value;
      let contenu = document.getElementById('contenu').value;
      let texte = document.getElementById('textarea').value;

      console.log(titre);

      console.log(contenu);

      console.log(texte);
      // let image=document.getElementById('myFile').files[0];
      // console.log(image);

      const formData = new FormData(myForm);
      console.log(formData);
      // formData.append('image',image,"image.png");
      fetch('http://localhost:3050/api/regles', {
          method: 'POST',
          body: JSON.stringify({
            titre: titre,
            contenu: contenu,
            texte: texte,
            img: "https://media.istockphoto.com/photos/blue-sky-and-white-clouds-background-picture-id825778252?k=20&m=825778252&s=612x612&w=0&h=i5tqMrPeAshcGZ_Clma9t_wp9rIw1bkm0gdz2ozR7OQ=,",
            video: "Mountains - 2266.mp4"
          }),
          headers: {
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


    // get
    let contenutable = document.getElementById("contenutable");
    console.log(contenutable);


    const cadreref = document.getElementById("cadreregles");
    let hpCharacters = [];

    var myHeaders = new Headers({
      'Access-Control-Allow-Headers': "*",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    });
    var myInit = {
      method: 'GET',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default'
    };
    let url = 'http://localhost:3050/api/regles';

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
                    <tr data-regles="${character._id}">
                        <td>${character._id}</td>
                        <td id="titre">${character.titre}</td>
                        <td  id="resume"class="tdcontenu">${character.contenu}</td>
                        <td class="tdcontenu">
                         A retenir: <br> <span id="contenu">${character.texte}</span></td>
                        <td class="tdimage">${character.img}</td>
                        <td class="tdcontenu">${character.video}</td> 
                        
                        <td data-id="${character._id}"> <button class="edit" id="edit-post" data-id="${character._id}"> Edit </button> <button class="delete" id="${character._id}"> Delete</button> </td>
                    </tr>
                            
                `;
        })
        .join('');
      contenutable.innerHTML = htmlString;
      //  edit systeme:


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
            let resume = elt.querySelector('#resume').textContent;
            let texte = elt.querySelector('#contenu').textContent;
            console.log(titre);



            // console.log(greatfather, e.target.parentElement);
            let id = e.target.parentElement.dataset.id;


            let thetitre = document.getElementById('titre')
            console.log(thetitre);
            let thecontenu = document.getElementById('contenu');
            let thetexte = document.getElementById('textarea');

            thetitre.value = titre;
            thecontenu.value = resume;
            thetexte.value = texte;
            console.log(thetitre);
            // update existing post

            let submition = document.querySelector('input[type=submit]');
            console.log(submition);
            submition.addEventListener('click', (e) => {
              e.preventDefault();
              console.log("go");
              let idtest='6156f28cd8bc2822c7003a0b'
              fetch('http://localhost:3050/api/regles/' + id , {
                method: 'PATCH',
                body: JSON.stringify({
                  titre: thetitre.value,
                  contenu: thecontenu.value,
                  texte: thetexte.value,
                  img: "https://media.istockphoto.com/photos/blue-sky-and-white-clouds-background-picture-id825778252?k=20&m=825778252&s=612x612&w=0&h=i5tqMrPeAshcGZ_Clma9t_wp9rIw1bkm0gdz2ozR7OQ=,",
                  video: "Mountains - 2266.mp4"
                }),
                headers: {
                  "Content-type": "application/json; charset=UTF-8"
                }
              }).then(res=> res.json()).then(()=> location.reload())
            })


          }

          // loadCharacters()
        })

      })
      let supp = document.querySelectorAll('.delete');
      console.log(supp[0]);
      supp.forEach(element => {
        element.addEventListener("click", (e) => {
          e.preventDefault()


          fetch('http://localhost:3050/api/regles/' + element.id, {
            method: 'DELETE'
          })

          loadCharacters()
        })
      });

    }; // arret



    loadCharacters();






  }

}