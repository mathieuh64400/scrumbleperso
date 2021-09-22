const socket = require('socket.io');
const express = require('express');
// const { on } = require('process');
const app = express();
// const path=require('path');
const http = require('http').createServer(app);
const port = 3018;
const bodyParser = require('body-parser');
const { instrument } = require("@socket.io/admin-ui");

// IMPORT DB CONNECTION
const connection = require('./database');
console.log(connection);
// USE BODY-PARSER MIDDLEWARE
app.use(bodyParser.urlencoded({extended:false}));

// route gestion regles:
app.get('/', (req, res) => {
  // FETCH ALL THE REGLES FROM DATABASE
  connection.query('SELECT * FROM `Regles`', (err, results) => {
      if (err) throw err;
      // RENDERING INDEX.HTML FILE WITH ALL REGLES
      res.render('index',{
          regles:results
      },console.log(results));
  });
  
});

// route gestion create regles:
app.post('/createregles', (req, res) => {
  const titre = req.body.titre;
  const resume=req.body.resume;
  const description= req.body.description;
  const image= req.body.image;
  const video = req.body.video;
  const regles = {
      titre: titre,
      resume: resume,
      description: description,
      image: image,
      video:video
  }
  connection.query('INSERT INTO `Regles` SET ?', regles, (err) => {
      if (err) throw err;
      console.log('Data inserted');
      return res.redirect('/');
  });
});
// EDIT PAGE
app.get('createregles/edit/:id', (req, res) => {
  const edit_reglesId = req.params.id;
  // FIND POST BY ID
  connection.query('SELECT * FROM `Regles` WHERE id=?',[edit_reglesId] , (err, results) => {
      if (err) throw err;
      res.render('edit',{
          regles:results[0]
      });
  });
});
// POST UPDATING
app.post('createregles/edit/:id', (req, res) => {
  const update_titre = req.body.titre;
  const update_resume = req.body.resume;
  const update_description = req.body.description;
  const update_image = req.body.author_name;
  const update_video = req.body.video;
  const idRegles = req.params.id;
  connection.query('UPDATE `Regles` SET titre = ?, resume = ?, description = ?, image=?, video=? WHERE idRegles = ?', [update_titre, update_resume, update_description,update_image,update_video, idRegles], (err, results) => {
      if (err) throw err;
      if(results.changedRows === 1){
          console.log('Post Updated');
          return res.redirect('/');
      }
  });
});

// POST DELETING
app.get('/regles/delete/:id', (req, res) => {
  connection.query('DELETE FROM `regles` WHERE idRegles = ?', [req.params.id], (err, results) => {
      if (err) throw err;
      res.redirect('/');
  });
});
app.use('/regles',(req,res) => {
  res.status(404).send('<h1>404 Page Not Found!</h1>');
});

// IF DATABASE CONNECTION IS SUCCESSFUL
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
  // app.listen(3000);
});




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
    methods: ["*"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});
instrument(io, {
  auth: false
});

app.use(express.static("public"))
app.get('/', (req, res) => {
  res.sendFiles(`/var/www/html/Scrumble/Jeu/views/jeu.html`);
});
app.get('/rooms', (r, res)=>{res.json(rooms)})
http.listen(port, () => {
  console.log(`listening on http://localhost:3018/`);
});

// attention toujours le pb  des routes car port 3000 est toujours utilisé donc 3020
// creation d'une session de jeu
//  const players=[]; 
 let rooms = []; // toutes les rooms qui existe
console.log("rooms",rooms);
// creation de la socket permettant de donnecter les différents joueurs

io.on('connection', (socket) => { // connection de la socket grace a l'evenement on connection
  console.log(`[connection],${socket.id}`);//log sur l'evt connection et récupère l'id de sa socket
  socket.emit('socketnecessaireaconnection',`${socket.id}`);

  let stocksys=[];
  socket.on('joeuers',(sysJson)=>{ 
    const state=JSON.parse(sysJson);
    console.log('[joeuers]',state);
    stocksys.push(state);
  
    let sysstateencommun=JSON.stringify( stocksys);
    console.log( '[sysstateencommun]',sysstateencommun);
    socket.broadcast.emit( 'statejoueurscommun', sysstateencommun);
});
let listplayer=[];
  socket.on('playerData', (player) => { //création d'un event playerData avec por nature d'evt une fonction fléché de creation de room
    console.log(`[playerData],${player.username},[connection],${socket.id},${player}`);// récupération de data username et player
    let room = null; //etat initial pas de room crée
      if(roomId!=null){listplayer.push(player);
      console.log( 'listplayer',listplayer);}
    
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

      listplayer.push(player.username);
      
      socket.emit('listplayername',listplayer);
      console.log('listplayername')
    }
    //  socket.on('playernbre',(nbreplayer)=>{
    //   console.log(`[playerNbre],${nbreplayer.nbre}`);
    // })
    socket.join(room.id);
 
    // socket.broadcast.emit("listplayer",player);
    // console.log('[listplayer]',player);
 
    io.to(socket.id).emit('join room', room.id);

    // le 2 va changer pour être remplacé par nbreplayer.nbre
    // if (room.players.length === 2) {//si 
    //   io.to(room.id).emit('start game', room.players);
    // }

  }) ;
 

  // socket.on('getRooms', ()=>{

  //   io.to(socket.id).emit('listRooms', rooms);
  // })
  // socket.on('statejoueur',()=>{
  //   console.log('[statejouers]',joueurs,state);
  // })
 

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