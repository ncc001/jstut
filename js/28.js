//** CLASES DE JAVASCRIPT */

class Producto {
	constructor(nombre, precio) {
		this.nombre = nombre;
		this.precio = precio;
	}
	formatearProducto() {
		return `el producto ${this.nombre} tiene un precio de $ ${this.precio}`;
	}

	obtenerPrecio() {
		console.log(this.precio);
	}
}

const producto2 = new Producto('monitor cuvo de 49"', 800, 'si');
const producto3 = new Producto('laptop', 300, 'no');

//* HERENCIA

class Libro extends Producto {
	constructor(nombre, precio, isbn) {
		super(nombre, precio);
		this.isbn = isbn;
	}
	formatearProducto() {
		return `${super.formatearProducto()} y su ISBM es ${this.isbn}`;
	}
}

const libro = new Libro('Javascript la revolucion', 1200, 123123);

console.log(libro.formatearProducto());
console.log(producto2.formatearProducto());
