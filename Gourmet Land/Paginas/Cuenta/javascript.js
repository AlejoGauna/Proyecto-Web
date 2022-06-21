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
        alert("Debe ingresar todos los campos.");
        return;
    }
    if(usuario.value == "")
    {
        alert("Debe ingresar todos los campos.");
        return;
    }
    if(pass.value == "")
    {
        alert("Debe ingresar todos los campos.");
        return;
    }

    var formulario = document.getElementById("respuesta");
    formulario.submit();
        
}


//confirmacion de datos
function pregunta()
{
    if(confirm('¿Estas seguro de enviar los datos?')){
        document.miformulario.submit()
    }
}