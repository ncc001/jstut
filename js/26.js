//** this  hace referencia al objeto sobre el cual se esta mandando llamar la funcion */

const reservacion = {
	nombre: 'juan',
	apellido: 'de la torre',
	total: 500,
	pagado: false,
	informacion: function () {
		console.log(
			`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`
		);
	},
};

reservacion.informacion();
