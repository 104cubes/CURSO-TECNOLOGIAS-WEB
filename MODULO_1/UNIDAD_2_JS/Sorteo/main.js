
const inputName = document.getElementById('inputName');
const addBtn = document.getElementById('addBtn');
const nameList = document.getElementById('nameList');
const randomBtn = document.getElementById('randomBtn');

let names = [];


function addName() {
  const name = inputName.value.trim();

  if (name !== '') {
    names.push(name);
    inputName.value = '';
    const listItem = document.createElement('li');
    listItem.textContent = name;
    listItem.id = name;
    listItem.style.border="1px solid #CCC";
    listItem.style.borderRadius = "15px"
// Boton eliminar, evento y acción de eleimmiinar
    const botonEliminar= document.createElement('button');
    botonEliminar.textContent = "x";
    botonEliminar.style.backgroundColor="red"
    listItem.appendChild(botonEliminar);

    botonEliminar.addEventListener('click',function(){
      listItem.remove();
    })
// Fin añadir boton, evento y acción 
    nameList.appendChild(listItem);
  }
}
function renderizaLista(){
  nameList.innerHTML = "";
  names.forEach(name => {
    const listItem = document.createElement('li');
    listItem.textContent = name;
    listItem.id = name;
    listItem.style.border="1px solid #CCC";
    listItem.style.borderRadius = "15px"
// Boton eliminar, evento y acción de eleimmiinar
    const botonEliminar= document.createElement('button');
    botonEliminar.textContent = "x";
    botonEliminar.style.backgroundColor="red"
    listItem.appendChild(botonEliminar);

    botonEliminar.addEventListener('click',function(){
      listItem.remove();
    })
// Fin añadir boton, evento y acción 
    nameList.appendChild(listItem);
  });
}
function selectRandomName() {
  renderizaLista()
  if (names.length > 0) {
    const randomIndex = Math.floor(Math.random() * names.length);
    const selectedName = names[randomIndex];
    const selectedListItem = document.getElementById(selectedName);
    selectedListItem.style.backgroundColor = "yellow";
    
    selectedListItem.textContent += ` - Ganador: ${selectedName}`;
  } else {
    alert('¡No hay nombres en la lista!');
  }
}
window.addEventListener('keyup',function(e){
  if (e.key == "Enter"){
    addName()
  }
})
addBtn.addEventListener('click', addName);
randomBtn.addEventListener('click', selectRandomName);

console.log(Math.floor(Math.random()*3));