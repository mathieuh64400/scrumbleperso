const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');
let draggedItem = null;// initialisation du mouvement de deplacement des items a  un etat intial

for (let i = 0; i < list_items.length; i++) {// boucle sur chaque list d'items 
  const item = list_items[i];
  item.addEventListener('dragstart', function (e) {// sur chaque carte on effectue un evement d'activation du déplacement
    console.log('dragstart', e);
    draggedItem = item;// 1 elt deplacé = un item
    setTimeout(function () {
      item.style.display = "none";// chaque item n'a pas de style display particulier
    }, 0)

  })

  item.addEventListener('dragend', function () {// sur chaque carte on effectue un evement de fin du déplacement
    console.log('dragend');
    setTimeout(function (e) {
      draggedItem.style.display = "block";// chaque item déplacé a style display particulier block
      draggedItem = null;
    }, 0)
  })
  for (let j = 0; j < lists.length; j++) {// chaque item déplacé a style display particulier block
    const list = lists[j];
    list.addEventListener('dragover', function (e) {
      e.preventDefault();
    });
    list.addEventListener('dragenter', function (e) {
      e.preventDefault();
    });
    list.addEventListener('drop', function () {
      this.append(draggedItem);
    });

  }

}