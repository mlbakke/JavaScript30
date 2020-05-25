const pressed = [];
const secretCode = 'martin';

window.addEventListener('keyup', (e) => {
	pressed.push(e.key);

	pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

	const bod = document.querySelector('body');

	if (pressed.join('') === secretCode) {
		cornify_add();
	}
});
