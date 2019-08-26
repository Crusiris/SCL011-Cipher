//Boton que cambia a la pantalla donde se visualizan los mensaje(funcion screenMsj)

document.getElementById("btnEncryptScreen").addEventListener("click", () => {
    document.getElementById("container-main").innerHTML = " ";
    document.getElementById("container-maintwo").style.display = "flex";
});

document.getElementById("btnDecryptScreen").addEventListener("click", () => {
    document.getElementById("container-main").style.display = "none";
    document.getElementById("container-mainthree").style.display = "block";

});

//Boton de cifrado (obtengo el valor y mando la informacion al cipher.js) (funncion btncipher)

document.getElementById("btnencrypt").addEventListener("click", () => {
    let offset = parseInt(document.getElementById("position").value);
    let mensaje = document.getElementById("msjcipher").value.toUpperCase();


    let msjtrad = cipher.encode(offset, mensaje);
    document.getElementById("msjdecipher").innerHTML = msjtrad;

});

//Boton de descifrado 
document.getElementById("btndecrypt").addEventListener("click", () => {
    let offsett = parseInt(document.getElementById("offsett").value);
    let mensajee = document.getElementById("msjedecipher").value.toUpperCase();

    //asigno a una variable el valor el return de la funcion
    let msjtraduc = cipher.decode(offsett, mensajee);

    //imprimo en pantalla el resultado de mi funcion
    document.getElementById("msjcipherr").innerHTML = msjtraduc;
});