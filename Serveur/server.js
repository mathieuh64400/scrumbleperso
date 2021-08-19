const socket = require('socket.io');
const express = require('express');
// const { on } = require('process');
const app = express();
// const path=require('path');
const http = require('http').createServer(app);
const port = 3004;
// const formatMessage = require('./utils/messages');
// const {
//   userJoin,
//   getCurrentUser,
//   userLeave,
//   // getRoomsUsers
// } = require('./utils/users');
const io = require('socket.io')(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});

app.get('/', (req, res) => {
  res.sendFiles(`/var/www/html/Scrumble/Jeu/views/jeu.html`);
});
app.get('/rooms', (r, res)=>{res.json(rooms)})
http.listen(port, () => {
  console.log(`listening on http://localhost:3004/`);
});

// attention toujours le pb  des routes car port 3000 est toujours utilisé donc 3020
// creation d'une session de jeu

 let rooms = []; // toutes les rooms qui existe
console.log("rooms",rooms);
// creation de la socket permettant de donnecter les différents joueurs

io.on('connection', (socket) => { // connection de la socket grace a l'evenement on connection
  console.log(`[connection],${socket.id}`);//log sur l'evt connection et récupère l'id de sa socket

  socket.on('playerData', (player) => { //création d'un evt playerData avec por nature d'evt une fonction fléché de creation de room
    console.log(`[playerData],${player.username},[connection],${socket.id},${player}`);// récupération de data username et player
    let room = null; //etat initial pas de room crée
    if (!player.roomId) { //si le player n'est pas lé a une valeur Id de room
    console.log("ping0");
      room = createRoom(player); //creation de la room (session) pour 

      console.log(`[createRoom],${room.id}-${player.username},${player.roomId}`);//
    } else {
      room = rooms.find(r=>r.id ===  player.roomId);
      console.log("ping1");
      if(room === undefined){
        console.log("ping2");
        return;
      }
      player.roomId = room.id;
      room.players.push(player);
      console.log("ping3");

    }
    //  socket.on('playernbre',(nbreplayer)=>{
    //   console.log(`[playerNbre],${nbreplayer.nbre}`);
    // })
    socket.join(room.id);

    io.to(socket.id).emit('join room', room.id);

    // le 2 va changer pour être remplacé par nbreplayer.nbre
    if (room.players.length === 2) {//si 
      io.to(room.id).emit('start game', room.players);
    }
  })
  socket.on('getRooms', ()=>{

    io.to(socket.id).emit('listRooms', rooms);
  })

});

// creation des rooms: salons de jeux 
function createRoom(player) {
  const room = { // definition d'une room caracteriser par un id de room et  un joueur associé
    id: roomId(),
    players: []
  };
  player.roomId = room.id; //un player  a un id associé a un room.id
  room.players.push(player); //ajout des rooms dans un tableau
  rooms.push(room); // liste des rooms mis dans le tableau des rooms 

  return room
}

function roomId() {
  return Math.random().toString(36).substr(2, 20);
}