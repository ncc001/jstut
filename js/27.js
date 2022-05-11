//** POO */
//** object literal */
const producto = {
	nombre: 'tablet',
	precio: '500',
};

//** object constructor */
//**clase empieza con Mayuscula(Producto) donde alamcenas forma o datos y metodos y funciones q tiene un objeto */
//* es como un plano
function Producto(nombre, precio, disponible) {
	this.nombre = nombre;
	this.precio = precio;
	this.stock = disponible;
}

const producto2 = new Producto('monitor cuvo de 49"', 800, 'si');
const producto3 = new Producto('laptop', 300, 'no');

function formatearProducto(producto) {
	return `el producto ${producto.nombre} tiene un precio de $ ${producto.precio}`;
}

console.log(producto2);
console.log(producto3);

console.log(formatearProducto(producto2));

//* prototype, crear funciones que solo se utilizan en un objeto especifico

Producto.prototype.formatearProducto = function () {
	return `el producto ${this.nombre} tiene un precio de $ ${this.precio}`;
};

// 1 CREAMOS OBJETO
function Cliente(nombre, apellido) {
	this.nombre = nombre;
	this.apellido = apellido;
}

//2. INSTANCIA PARA AGREGAR PROPIEDAD AL OBJETO
const cliente = new Cliente('Jose', 'Morales');
const cliente2 = new Cliente('Eduardo', 'Ozuna');

//3. CREAMOS UN PROTOTIPO PARA CAMBIAR LA FORMA DEL TEXTO
Cliente.prototype.formatearCliente = function () {
	return `El cliente se llama ${this.nombre} con apellido ${this.apellido}`;
};

//LLAMAMOS EN LA CONSOLA EL OBJETO CLIENTE CON EL FORMATO DEL PROTOTIPO
console.log(cliente.formatearCliente());
console.log(cliente2.formatearCliente());
