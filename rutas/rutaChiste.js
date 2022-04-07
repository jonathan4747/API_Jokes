const express = require ('express');
const ChisteRouter = express.Router();

const ControladorChiste = require('./../controladores/controladorChiste')

ChisteRouter.post('/new',ControladorChiste.insertarChiste);
ChisteRouter.get('',ControladorChiste.obtenerChistes);
ChisteRouter.put('/update',ControladorChiste.actualizarChiste)
ChisteRouter.delete('/delete/:id',ControladorChiste.deleteChiste)
ChisteRouter.get('/:id',ControladorChiste.obtenerChiste);
module.exports=ChisteRouter