'use strict';

const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema(
    {

    primerNombre: { type: String, required: true, unique: false },
    segundoNombre: { type: String, required: false, unique: false },
    primerApellido: { type: String, required: true, unique: false },
    segundoApellido: { type: String, required: false, unique: false },
    correo: { type: String, required: true, unique: true },
    fechaDeNacimiento: { type: Date, required: true, unique: false },
    genero: { type: String, required: true, unique: false },
    provincia: { type: String, required: true, unique: false },
    canton: { type: String, required: true, unique: false },
    distrito: { type: String, required: true, unique: false },
    direccion: { type: String, required: true, unique: false },
    estado: { type: String, required: true },
    contrasenna: {type: String, required: true, unique: false},
    tarjeta:[
        {
            
        }
    ]



}
);

module.exports = mongoose.model('Usuario', usuarioSchema, 'usuarios');