const Chiste = require('./../modelos/modeloChiste')

const insertarChiste = (request,response)=>{
    const{id,pregunta,respuesta}=request.body;
    if (!pregunta || !id || !respuesta){
        response.statusMessage="Para crear un nuevo Chiste tiene estar todos los campos.";
        return response.status(406).end();   
    }
   else{
        const nuevoChiste ={
            pregunta,id,respuesta
        };

        Chiste.create(nuevoChiste)
            .then(datoNuevo=>{
                return response.status(201).json(datoNuevo);
            })
            .catch(err=>{
                response.statusMessage="Hubo un error al ejecutar el insert. "+err;
                return response.status(400).end();
            })
       }  
}

const obtenerChistes= (request,response)=>{
    Chiste.find()
        .then(listaChistes=>{
            return response.status(200).json(listaChistes);
        })
        .catch (err=>{
            response.statusMessage="Hubo un error al ejecutar el find. "+err;
            return response.status(400).end();
        });
}
const actualizarChiste = (request,response)=>{
    const {id ,pregunta,respuesta}=request.body;
    const ChisteActualizado = {
        id,pregunta,respuesta
    };
    
    Chiste.findOneAndUpdate({id},{$set: ChisteActualizado},{new:true})
        .then((datoChiste)=>{
            return response.status(202).json(datoChiste);
        })
        .catch (err=>{
            response.statusMessage="Hubo un error al ejecutar el update. "+err;
            return response.status(400).end();
        });
        
}

const deleteChiste = (request,response)=>{
    const{id}=request.params;
    
    Chiste.deleteOne({id})
        .then(()=>{
            return response.status(204).end();
        })
        .catch (err=>{
            response.statusMessage="Hubo un error al ejecutar el delete. "+err;
            return response.status(400).end();
        });
    
}
const obtenerChiste= (request,response)=>{
    const{id}=request.params;
    Chiste.findOne({id})
        .then(Chiste=>{
            return response.status(200).json(Chiste);
        })
        .catch (err=>{
            response.statusMessage="Hubo un error al ejecutar el find. "+err;
            return response.status(400).end();
        });
}
const ControladorChiste ={
    insertarChiste,
    obtenerChistes,
    actualizarChiste,
    deleteChiste,
    obtenerChiste
}

module.exports = ControladorChiste