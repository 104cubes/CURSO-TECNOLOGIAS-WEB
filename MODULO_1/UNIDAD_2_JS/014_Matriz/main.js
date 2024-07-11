let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
   ];

document.write('<hr>');
document.write(matriz[0][2] + "," + matriz[1][1]);
document.write('<hr>');
matriz.forEach(element => {
    element.forEach(el => {
        document.write(el)
    })
    document.write('<br>');
});
document.write('<hr>');
matriz.forEach(element => {
    element.forEach(el => {
        if (el%3==0){
            el = "m";
        }
        document.write(el)
    })
    document.write('<br>');
});