const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
   ];

document.write(matriz[0][2]+ ", " +matriz[1][1]);
document.write("<hr>"); 

matriz.forEach(elPrimario => {
    elPrimario.forEach(elSecundario=>{
        document.write(elSecundario+ "|");
    })
    document.write("<br>");
});
document.write("<hr>");


matriz.forEach(el =>{
    el.forEach(elSec=>{
        if (elSec%3 == 0)
            elSec = "m";
        document.write(elSec+ ",");
    })
    document.write("<br>");
})



const persona = {};

persona.nombre = "Juan";
persona.apellido = "Nadie";
persona.edad = 50
persona.ojosColor = "azul";
const el = document.getElementById('eldiv');
for (const x in persona) {
    el.innerHTML =`${el.innerHTML}${x}: ${persona[x]}<br>`;
}


let fechaEspecifica = new Date();
alert(fechaEspecifica.getTime());