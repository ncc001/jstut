const boton = document.querySelector('#boton');

//** eventos, seleccionar primero */
//** */
boton.addEventListener('click', () => {
	Notification.requestPermission().then((resultado) =>
		console.log(`resultado es ${resultado}`)
	);
});

if ((Notification.permission = 'granted')) {
	new Notification('Èsta es una noti', {
		icon: 'img/ccj.png',
		body: 'Codigo con Juan',
	});
}
