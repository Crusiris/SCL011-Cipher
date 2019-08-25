# Cifrado César

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

- La letra A se cifra como D.
- La palabra CASA se cifra como FDVD.
- Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas más complejos de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el sistema ROT13.

## Resumen del proyecto
 
 Enigma es una aplicación web, Creada con a intención de comunicarse a traves de un lenguaje cifrado. Simula el idioma de los extraterrestres con la intención de hacer  que el proceso de comunicacion sea dinamico y entretenido.
 - Quiénes son los principales usuarios de producto.
    Se creo pensando en niños entre los 9 y 13 años.

- Cuáles son los objetivos de estos usuarios en relación con tu producto.
  Los usuarios se sentiran atraidos por lo que promete la aplicacion ("comunicarse con extraterrestres") y ademas podran usar este mismo lenguaje para comunicarse entre amigos, lo cual es bastante divertido y ademas persuacivo porque, ¿Que niño no quiere comunicarse de un modo super secreto?

- Cómo crees que el producto que estás creando está resolviendo sus problemas.
  Los usuarios tendra la oportunidad de comunicarse de manera sencilla y secreta.


## Para iniciarlo:

## clonen el proyecto:
git clone https://github.com/Crusiris/SCL011-Cipher.git

## Navegar a la carpeta que se creo
cd SCL011-Cipher

## Ejecutar npm install dentro de SCL011-Cipher
npm install

## Visualizar la aplicacion web
abrir el archivo index.html en el navegador

# Objetivos de aprendizaje

 Mediante la creacion de este proyecto se aprendio a construir una aplicaciónes web que interactúe con el usuario a través del navegador y la lógica basada en esa interacción. Dicho en palabras sencillas, :

- Pintar elementos de formulario en la pantalla usando **HTML** y **CSS**.
- Permitir al usuario interactuar (**eventos del DOM**) y hacer algo cuando ocurran dichos eventos (cifrar/descifrar).
- Manipular _**strings**_ (cadenas de texto).
- Usar **control de flujo** (bucles, condicionales, ...).
- Actualizar la pantalla con los resultados (**manipular el DOM**).
- **Implementar funciones** dada una descripción de su comportamiento.
- Verificar tu implementación con **pruebas unitarias**.
- Entender las **necesidades del usuario** y cómo proponer una solución.
- Organizar tu tiempo y priorizar tareas en un entorno de **alta incertidumbre**.


#### Interfaz de usuario (UI)

El usuario podra:
- Elegir un desplazamiento (_offset_) indicando cuántas posiciones desea que el cifrado desplace cada caracter.
- Insertar un mensaje (texto) que queremos cifrar.
- Ver el resultado del mensaje cifrado.
- Insertar un mensaje (texto) a descifrar.
- Ver el resultado del mensaje descifrado.

