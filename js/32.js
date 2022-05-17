//** ASYNC / AWAIT */

function descargarNuevosClientes() {
	return new Promise((resolve) => {
		console.log('descargando clientes, espere...');

		setTimeout(() => {
			resolve('los clientes fueros descargados');
		}, 5000);
	});
}

function descargarUltimosPedidos() {
	return new Promise((resolve) => {
		console.log('descargando pedidos, espere...');

		setTimeout(() => {
			resolve('los pedidos fueros descargados');
		}, 3000);
	});
}

async function app() {
	try {
		// const clientes = await descargarNuevosClientes();
		// const pedidos = await descargarUltimosPedidos();
		// console.log(clientes);
		// console.log(pedidos);

		const resultado = await Promise.all([
			descargarNuevosClientes(),
			descargarUltimosPedidos(),
		]);
		console.log(resultado[0]);
		console.log(resultado[1]);
	} catch (error) {
		console.log(error);
	}
}

app();

console.log('este codigo no se bloquea');
