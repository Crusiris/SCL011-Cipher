window.cipher = {
    encode: (offset, mensaje) => {

        let finalArray = " ";
        let arrayLetter = [];


        for (var i = 0; i < mensaje.length; i++) {


            //Obteniendo valor de la letra en ascii usando la formula.
            let letter = mensaje.charCodeAt(i);

            if (letter != 32) {
                //aplicando formula
                let nAscii = (letter - 65 + offset) % 26 + 65;

                // letra alfabetica
                let labcdario = String.fromCharCode(nAscii);

                //guardo en un array
                arrayLetter.push(labcdario);

            } else {
                let letter = " ";
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

                let cesarAscii = (letterD + 65 + (-offsett)) % 26 + 65;

                let cesarAlfa = String.fromCharCode(cesarAscii);

                arrayLetterD.push(cesarAlfa);

            } else {
                letterD = " ";
                arrayLetterD.push(letterD);
            }
        }
        finalArrayD = arrayLetterD.join("");
        return finalArrayD;
    }
};