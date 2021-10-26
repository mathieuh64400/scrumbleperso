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
const role=require('./routes/roles');
var app = express();

// middleware
app.use(bodyParser.json());
app.use(cors({origin:'*'}));
app.use(passport.initialize());
app.use('/api', rtsIndex);
app.use('/api',dayliroute);
app.use('/api',cartepb);
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