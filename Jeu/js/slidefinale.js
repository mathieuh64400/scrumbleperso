function on() {
       let overlay = document.getElementById("overlay");
       overlay.style.display = "block";
        console.log(overlay);
      }

      let resultat=document.getElementById("etatpartie");
      let x;
      x=1;
      if (x==1) {
        resultat.innerHTML="GAGNE";
      } else {
        resultat.innerHTML="PERDU";
      }

     
   