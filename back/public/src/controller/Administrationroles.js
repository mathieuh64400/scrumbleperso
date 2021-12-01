import Controller from "../core/Controller.js";

export default class Administrationroles  extends Controller {

  constructor() {

    super();
    document.title = "gestion des droits administrateurs";

    let user = this.state.user[0];
    //console.log(user);
    // //console.log(user);

    // creation regles 

    const myForm = document.getElementById("myForm");

    // myForm.addEventListener('submit', function (e) {
    //   e.preventDefault();

    //   let h = new Headers();
    //   h.append('Accept', 'application/json');

    //   let titre = document.getElementById('titre').value;
    //   let contenu = document.getElementById('textarea').value;

    //   //console.log(titre);

    //   //console.log(contenu);

  
      

    //   const formData = new FormData(myForm);
    //   //console.log(formData);
    //   // formData.append('image',image,"image.png");
    // //   fetch('http://localhost:3050/api/dayli', {
    // //       method: 'POST',
    // //       body: JSON.stringify({
    // //         titre: titre,
    // //         contenu: contenu
    // //       }),
    // //       headers: {
    // //         "Content-type": "application/json; charset=UTF-8"
    // //       }
    // //     }).then(res => res.json())
    // //     .then(data => //console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
    // //     .catch(err => //console.log(err))
    // //   //console.log("go");

    // //   let validationmessage = document.getElementById("messageflash");
    // //   validationmessage.innerHTML = "nouvelle regles creer";
    // //   validationmessage.style.marginLeft = "20%";
    // //   let button = document.createElement('button')
    // //   button.classList.add('btnregles');
    // //   let lienrelance = document.createElement('a');
    // //   lienrelance.innerHTML = "NEW";
    // //   lienrelance.setAttribute("href", "/daylicartes");

    // //   validationmessage.appendChild(button);
    // //   button.appendChild(lienrelance);
    // })


    //  partie get
    let contenutable = document.getElementById("contenutable");
    //console.log(contenutable);


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
    let url = 'http://localhost:3050/api/rolelist';

    const loadCharacters = async () => {
      try {
        const res = await fetch(url, {
          method: 'GET'
        });
        hpCharacters = await res.json();
        //console.log(res + "  " + hpCharacters);
        displayCharacters(hpCharacters);
      } catch (err) {
        //console.error(err);
      }
    };

    const displayCharacters = (characters) => {
      const htmlString = characters
        .map((character) => {
          return `
                    <tr data-regles="${character._id}">
                    <td id=${character._id}>${character._id}</td>
                        <td id="mail">${character.email}</td>
                        <td id="contenu" class="contenu">
                       ${character.role}</td>
                        <td data-id="${character._id}"> <button class="edit" id="edit-post" data-id="${character._id}"> Edit </button> <button class="delete" id="${character._id}"> Delete</button> </td>
                    </tr>
                            
                `;
        })
        .join('');
      contenutable.innerHTML = htmlString;


      //  edit systeme:


      let edit = document.querySelectorAll(".edit");
      //console.log(edit);
      edit.forEach(editelement => {
        editelement.addEventListener("click", (e) => {
          e.preventDefault();
          //console.log(e.target.id, editelement);

          let editButtonIsPressed = e.target.id == 'edit-post';
          //console.log(editButtonIsPressed);
          if (editButtonIsPressed) {
            //console.log("editsysteme", e.target.parentElement.dataset.id);


            var elt = editelement.closest("tr[data-regles]");
            //console.log(elt);

            let role = elt.querySelector('#contenu').textContent;
            //console.log(role);
            // //console.log(greatfather, e.target.parentElement);
            let id = e.target.parentElement.dataset.id;


            let therole = document.getElementById('level');
            //console.log(therole);
            // let thecontenu = document.getElementById('contenu');
            // let thetexte = document.getElementById('textarea');

            therole.value = role;
         
            // thetexte.value = texte;
            // //console.log(thetitre);
            // update existing post

            let submition = document.querySelector('input[type=submit]');
            //console.log(submition);
            submition.addEventListener('click', (e) => {
              e.preventDefault();
              //console.log("go");
              // let idtest = '6156f28cd8bc2822c7003a0b'
              fetch('http://localhost:3050/api/rolelist/' + id, {
                method: 'PATCH',
                body: JSON.stringify({
                 
                    role: therole.value
                
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
      let supp = document.querySelectorAll('.delete');
      //console.log(supp[0]);
      supp.forEach(element => {
        element.addEventListener("click", (e) => {
          e.preventDefault()


          fetch('http://localhost:3050/api/rolelist/' + element.id, {
            method: 'DELETE'
          })

          loadCharacters()
        })
      });

    }; // arret



    loadCharacters();






  }

}