// Creamos una constante con el valor correcto
const numCorrecto = 14;

// Metemos en una variable el número introducido
// por el usuario convertido a número
let resUsuario = parseInt(prompt('Introduce la suma de 5 + 9'));

// comprobamos
// Si es correcto:
if (resUsuario == numCorrecto){
    document.write('<h1>¡Enhorabuena Máquina!');

// Si no: 
}else if (isNaN(resUsuario)){
    alert('Debes introducir un número');
    window.location.reload();
}else{
    // Alerta de error
    alert('La suma introducida no es correcta: Prueba de nuevo');
    // recargamos página
    window.location.reload();
}