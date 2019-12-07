'use strict';

const inputPrimerNombre = document.querySelector('#primerNombre_txt');
const inputSegundoNombre = document.querySelector('#segundoNombre_txt');
const inputPrimerApellido = document.querySelector('#primerApellido_txt');
const inputSegundoApellido = document.querySelector('#segundoApellido_txt');
const dataListGenero = document.querySelector('#txt_genero');
const inputDireccion = document.querySelector('#direccion_txt');
const sltProvincias = document.querySelector('#provincias');
const sltCantones = document.querySelector('#cantones');
const sltDistritos = document.querySelector('#distritos');
const btnGuardarCambios = document.querySelector('#Btn_guardarCambios');


const idUsuario = sessionStorage.getItem('idUsuario');


const primerNombre = sessionStorage.getItem('primerNombre');
const segundoNombre = sessionStorage.getItem('segundoNombre');
const primerApellido = sessionStorage.getItem('primerApellido');
const segundoApellido = sessionStorage.getItem('segundoApellido');
const genero = sessionStorage.getItem('genero');
//const provincia = sessionStorage.getItem('provincia');
//const canton = sessionStorage.getItem('canton');
//const distrito = sessionStorage.getItem('distrito');
const direccion = sessionStorage.getItem('direccion');


let llenarForm = () => {

    inputPrimerNombre.setAttribute('placeholder', `${primerNombre}`);
    inputSegundoNombre.setAttribute('placeholder', `${segundoNombre}`);
    inputPrimerApellido.setAttribute('placeholder', `${primerApellido}`);
    inputSegundoApellido.setAttribute('placeholder', `${segundoApellido}`);
    dataListGenero.setAttribute('placeholder', `${genero}`);
    //sltProvincias.setAttribute('placeholder', `${provincia}`);
    //sltCantones.setAttribute('placeholder', `${canton}`);
    //sltDistritos.setAttribute('placeholder', `${distritos}`);
    inputDireccion.setAttribute('placeholder', `${direccion}`);
}

let validar = () => {
    let error = false;

    if (inputPrimerNombre.value == 0) {
        error = true;
        inputPrimerNombre.classList.add('error');
    } else {
        inputPrimerNombre.classList.remove('error');
    }


    if (inputPrimerApellido.value == 0) {
        error = true;
        inputPrimerApellido.classList.add('error');
    } else {
        inputPrimerApellido.classList.remove('error');
    }


    if (dataListGenero.value == 0) {
        error = true;
        dataListGenero.classList.add('error');
    } else {
        dataListGenero.classList.remove('error');
    }

    if (inputDireccion.value == 0) {
        error = true;
        inputDireccion.classList.add('error');
    } else {
        inputDireccion.classList.remove('error');
    }


    if (sltProvincias.value == 0) {
        error = true;
        sltProvincias.classList.add('error');
    } else {
        sltProvincias.classList.remove('error');
    }

    if (sltCantones.value == 0) {
        error = true;
        sltCantones.classList.add('error');
    } else {
        sltCantones.classList.remove('error');
    }

    if (sltDistritos.value == 0) {
        error = true;
        sltDistritos.classList.add('error');
    } else {
        sltDistritos.classList.remove('error');
    }

    return error;
}

let obtenerDatos = async() => {

    let primerNombre = inputPrimerNombre.value;
    let segundoNombre = inputSegundoNombre.value;
    let primerApellido = inputPrimerApellido.value;
    let segundoApellido = inputSegundoApellido.value;
    let genero = dataListGenero.value;
    let direccion = inputDireccion.value;
    let provincia = sltProvincias.value;
    let canton = sltCantones.value;
    let distrito = sltDistritos.value;


    if (validar()) {

        Swal.fire({
            icon: 'warning',
            title: 'Algunos campos se encuentran vacíos o son incorrectos',
            text: 'Por favor inténtelo de nuevo',
            confirmButtonText: 'Entendido'
        })

    } else {
        let error = await editarInformacionUsuario(idUsuario, primerNombre, segundoNombre, primerApellido, segundoApellido, genero, direccion, provincia, canton, distrito);

        if (error.resultado == false) {

            Swal.fire({
                icon: 'warning',
                title: 'La información del perfil no se ha podido editar correctamente',
                text: 'Por favor revise los campos en rojo',
                confirmButtonText: 'Entendido'
            })
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Cambios realizados con éxito',
                text: 'La información del perfil ha sido modificado',
                confirmButtonText: "Entendido",
                onClose: function() {
                    sessionStorage.removeItem('primerNombre');
                    sessionStorage.removeItem('segundoNombre');
                    sessionStorage.removeItem('primerApellido');
                    sessionStorage.removeItem('segundoApellido');
                    sessionStorage.removeItem('genero');
                    sessionStorage.removeItem('direccion');
                    sessionStorage.removeItem('provincia');
                    sessionStorage.removeItem('canton');
                    sessionStorage.removeItem('distrito');
                    location.href = 'perfil-administrador.html';
                }
            });
        }

        inputPrimerNombre.value = '';
        inputSegundoNombre.value = '';
        inputPrimerApellido.value = '';
        inputSegundoApellido.value = '';
        dataListGenero.value = '';
        inputDireccion.value = '';

    }

}

llenarForm();
btnGuardarCambios.addEventListener('click', obtenerDatos);