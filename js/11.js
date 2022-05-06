//seleccionando objetos

const producto = {
	nombreProducto: 'monitor 20 pulgas',
	precio: 300,
	disponible: true,
};
// forma anterior
const precioProducto = producto.precio; // extrayendo una propiedad
const nombreProducto = producto.nombreProducto; // extrayendo una propiedad
// console.log(nombreProducto);

//actual Desctruturing object

const { precio } = producto;

console.log(precio);

const { disponible } = producto;

console.log(disponible);

const { precio, disponible } = producto;
