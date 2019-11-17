'use strict';

const inputFiltro = document.querySelector('#txt-filtro');
const tableBody = document.querySelector('#tbl-usuarios tbody');

let llenarTabla = async () => {
    let filtro = inputFiltro.value.toLowerCase();
    let listaUsuarios = await listarUsuarios();
    console.log(listaUsuarios);

    tableBody.innerHTML = '';

    for (let i = 0; i < listaUsuarios.length; i++) {
        let nombre = listaUsuarios[i]['primerNombre'].toLowerCase();
        let primerApellido = listaUsuarios[i]['primerApellido'].toLowerCase();
        let segundoApellido = listaUsuarios[i]['segundoApellido'].toLowerCase();
        let correo = listaUsuarios[i]['correo'].toLowerCase();

        if (nombre.includes(filtro) || primerApellido.includes(filtro) || segundoApellido.includes(segundoApellido) || correo.includes(filtro)) {
            let fila = tableBody.insertRow();
            fila.insertCell().innerHTML = listaUsuarios[i]['primerNombre'];
            fila.insertCell().innerHTML = listaUsuarios[i]['primerApellido'];
            fila.insertCell().innerHTML = listaUsuarios[i]['segundoApellido'];
            fila.insertCell().innerHTML = listaUsuarios[i]['genero'];
            fila.insertCell().innerHTML = listaUsuarios[i]['correo'];
        };
    };
};

llenarTabla();

inputFiltro.addEventListener('keyup', llenarTabla);