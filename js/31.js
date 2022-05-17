const boton = document.querySelector('#boton');

//** eventos, seleccionar primero */
//** */
boton.addEventListener('click', () => {
	Notification.requestPermission().then((resultaado) =>
		console.log(`resultado es ${resultaado}`)
	);
});

if ((Notification.permission = 'granted')) {
	new Notification('Èsta es una noti', {
		icon: 'img/ccj.png',
		body: 'Codigo con Juan',
	});
}
