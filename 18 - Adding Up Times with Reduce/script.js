const timeNodes = [ ...document.querySelectorAll('[data-time]') ];

const seconds = timeNodes
	.map((node) => node.dataset.time)
	.map((timeCode) => {
		const [ mins, secs ] = timeCode.split(':').map(parseFloat);
		return mins * 60 + secs;
	})
	.reduce((total, sec) => total + sec);

let secondLeft = seconds;
const hours = Math.floor(seconds / 3600);
secondsLeft = secondsLeft % 3600;
const mins = Math.floor(seconds / 60);
secondsLeft = secondsLeft % 60;

console.log(hours, mins, secondsLeft);
