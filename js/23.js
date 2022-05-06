//**SWICTH */

const metodoPago = 'bitcoin';

switch (metodoPago) {
	case 'tarjeta':
		console.log(`pagaste con tarjeta`);
		break;
	case 'cheque':
		console.log(`paga con cheque, se revisa fondo 1fer`);
		break;
	case 'bitcoin':
		console.log(`pagaste con bitcoin`);
		break;
	default:
		console.log('aun no has pagado');
		break;
}
