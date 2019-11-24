'use strict';
const header = document.querySelector('#btns-header');
const botonesHeader = document.querySelectorAll('#btns-header a');
const btnCerrarSesion = document.querySelector('#btn-cerrarSesion');
let conectado = sessionStorage.getItem('conectado');
let gradoUsuario = sessionStorage.getItem('gradoUsuario');

let containerFoto = document.querySelector('#foto-usuario');

let fotoUsuario = document.createElement('img');
let imagenUsuario = sessionStorage.getItem('fotoUsuario');
fotoUsuario.src = `${imagenUsuario}`;

containerFoto.appendChild(fotoUsuario);


//botonesHeader[4].appendChild(perfilUsuario);


if (conectado) {
    botonesHeader[0].classList.add('ocultar');
    botonesHeader[1].classList.add('ocultar');

    if (gradoUsuario == 1) {

        let boton = botonesHeader[4];
        boton.setAttribute('href', 'perfil-administrador.html');
    }

} else {
    botonesHeader[2].classList.add('ocultar');
    botonesHeader[3].classList.add('ocultar');
    botonesHeader[4].classList.add('ocultar');
}



let cerrarSesion = () => {
    sessionStorage.clear();
    window.location.href = 'index.html';
}

btnCerrarSesion.addEventListener('click', function(event){
    event.preventDefault();
 
    Swal.fire({
        title: '¿Desea cerrar la sesión?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
    })
    .then((resultado) => {
        if(resultado.value) {
            cerrarSesion();
        }
    });

});