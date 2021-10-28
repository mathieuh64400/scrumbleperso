require('./config/config');
require('./models/db');
require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const rtsIndex = require('./routes/index.js');
const dayliroute =require('./routes/daylicartes.js');
const cartepb =require('./routes/pbcarte');
const revuecarte=require('./routes/revuescartes');
const regles=require('./routes/regles');
const role=require('./routes/roles');
var app = express();
const fs = require("fs");

// middleware
app.use(bodyParser.json());
app.use(cors({origin:'*'}));// cas du paquet1
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


app.use(passport.initialize());
app.use('/api', rtsIndex);
app.use('/api',dayliroute);
app.use('/api',cartepb);
app.use('/api',revuecarte);
app.use('/api',regles);
app.use('/api',role);

// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
    
});

// start server
app.listen(process.env.PORT, () => console.log(`Server started at http://localhost:${process.env.PORT}`));