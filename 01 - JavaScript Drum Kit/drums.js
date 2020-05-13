window.addEventListener('keydown', function(k) {
	const audio = document.querySelector(`audio[data-key="${k.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${k.keyCode}"]`);
	//Duration of the transition in CSS
	const duration = 1000 * parseFloat(getComputedStyle(key).transitionDuration);

	if (!audio) return; //if no audio associated with key, stop function
	audio.currentTime = 0; //restart drum sample
	key.classList.add('playing'); //add 'playing' visual-effect to key
	audio.play();
	//remove playing visual effect after transition is finished
	setTimeout(function() {
		key.classList.remove('playing');
	}, duration);
});
