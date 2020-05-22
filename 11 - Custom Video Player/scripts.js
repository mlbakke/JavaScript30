// get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');

const ranges = player.querySelectorAll('.player__slider');
const skipButtons = player.querySelectorAll('[data-skip]');

// build functions
function togglePlay() {
	if (video.paused) {
		video.play();
	} else {
		video.pause();
	}
}

// event listeners
toggle.addEventListener('click', togglePlay);
