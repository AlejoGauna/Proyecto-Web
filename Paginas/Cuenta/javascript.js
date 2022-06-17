window.onload = paginaCargada;

function paginaCargada()
{
    //Evento de capturar el envio del formulario:
    var boton = document.getElementById("enviodato");
    boton.onclick = validarFormulario;
};

//Funcion para validar todo el formulario:
function validarFormulario()
{
    var nombre = document.getElementById("name");
    var usuario = document.getElementById("user");
    var pass = document.getElementById("password");

    if(nombre.value == "")
    {   
        alert("debe ingresar todos los campos.");
        return;
    }
    if(usuario.value == "")
    {
        alert("debe ingresar todos los campos.");
        return;
    }
    if(pass.value == "")
    {
        alert("debe ingresar todos los campos.");
        return;
    }

    var formulario = document.getElementById("respuesta");
    formulario.submit();
        
}