// * FUNCIONES CON RETORNO *//

function sumar(n1, n2) {
	return n1 + n2;
}
const resultado = sumar(2, 3);

console.log(resultado);

let total = 0;
function agregrarCarrito(precio) {
	return (total += precio);
}

function calcularImpuesto(total) {
	return 1.15 * total;
}

total = agregrarCarrito(200);
total = agregrarCarrito(400);
total = agregrarCarrito(600);

console.log(total);

const totalApagar = calcularImpuesto(total);
console.log(totalApagar);
