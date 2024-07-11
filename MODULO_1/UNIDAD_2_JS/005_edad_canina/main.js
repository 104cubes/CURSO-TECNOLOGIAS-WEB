let edadPerro  = parseInt(prompt("Intrpoduce la edad de tu perro"));
//document.write(`<br> Edad de tu perro: ${edadPerro} años`);
let edadSifueraHumano = edadPerro * 7;
//document.write(`<br> Edad humana de tu perro: ${edadSifueraHumano} años`);

let textoEnRojo = `La edad de tu perro es ${edadPerro} años <br>
La edad humana de tu perro es de ${edadSifueraHumano} años
<div style="color:red">
    Edad humana ${edadSifueraHumano} años
</div>`;
document.write(textoEnRojo);
