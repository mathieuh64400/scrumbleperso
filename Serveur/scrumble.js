// const express = require("express")
// const cors = require("cors")
// const app = express()



// app.use(express.json())
// app.use(cors({}))

// app.get("/regles", (req, res) => {
//     const regles = require('./data/regles.json')

//     res.json(regles)
// })

// app.listen(3000, ()=>{
//     console.log("server listening on port 3000");
// })
const io =require('socket.io')(3000, {
    cors:{
        origin:['http://localhost:8080'],
    },
});
io.on('connection',socket =>{
    console.log(socket.id)
});