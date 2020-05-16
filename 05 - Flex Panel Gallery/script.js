const panels = document.querySelectorAll('.panel');

function toggleOpen() {
	const panel = this;
	//get duration of transiton
	const duration = 1000 * parseFloat(getComputedStyle(panel).transitionDuration);
	//widen and increase font-size
	panel.classList.toggle('open');
	//after 'open' transition, pull in extra text
	setTimeout(() => panel.classList.toggle('open-active'), duration);
}

panels.forEach((panel) => panel.addEventListener('click', toggleOpen));
