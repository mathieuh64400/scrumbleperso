const socket = require('socket.io');
const express = require('express');
// const { on } = require('process');
const app = express();
// const path=require('path');
const http = require('http').createServer(app);
const port = 3004;
const formatMessage = require('./utils/messages');
const {
  userJoin,
  getCurrentUser,
  userLeave,
  // getRoomsUsers
} = require('./utils/users');
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
    console.log(`[playerData],${player.username},${player}`);// récupération de data username et player
    let room = null; //etat initial pas de room crée
    if (!player.roomId) { //si le player n'est pas lé a une valeur Id de room
      room = createRoom(player); //creation de la room (session) pour 

      console.log(`[createRoom],${room.id}-${player.username},${player.roomId}`);//
    } else {
      room = rooms.find(r=>r.id ===  player.roomId);
      if(room === undefined){
        return;
      }
      player.roomId = room.id;
      room.players.push(player);
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

  //  partie sur le tchat:
  // let interlocuteur={room,username};
  const botName = 'Chat de Scrumble';
  socket.on('joinRoom', ({
    room,
    username
  }) => {
    const user = userJoin(socket.id, room, username);
    console.log("socket.id:", socket.id);
    socket.join(user.room);
    console.log("user.room", user.room);
    socket.emit('message', formatMessage(botName, 'Bienvenue dans le chat'))
    // broadcast when a user connects
    socket.broadcast.emit('message', formatMessage(botName, ` ${user.username} a rejoint ce tchat`));
    console.log("username:", user.username);
    // envoie des informations dans le salon de user.room et de users 
    // io.to(user.room).emit('roomUsers', {
    //   room: user.room,
    //   users: getRoomsUsers(user.room)
    // })
  });

  // list de event chat message
  socket.on('chatMessage', msg => {
    console.log(msg);
    const user = getCurrentUser(socket.id);

    io.emit('message', formatMessage(user.username, msg));

  });
  // Runs when client disconnects
  socket.on('disconnect', () => {
    const user = userLeave(socket.id);
    if (user) {
      io.emit('message', `${user.username} a quitté le tchat`);
    }

  });

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