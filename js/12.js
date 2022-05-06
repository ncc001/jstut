'use strict'; //buenas practicas js en modo estricto.
const producto = {
	nombreProducto: 'monitor 20 pulgas',
	precio: 300,
	disponible: true,
};

Object.freeze(producto); //no permite la modificacion de objetos añadir ni eliminar. ni cambiar un valor
// producto.imagen = 'imagen.jpg';
console.log(producto);

Object.seal(producto); // si permite modificar las ya existentes

//saber si esta freezeado

console.log(Object.isFrozen(producto));
