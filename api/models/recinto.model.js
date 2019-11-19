'use strict';

const mongoose = require('mongoose');

const recintoSchema = new mongoose.Schema(

    {
        nombreRecinto: { type: String, required: true, unique: true },
        capacidad: { type: Number, required: true, unique: false },
        capacidadDiscapacitados: { type: Number, required: false, unique: false },
        correoEncargado: { type: String, required: true, unique: false },
        direccion: { type: String, required: true, unique: false },
        provincia: { type: String, required: true, unique: false },
        canton: { type: String, required: true, unique: false },
        distrito: { type: String, required: true, unique: false },
        imagen: { type: String, required: true, unique: false },
        latitud: { type: Number },
        longitud: { type: Number },

        estado: { type: String, required: true, unique: false }
    }

);

module.exports = mongoose.model('Recinto', recintoSchema, 'recintos');