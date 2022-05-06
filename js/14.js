//arrays
const numeros = [10, 20, 30, 40, 30];

console.table(numeros);

const meses = new Array(2.32, 124123, 231, 2); //constructor
console.table(meses);

const messi = ['enero', 'febrero', 'marzo', 'abril']; //otra forma del constructor.

//puedes mezclar cualquier tipo de datos.contenido

const arreglo = [
	'holamundo',
	10,
	true,
	null,
	{ nombre: 'juan' },
	[1, 2, 3, 4, 5],
];

console.log(arreglo);

//acceder a uno de  los valores de un arreglo

console.log(numeros[4]); //se empieza en 0

//recorrer arrays, se ejcutara hasta q acaben los elementos.

messi.forEach(function (messi) {
	console.log(messi);
});

//conocer la extension de un arreglo

// console.log(meses.length);

//como modificar valor de un arreglo

//push

numeros.push(600); //al final

numeros.unshift(1, -22, 3); //al principio

console.table(numeros);

//eliminar datos de arreglos

// ->messi.pop(); //elimina el ultimo
// -> messi.shift(); // el primero

//eliminar un dato expecifico mantener demas

messi.splice(2, 1); //2=ubucacion - 1=cuantos mas de ahi parta borrar
console.table(messi);

//rest Operator o spread operator

const nuevoArreglo = [...messi, 'junio']; //mas recomendable (...=copia) ('junio'...messi)

console.table(nuevoArreglo);
