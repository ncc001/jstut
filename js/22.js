//** Estructuras de Control */

const puntaje = 1000; // = asiganas variable // == comparacion menos estricto// === compara tambien mas estricto
if (puntaje !== 10000) {
	console.log('no es igual pe ');
	//sintaxis
} else {
	console.log('si el puntaje es 1000');
}

//mayor que o menor que

const efectivo = 1000;
const carrito = 800;

if (efectivo > carrito) {
	console.log(`el usuario puede pagar`);
} else {
	console.log(`no puede pagar`);
}
//**else if */
const rol = 'admin';

if (rol === 'admin') {
	console.log('acceso al sistema');
} else if (rol === 'editor') {
	console.log(' eres editor');
} else {
	console.log('no tiene acceso');
}
