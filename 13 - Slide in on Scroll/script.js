function debounce(func, wait = 20, immediate = true) {
	var timeout;
	return function() {
		var context = this,
			args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

const slideImgs = document.querySelectorAll('.slide-in');

function checkSlide(e) {
	slideImgs.forEach((img) => {
		// slide in img when it starts becoming visible
		const slideInAt = window.scrollY + window.innerHeight - img.height / 4;
		// bottom of img
		const imgBottom = img.offsetTop + img.height;
		const isHalfShown = slideInAt > img.offsetTop;
		const isNotScrolledPast = window.scrollY < imgBottom;

		// if image appears on page: slide in, else remove
		if (isHalfShown && isNotScrolledPast) {
			img.classList.add('active');
		} else {
			img.classList.remove('active');
		}
	});
}

window.addEventListener('scroll', debounce(checkSlide));
