const lista = document.getElementById('lista');
let ciudades = [];
for (i = 1; i < 5; i++) {
    let ciudad = prompt("Escribe el nombre de la ciudad " + i);
    if (!ciudad){
        i--;
        continue;
    }
    ciudades.push(ciudad);
    lista.innerHTML = lista.innerHTML + "<li>" + ciudad + "</li>";
}
function eliminar(){
    lista.innerHTML = "";
    let ciudadEliminar = prompt("Pon el número de orden de la ciudad que qjuieres eliminar");
    if (ciudadEliminar < 1 || ciudadEliminar >= ciudades.length || isNaN(ciudadEliminar)){
        alert("Debes introducir un número entre el 1 y el " + ciudades.length);
        return eliminar();
        elemento.append="El html ";
    }
    
    ciudades.splice(ciudadEliminar-1, 1);
    ciudades.forEach(function(ciudad){
        lista.innerHTML = `${lista.innerHTML} <li>${ciudad}</li>`; 
    })
}

let person = {
    "firstName": "John",
    "lastName": "Doe",
    "age": 50,
    "eyeColor": "blue"
}


/*

lista = [
    {
        "pais": "españa",
        "ciudad": "barcelona"
    },
    {
        "pais": "españa",
        "ciudad": "barcelona"
    },
    {
        "pais": "alemania",
        "ciudad": "berlin"
    },
];

lista[0].ciudad // barcelona
*/
