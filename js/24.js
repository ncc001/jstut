//**iteradores**//

//** For Loop iterar sobre un arreglo*/

for (let i = 0; i < 10; i++) {
	console.log(i);
}

for (let i = 1; i <= 100; i++) {
	if (i % 2 === 0) {
		console.log(`El Número ${i} es par`);
	} else {
		console.log(`El Número ${i} es inpar`);
	}
}

const carrito = [
	{ nombre: 'monitor 20pulgadas', precio: 500 },
	{ nombre: 'television', precio: 700 },
	{ nombre: 'Audifonos', precio: 300 },
	{ nombre: 'Teclados', precio: 200 },
	{ nombre: 'monitor 20pulgadas', precio: 100 },
	{ nombre: 'monitor 20pulgadas', precio: 100 },
];

for (let i = 0; i < carrito.length; i++) {
	console.log(carrito[i].nombre);
}

//*****************white loop***************************** white loop

let i = 1; //indice

while (i <= 100) {
	//condicion
	if (i % 2 === 0) {
		console.log(`el numero ${i} es par`);
	} else {
		console.log(`el numero ${i} es inpar`);
	}
	i++; //incremento
}
let i = 0; //si no es true no ejecuta nada.
while (i < carrito.length) {
	console.log(carrito[i].nombre);
	i++;
}

//*****************do while***************************** */

let i = 0;

do {
	// ejecuta el codigo al menos 1 vez y despues evalua con while
	console.log(i);
	i++;
} while (i < 10);
