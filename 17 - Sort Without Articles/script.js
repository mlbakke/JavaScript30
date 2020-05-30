const bands = [
	'The Plot in You',
	'The Devil Wears Prada',
	'Pierce the Veil',
	'Norma Jean',
	'The Bled',
	'Say Anything',
	'The Midway State',
	'We Came as Romans',
	'Counterparts',
	'Oh, Sleeper',
	'A Skylit Drive',
	'Anywhere But Here',
	'An Old Dog'
];

function removeArticle(band) {
	return band.replace(/^(a |an |the )/i, '');
}
const orderedBands = bands.sort((a, b) => (removeArticle(a) > removeArticle(b) ? 1 : -1));

document.querySelector('#bands').innerHTML = orderedBands.map((band) => `<li>${band}</li>`).join('');
