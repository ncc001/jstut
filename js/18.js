//* funciones con parametros */

function sumar(numero1 = 0, numero2 = 0) {
	//0 parameto por default cuando no hay dato
	//numero 1, 2 son parametros
	console.log(numero1 + numero2); //sintaxis
}
sumar(10, 10); //argumentos o valores reales
sumar(20, 10); //argumentos o valores reales
sumar(50, 10); //argumentos o valores reales
sumar(60); //0 parameto por default cuando no hay dato

const sumar2 = function (n1, n2) {
	console.log(n1 + n2);
};

sumar2(5, 10);
