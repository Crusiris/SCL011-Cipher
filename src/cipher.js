window.cipher = {
    encode: (offset, mensaje) => {

        let finalArray = " ";
        let arrayLetter = [];


        for (var i = 0; i < mensaje.length; i++) {


            //Obteniendo valor de la letra en ascii usando la formula.
            letter = mensaje.charCodeAt(i);

            console.log(letter);

            if (letter != 32) {
                //aplicando formula
                nAscii = (letter - 65 + offset) % 26 + 65;

                // letra alfabetica
                labcdario = String.fromCharCode(nAscii);

                //guardo en un array
                arrayLetter.push(labcdario);

            } else if (letter = 32) {
                letter = " ";
                arrayLetter.push(letter);
            }

        }
        //De array a cadena
        finalArray = arrayLetter.join("");

        return finalArray;
    },

    decode: (offsett, mensajee) => {
        let finalArrayD = " ";
        let arrayLetterD = [];

        for (let j = 0; j < mensajee.length; j++) {

            let letterD = mensajee.charCodeAt(j);


            if (letterD != 32) {

                cesarAscii = (letterD + 65 + (-offsett)) % 26 + 65;

                cesarAlfa = String.fromCharCode(cesarAscii);

                arrayLetterD.push(cesarAlfa);

            } else if (letterD = 32) {
                letterD = " ";
                arrayLetterD.push(letterD);
            }





        }
        finalArrayD = arrayLetterD.join("");
        return finalArrayD;
    }
};