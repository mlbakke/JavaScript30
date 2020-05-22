const checkboxes = document.querySelectorAll('input[type="checkbox"]');
let lastChecked;

function checkAll(e) {
	let inBetween = false;

	if (e.shiftKey && this.checked) {
		checkboxes.forEach((checkbox) => {
			// check if checkbox is the one just clicked, or the previous clicked checkbox
			// change inBetween from false/true if so
			if (checkbox === this || checkbox === lastChecked) {
				inBetween = !inBetween;
			}
			//check all boxes that's inBetween
			if (inBetween) {
				checkbox.checked = true;
			}
		});
	}
	//update last checked
	lastChecked = this;
}

checkboxes.forEach((checkbox) => checkbox.addEventListener('click', checkAll));
