//arrow functions , solo funciona en las expresiones y array metodos

const sumar2 = (n1, n2) => console.log(n1 + n2);
sumar2(5, 10);

//sintaxis
const aprendiend = (tecnologia) => console.log(`aprendiendo ${tecnologia}`);

aprendiend('javascript');

//********************************************************* */
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

messi.forEach((mes) => {
	if (mes == 'marzo');
	console.log('marzo si existe');
});

//some ideal para arreglo de objestos
let resultado;
resultado = carrito.some((producto) => producto.nombre === 'television');
console.log(resultado);

//.reduce

resultado = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(resultado);

//filter

resultado = carrito.filter((producto) => producto.precio < 400);

console.log(resultado);
