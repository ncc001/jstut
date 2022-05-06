//array methods

const messi = ['enero', 'febrero', 'marzo', 'abril'];

const carrito = [
	{ nombre: 'monitor 20pulgadas', precio: 500 },
	{ nombre: 'television', precio: 700 },
	{ nombre: 'Audifonos', precio: 300 },
	{ nombre: 'Teclados', precio: 200 },
	{ nombre: 'monitor 20pulgadas', precio: 100 },
	{ nombre: 'monitor 20pulgadas', precio: 100 },
];

//forEach

messi.forEach(function (mes) {
	if (mes == 'marzo');
	console.log('marzo si existe');
});

//includes para arrays basicos

let resultado = messi.includes('marzo');
console.log(resultado);

//some ideal para arreglo de objestos

resultado = carrito.some(function (producto) {
	return producto.nombre === 'television';
});
console.log(resultado);

//.reduce

resultado = carrito.reduce(function (total, producto) {
	return total + producto.precio;
}, 0);

//filter

resultado = carrito.filter(function (producto) {
	return producto.precio > 400;
});

console.log(resultado);
