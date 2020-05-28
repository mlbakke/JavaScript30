const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100; // 100px

function shadow(e) {
	const width = hero.offsetWidth;
	const height = hero.offsetHeight;
	// x=e.offsetX, y = e.offsetY
	let { offsetX: x, offsetY: y } = e;
	// this = hero, target = what you're hovering over
	if (this !== e.target) {
		x = x + e.target.offsetLeft;
		y = y + e.target.offsetTop;
	}

	// Go between 50 and -50
	const xWalk = Math.round(x / width * walk - walk / 2);
	const yWalk = Math.round(y / height * walk - walk / 2);

	text.style.textShadow = `${xWalk}px ${yWalk}px 5px rgba(0, 0, 0, .2),
                             ${-xWalk}px ${yWalk}px 2px rgba(74, 248, 80, .7),
                             ${yWalk}px ${-xWalk}px 2px rgba(240, 170, 10, .7),
                             ${-yWalk}px ${xWalk}px 2px rgba(240, 50, 7, .7)`;
}

hero.addEventListener('mousemove', shadow);
