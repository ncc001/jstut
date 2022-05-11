//promesas

const usuarioAutenticado = new Promise((resolve, reject) => {
	const auth = true;
	if (auth) {
		resolve('usuario auntenticado'); //el promise se cumple
	} else {
		reject('no se pudo iniciar sesion'); // el promise no se cumple
	}
});

usuarioAutenticado.then((resolve) => console.log(resolve));
usuarioAutenticado.catch((reject) => console.log(reject));

//** promise existen 3 valores  */

//** Pending:  en espera  */

//** fulfilled: se cumplio */

//** Reject: no se cumplio */
