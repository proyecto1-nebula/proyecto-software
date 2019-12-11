'use strict';


let buscarUsuarioCorreo = async () => {

    let resultado;

    let userMail = sessionStorage.getItem('correoUsuario');

    await axios({
        method: 'get',
        url: `http://localhost:3000/api/buscar-usuario-correo/${userMail}`,
        responseType: 'json'
    })
    .then(async function(res){
        //console.log(res.data);
        resultado = await res.data;
    })
    .catch(function(err){
        console.log(err);
    });

    return resultado;

}

let eliminarEntrada = async () => {
    let resultado;

    await axios({
        method: 'post',
        url: '',
        responseType: 'json',
        data: {
            _id: _id
        }
    })
    .then(async function(res){
        console.log(res.data);
        resultado = await res.data;
    })
    .catch(function(err){
        console.log(err);
    });

    return resultado;
}
