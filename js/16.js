//funcion son reutilizables y modificables
// declaracion de la funcion
// () llama la funcion
function sumar() {
	console.log(10 + 10); //sintaxis
}
sumar();

//**expresion de la funcion**//

const sumar2 = function () {
	console.log(3 + 3);
};

sumar2();

//**IIFE**/ , no permite llamar la variable, asi no se mezxclan

//sintasis, se llaman ellas mismas con el ()

(function () {
	console.log('esto es una funcion');
})();
