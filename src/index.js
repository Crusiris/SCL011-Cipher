//Boton que cambia a la pantalla donde se visualizan los mensaje(funcion screenMsj)

document.getElementById("btnEncryptScreen").addEventListener("click", () => {
    document.getElementById("container-main").innerHTML = " ";
    document.getElementById("container-maintwo").style.display = "block";
});

document.getElementById("btnDecryptScreen").addEventListener("click", () => {
    document.getElementById("container-main").innerHTML = " ";
    document.getElementById("container-mainthree").style.display = "block";

});

//Boton de cifrado (obtengo el valor y mando la informacion al cipher.js) (funncion btncipher)

document.getElementById("btnencrypt").addEventListener("click", () => {
    let offset = parseInt(document.getElementById("position").value);
    console.log(offset);
    let mensaje = document.getElementById("msjcipher").value.toUpperCase();
    console.log(mensaje);
    // document.getElementById("container-maintwo").style.display = "block";

    let msjtrad = cipher.encode(offset, mensaje);
    document.getElementById("msjdecipher").innerHTML = msjtrad;

});

//Boton de descifrado 
document.getElementById("btndecrypt").addEventListener("click", () => {
    let offsett = parseInt(document.getElementById("offsett").value);
    let mensajee = document.getElementById("msjedecipher").value.toUpperCase();

    //asigno a una variable el valor el return de la funcion
    let msjtraduc = cipher.decode(offsett, mensajee);
    console.log(msjtraduc);
    //imprimo en pantalla el resultado de mi funcion
    document.getElementById("msjcipherr").innerHTML = msjtraduc;
})