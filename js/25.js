const carrito = [
	{ nombre: 'monitor 20pulgadas', precio: 500 },
	{ nombre: 'television', precio: 700 },
	{ nombre: 'Audifonos', precio: 300 },
	{ nombre: 'Teclados', precio: 200 },
	{ nombre: 'monitor 20pulgadas', precio: 100 },
	{ nombre: 'monitor 20pulgadas', precio: 100 },
];

//**ForEach - solo se pueden ejecutar en arreglos y se ejecuta cuantas veces sea necesario */
//** muestra resultados */
carrito.forEach((producto) => console.log(`producto.nombre`));

//** map lo mismo pero se utiliza cuando iteras y quieres crear un nuevo arreglo y asignar a una nueva variable,

const arreglo2 = carrito.map((producto) => producto.nombre);
