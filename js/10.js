// objetos

const producto = {
	//declaras varias variables dentro de un objeto "," se usa : dentro de objeto.
	nombreProducto: 'monitor 20 pulgas',
	precio: 300,
	disponible: true,
};
//  console.log(producto);

// //sintaxis de obejto con el punto

// console.log(producto.precio);
// console.log(producto.disponible);

// //otra sintasis que es lo mismo.

// console.log(producto['precio']);

producto.image = 'image.jpg'; //agregar una propiedad a un objeto

delete producto.disponible; //eleiminar una propiedad

console.log(producto);
