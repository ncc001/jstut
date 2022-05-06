const producto = {
	nombreProducto: 'monitor 20 pulgas',
	precio: 300,
	disponible: true,
};

const medidas = {
	peso: '1kg',
	medida: '1m',
};

//rest opereitor

const nuevoProducto = { ...producto, ...medidas }; //uniendo dos obejtos sin modificar

console.log(nuevoProducto); //buenas praicticar no mutar datos originales.
