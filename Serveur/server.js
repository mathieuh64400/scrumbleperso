const dotenv = require("dotenv");
const express = require('express');
const mongoose = require('mongoose');
const jsonwebtoken = require("jsonwebtoken");
const socket = require('socket.io');

const routes = require('./routes/routes.js')
const daylicarte = require('./routes/daylicarte.js');
const revuecarte = require('./routes/revuecartes.js');
const pbcartes = require('./routes/pbcartes.js');
const roles = require('./routes/role.js');


const app = express();
const cors = require('cors');

const http = require('http').createServer(app);
const port = 3018;
const port2 = 3050;
const bodyParser = require('body-parser');
const fs = require("fs");
const {
  instrument
} = require("@socket.io/admin-ui");

// import routes
const authRoutes = require("./routes/auth");
const dashboardRoutes = require("./routes/dashboard");
const verifyToken = require("./routes/validate-token");


// const postsRoute= require('./routes/posts');
// app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
// app.use('/posts',postsRoute)
// routes:
app.get('/', (req, res) => {
  res.send('hello');
})



dotenv.config();
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions))
// cas du json:


let paquet11 = require("./models/paquet1.1.json");

app.get('/paquet1.1', (req, res) => {
  try {
    res.json(paquet11);
    console.log(paquet11);
  } catch (error) {
    console.log(error)
  }

});
const saves = () => {
  fs.writeFile(
    "./models/paquet1.1.json",
    JSON.stringify(paquet11, null, 2),
    (error) => {
      if (error) {
        throw error;
      }
    }
  );
};

//Create(C) in CRUD
app.post("/paquet1.1", bodyParser.json(), (req, res) => {
  try {
    paquet11.push(req.body);
    saves();
    res.json({
      status: "success",
      stateInfo: req.body,
    });
  } catch (error) {
    console.log(error);

  }

});

// update sur paquet1conf1
app.put("/paquet1.1/:id", bodyParser.json(), (req, res) => {
  paquet1 = paquet1.map((paquet) => {
    console.log(paquet);
    if (paquet.id === Number(req.params.id)) {
      return req.body;
    } else {
      return paquet;
    }
  });
  saves();
  res.json({
    status: "success",
    paquetInfo: req.body,
  });
});
app.delete("/paquet1.1/:id", (req, res) => {
  paquet11 = paquet11.filter((paquet) => paquet.id !== Number(req.params.id));
  saves();
  res.json({
    status: "success",
    removed: req.params.id,
    newLength: paquet1.length,
  });
});
console.log(paquet11);

// cas du paquet1
let paquet1 = require("./models/paquet1.json");
//save function
const save = () => {
  fs.writeFile(
    "./models/paquet1.json",
    JSON.stringify(paquet1, null, 2),
    (error) => {
      if (error) {
        throw error;
      }
    }
  );
};


//Read(R) in CRUD
app.get("/paquet1", (req, res) => {
  res.json(paquet1);
});

//Create(C) in CRUD
app.post("/paquet1", bodyParser.json(), (req, res) => {
  paquet1.push(req.body);
  save();
  res.json({
    status: "success",
    stateInfo: req.body,
  });
});
// put
app.put("/paquet1/:id", bodyParser.json(), (req, res) => {
  paquet1 = paquet1.map((paquet) => {
    console.log(paquet);
    if (paquet.id === Number(req.params.id)) {
      return req.body;
    } else {
      return paquet;
    }
  });
  save();
  res.json({
    status: "success",
    paquetInfo: req.body,
  });
});

app.delete("/paquet1/:id", (req, res) => {
  paquet1 = paquet1.filter((paquet) => paquet.id !== Number(req.params.id));
  save();
  res.json({
    status: "success",
    removed: req.params.id,
    newLength: paquet1.length,
  });
});


// fin partie json
// Listen to server
// Connect to MongoDB database

mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true
  }, console.log("db connecté!!"))
  .then(() => {
    const app = express()
    app.use(express.json())
    
    app.use(cors(corsOptions))
    app.use("/api", routes);
    app.use("/api", daylicarte);
    app.use("/api", revuecarte);
    app.use("/api", pbcartes);
    app.use("/api", roles);
    app.use("/api/user", authRoutes);
    app.use("/api/dashboard", verifyToken, dashboardRoutes);


    app.listen(port2, () => {
      console.log(`Server running at http://localhost:${port2}`);
    })
  });





// // socket part
// const io = require('socket.io')(http, {
//   cors: {
//     origin: "*",
//     methods: ["*"],
//     allowedHeaders: ["my-custom-header"],
//     credentials: true
//   }
// });
// instrument(io, {
//   auth: false
// });

// app.use(express.static("public"))
// // app.get('/', (req, res) => {
// //   res.sendFiles(`/var/www/html/Scrumble/Jeu/views/jeu.html`);
// // });
// app.get('/rooms', (r, res) => {
//   res.json(rooms)
// })
// http.listen(port, () => {
//   console.log(`listening on http://localhost:3018`);
// });

// // attention toujours le pb  des routes car port 3000 est toujours utilisé donc 3020
// // creation d'une session de jeu
// //  const players=[]; 
// let rooms = []; // toutes les rooms qui existe
// console.log("rooms", rooms);
// // creation de la socket permettant de donnecter les différents joueurs

// io.on('connection', (socket) => { // connection de la socket grace a l'evenement on connection
//   console.log(`[connection],${socket.id}`); //log sur l'evt connection et récupère l'id de sa socket
//   socket.emit('socketnecessaireaconnection', `${socket.id}`);

//   let stocksys = [];
//   socket.on('joeuers', (sysJson) => {
//     const state = JSON.parse(sysJson);
//     console.log('[joeuers]', state);
//     stocksys.push(state);

//     let sysstateencommun = JSON.stringify(stocksys);
//     console.log('[sysstateencommun]', sysstateencommun);
//     socket.broadcast.emit('statejoueurscommun', sysstateencommun);
//   });
//   let listplayer = [];
//   socket.on('playerData', (player) => { //création d'un event playerData avec por nature d'evt une fonction fléché de creation de room
//     console.log(`[playerData],${player.username},[connection],${socket.id},${player}`); // récupération de data username et player
//     let room = null; //etat initial pas de room crée
//     if (roomId != null) {
//       listplayer.push(player);
//       console.log('listplayer', listplayer);
//     }

//     if (!player.roomId) { //si le player n'est pas lé a une valeur Id de room
//       console.log("ping0");
//       room = createRoom(player); //creation de la room (session) pour 

//       console.log(`[createRoom],${room.id}-${player.username},${player.roomId}`); //
//     } else {
//       room = rooms.find(r => r.id === player.roomId);
//       console.log("ping1");
//       if (room === undefined) {
//         console.log("ping2");
//         return;
//       }
//       player.roomId = room.id;
//       room.players.push(player);
//       console.log("ping3");

//       listplayer.push(player.username);

//       socket.emit('listplayername', listplayer);
//       console.log('listplayername')
//     }
//     //  socket.on('playernbre',(nbreplayer)=>{
//     //   console.log(`[playerNbre],${nbreplayer.nbre}`);
//     // })
//     socket.join(room.id);

//     // socket.broadcast.emit("listplayer",player);
//     // console.log('[listplayer]',player);

//     io.to(socket.id).emit('join room', room.id);

//     // le 2 va changer pour être remplacé par nbreplayer.nbre
//     // if (room.players.length === 2) {//si 
//     //   io.to(room.id).emit('start game', room.players);
//     // }

//   });


//   // socket.on('getRooms', ()=>{

//   //   io.to(socket.id).emit('listRooms', rooms);
//   // })
//   // socket.on('statejoueur',()=>{
//   //   console.log('[statejouers]',joueurs,state);
//   // })


// });

// // creation des rooms: salons de jeux 
// function createRoom(player) {
//   const room = { // definition d'une room caracteriser par un id de room et  un joueur associé
//     id: roomId(),
//     players: []
//   };
//   player.roomId = room.id; //un player  a un id associé a un room.id
//   room.players.push(player); //ajout des rooms dans un tableau
//   rooms.push(room); // liste des rooms mis dans le tableau des rooms 

//   return room
// }

// function roomId() {
//   return Math.random().toString(36).substr(2, 20);
// }