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
    var segundonombre = document.getElementById("apell");
    var correo = document.getElementById("email");

    if(nombre.value == "")
    {   
        alert("Debe ingresar todos los campos.");
        return;
    }
    if(segundonombre.value == "")
    {
        alert("Debe ingresar todos los campos.");
        return;
    }
    if(correo.value == "")
    {
        alert("Debe ingresar todos los campos.");
        return;
    }

    var formulario = document.getElementById("respuesta");
    formulario.submit();
        
}
