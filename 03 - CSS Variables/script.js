const inputs = document.querySelectorAll('.controls input');

function update() {
	const suffix = this.dataset.sizing || '';
	let root = document.documentElement;

	root.style.setProperty(`--${this.id}`, this.value + suffix);
}

inputs.forEach((input) => input.addEventListener('change', update));
inputs.forEach((input) => input.addEventListener('mousemove', update));
