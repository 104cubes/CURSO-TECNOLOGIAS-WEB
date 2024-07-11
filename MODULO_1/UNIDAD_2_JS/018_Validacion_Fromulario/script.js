const formulario = document.getElementById('formularioRegistro');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const telefonoRegex = /^[0-9]{9}$/;

formulario.addEventListener('submit', function (e) {
// PRevenimos el envío del formulario
    e.preventDefault();
    // Obtenemos el string del valor introducido en el campo email
    const email = document.getElementById('email').value;
    // Comprobamos si pasa el test de la expresión regular
    if (!emailRegex.test(email)) {
        alert('Pon un email válido con @ y extensión');
    }
    // Obtenemos el valor introducido en el campo telefono
    const telefono = document.getElementById('telefono').value;
    // Comprobamos si el teléfono pasa el test
    if (!telefonoRegex.test(telefono)) {
        alert('Teléfono no es válido. Debe contener solo 9 dígitos.');
    }
    // Obtenemos el valor introducido en el campo fecha de nacimiento
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    // Convertimos la fecha de nacimiento a un objeto Date
    let fechaNacimientoDate = new Date(fechaNacimiento);
    console.log(fechaNacimientoDate)
    // Obtenemos la fecha actual
    let fechaActual = new Date();

    // Calculamos la edad restando el año
    let edad = fechaActual.getFullYear() - fechaNacimientoDate.getFullYear();

// Ajustamos la edad si la fecha de cumpleaños no ha ocurrido aún este año
    // Obtenemos los aprámetros por separado, mes y día
    let mesNacimiento = fechaNacimientoDate.getMonth();
    let diaNacimiento = fechaNacimientoDate.getDate();
    // Obtenemos los aprámetros por separado, mes y día de la fecha actual
    let mesActual = fechaActual.getMonth();
    let diaActual = fechaActual.getDate();
    // Si el mes actual es menor que el mes de nacimiento 
    // o bien son iguales pero el día de nacimiento es menor que el día actual
    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
        // Entonces restamos un al resultado de edad.
        edad--;
    }
    // Se la edad es menor de 18 
    if (edad < 18){
        alert("debes ser mayor de edad para entrar");
    }

})