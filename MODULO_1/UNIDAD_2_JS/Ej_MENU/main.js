// script.js
function anadirEntrante() {
    let nuevoEntrante = prompt("Introduce el nuevo entrante:");
    if (nuevoEntrante) {
        let listaEntrantes = document.getElementById('listaEntrantes');
        let li = document.createElement('li');
        li.textContent = nuevoEntrante;
        listaEntrantes.appendChild(li);
    }
}

function borrarEntrante() {
    let listaEntrantes = document.getElementById('listaEntrantes');
    let indice = prompt("Introduce el número del entrante a borrar (1, 2, 3, ...):");
    if (indice && !isNaN(indice)) {
        indice = parseInt(indice) - 1;
        if (indice >= 0 && indice < listaEntrantes.children.length) {
            listaEntrantes.removeChild(listaEntrantes.children[indice]);
        } else {
            alert("Índice inválido.");
        }
    }
}

function escogerEntrante() {
    let listaEntrantes = document.getElementById('listaEntrantes');
    let indice = prompt("Introduce el número del entrante a escoger (1, 2, 3, ...):");
    if (indice && !isNaN(indice)) {
        indice = parseInt(indice) - 1;
        if (indice >= 0 && indice < listaEntrantes.children.length) {
            document.getElementById('entPedido').textContent = listaEntrantes.children[indice].textContent;
        } else {
            alert("Índice inválido.");
        }
    }
}

function anadirPlato() {
    let nuevoPlato = prompt("Introduce el nuevo plato principal:");
    if (nuevoPlato) {
        let listaPlatos = document.getElementById('listaPlatos');
        let li = document.createElement('li');
        li.textContent = nuevoPlato;
        listaPlatos.appendChild(li);
    }
}

function borrarPlato() {
    let listaPlatos = document.getElementById('listaPlatos');
    let indice = prompt("Introduce el número del plato a borrar (1, 2, 3, ...):");
    if (indice && !isNaN(indice)) {
        indice = parseInt(indice) - 1;
        if (indice >= 0 && indice < listaPlatos.children.length) {
            listaPlatos.removeChild(listaPlatos.children[indice]);
        } else {
            alert("Índice inválido.");
        }
    }
}

function escogerPlato() {
    let listaPlatos = document.getElementById('listaPlatos');
    let indice = prompt("Introduce el número del plato a escoger (1, 2, 3, ...):");
    if (indice && !isNaN(indice)) {
        indice = parseInt(indice) - 1;
        if (indice >= 0 && indice < listaPlatos.children.length) {
            document.getElementById('platoPedido').textContent = listaPlatos.children[indice].textContent;
        } else {
            alert("Índice inválido.");
        }
    }
}

function anadirPostre() {
    let nuevoPostre = prompt("Introduce el nuevo postre:");
    if (nuevoPostre) {
        let listaPostres = document.getElementById('listaPostres');
        let li = document.createElement('li');
        li.textContent = nuevoPostre;
        listaPostres.appendChild(li);
    }
}

function borrarPostre() {
    let listaPostres = document.getElementById('listaPostres');
    let indice = prompt("Introduce el número del postre a borrar (1, 2, 3, ...):");
    if (indice && !isNaN(indice)) {
        indice = parseInt(indice) - 1;
        if (indice >= 0 && indice < listaPostres.children.length) {
            listaPostres.removeChild(listaPostres.children[indice]);
        } else {
            alert("Índice inválido.");
        }
    }
}

function escogerPostre() {
    let listaPostres = document.getElementById('listaPostres');
    let indice = prompt("Introduce el número del postre a escoger (1, 2, 3, ...):");
    if (indice && !isNaN(indice)) {
        indice = parseInt(indice) - 1;
        if (indice >= 0 && indice < listaPostres.children.length) {
            document.getElementById('postrePedido').textContent = listaPostres.children[indice].textContent;
        } else {
            alert("Índice inválido.");
        }
    }
}
