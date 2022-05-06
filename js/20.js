//* metodos de propiedad *//

const reprodcuto = {
	reproducir: function (id) {
		console.log(`reproduciendo cancion con el ID: ${id}`);
	},
	pausar: function () {
		console.log('paunsando...');
	},
	crearPlaylist: function (nombre) {
		console.log(`creando la playlist: ${nombre}`);
	},
	reproducirPlaylist: function (nombre) {
		console.log(`reproduciendo la playlist: ${nombre}`);
	},
};

reprodcuto.borrarCancion = function (id) {
	console.log(`Eliminando la cancion: ${id}`);
};

reprodcuto.reproducir(3840);
reprodcuto.pausar();

reprodcuto.borrarCancion(20);

reprodcuto.crearPlaylist('heavy');

reprodcuto.reproducirPlaylist('heavy');
