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

function updateButton() {
	const icon = this.paused ? '►' : '❚❚';
	toggle.textContent = icon;
}

function skip() {
	const time = this.dataset.skip;
	video.currentTime += parseInt(time);
}

function handleRange() {
	video[this.name] = this.value;
}

function handleProgress() {
	const percent = video.currentTime / video.duration * 100;
	progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
	if (!mousedown) {
		return;
	}

	const scrubTime = e.offsetX / progress.offsetWidth * video.duration;
	video.currentTime = scrubTime;
}

// event listeners
toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

skipButtons.forEach((button) => button.addEventListener('click', skip));
ranges.forEach((range) => range.addEventListener('change', handleRange));
//scrubbing
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', scrub);
//check if mouse is pressed
let mousedown = false;
progress.addEventListener('mousedown', () => (mousedown = true));
progress.addEventListener('mouseup', () => (mousedown = false));
