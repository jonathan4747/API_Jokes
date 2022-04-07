const express = require('express');
require('./config/config');
const app=express();
const ChisteRouter = require('./rutas/rutaChiste')

app.use(express.json() );
app.use('/api/jokes',ChisteRouter)

app.listen (8080,()=>{
    console.log("el servidor se encuentra corriendo en el puerto 8080")
})