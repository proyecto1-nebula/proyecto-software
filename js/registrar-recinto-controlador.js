'use strict';

/*
Nombre
Direccion exacta
Ubicacion en mapa
Canton
Distrito
Capacidad (cantidad asientos tradicionales + discapacidados)

*/


const input_nombreRecinto = document.querySelector('#txt-nombreRecinto');
const input_capacidad = document.querySelector('#txt-capacidad');
const input_capacidadDiscapacitado = document.querySelector('#txt-capacidadDiscapacitado');

const input_direccion = document.querySelector('#direcciones');
const input_provincia = document.querySelector('#provincias');
const input_canton = document.querySelector('#cantones');
const input_distrito = document.querySelector('#distritos');

/*
const input_latitud = document.querySelector("#latitud");
const input_longitud = document.querySelector("#longitud");
*/

// Falta la geolocalizacion


const btn_guardar = document.querySelector('#btn-registrar');

let validar = () => {
    let error = false;
    let errorCodigo = 0;

    let z1 = /^[0-9]*$/; // 0 o mas
    let z2 = /^[0-9]+$/; // 1 o mas




    if (input_nombreRecinto.value == "" || input_nombreRecinto.value == " " || input_nombreRecinto.value == 0) {
        error = true;
        input_nombreRecinto.classList.add("error");
        errorCodigo = 1;
    } else {
        input_nombreRecinto.classList.remove("error");
    };

    if (input_capacidad.value == "" || input_capacidad.value == " " || input_capacidad.value == 0) {
        error = true;
        input_capacidad.classList.add("error");
        errorCodigo = 2;
    } else {
        input_capacidad.classList.remove("error");
    };

    if (!z2.test(input_capacidad.value)) {
        error = true;
        input_capacidad.classList.add("error");
        errorCodigo = 2;

    } else {
        input_capacidad.classList.remove("error");
    }

    if (!z1.test(input_capacidadDiscapacitado.value)) {
        error = true;
        input_capacidadDiscapacitado.classList.add("error");
        errorCodigo = 2;
    } else {
        input_capacidadDiscapacitado.classList.remove("error");
    }

    // Valida si capacidad > capacidadDiscapacitados
    if (input_capacidad < input_capacidadDiscapacitado) {
        error = true;
        input_capacidad.classList.add("error");
        errorCodigo = 2;
    } else {
        input_capacidad.classList.remove("error");
    }


    if (input_direccion.value == "" || input_direccion.value == " " || input_direccion.value == 0) {
        error = true;
        input_direccion.classList.add("error");
        errorCodigo = 5;
    } else {
        input_direccion.classList.remove("error");
    };

    if (input_provincia.value == "" || input_provincia.value == " " || input_provincia.value == 0) {
        error = true;
        input_provincia.classList.add("error");
        errorCodigo = 6;
    } else {
        input_provincia.classList.remove("error");
    };

    if (input_canton.value == "" || input_canton.value == " " || input_canton.value == 0) {
        error = true;
        input_canton.classList.add("error");
        errorCodigo = 7;
    } else {
        input_canton.classList.remove("error");
    };

    if (input_distrito.value == "" || input_distrito.value == " " || input_distrito.value == 0) {
        error = true;
        input_distrito.classList.add("error");
        errorCodigo = 8;
    } else {
        input_distrito.classList.remove("error");
    };

    return error;



};


let resetForm = () => {
    input_nombreRecinto.value = '';
    input_capacidad.value = '';
    input_capacidadDiscapacitado.value = "";

    input_direccion.value = '';
    input_provincia.value = '';
    input_canton.value = '';
    input_distrito.value = '';
    input_latitud = "";
    input_longitud = "";
};
let obtener_datos = () => {

    let nombreRecinto = input_nombreRecinto.value;
    let capacidad = input_capacidad.value;
    let capacidadDiscapacitado = input_capacidadDiscapacitado.value;

    let direccion = input_direccion.value;
    let provincia = input_provincia.value;
    let canton = input_canton.value;
    let distrito = input_distrito.value;

    let latitud = input_latitud.value;
    let longitud = input_longitud.value;



    if (validar()) {

        Swal.fire({
            icon: 'warning',
            title: 'Algunos de los campos no se ingresaron correctamente.',
            text: 'Por favor, revise los campos en rojo.',
            confirmButtonText: 'OK'
        })


    } else {

        registrar_recinto(nombreRecinto, capacidad, capacidadDiscapacitado, direccion, provincia, canton, distrito, latitud, longitud);

        Swal.fire({
            icon: 'success',
            title: 'Registro realizado con éxito',
            text: 'El recinto ha sido almacenado',
            confirmButtonText: 'OK'
        });
        resetForm();
    }
};

btn_guardar.addEventListener('click', obtener_datos);