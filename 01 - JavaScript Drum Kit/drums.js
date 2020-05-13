window.addEventListener('keydown', function(k) {
	const audio = document.querySelector(`audio[data-key="${k.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${k.keyCode}"]`);

	if (!audio) return; //if no audio associated with key, stop function
	audio.currentTime = 0; //restart drum sample
	key.classList.add('playing'); //add 'playing' visual-effect
	audio.play(); //play drum sample
	//remove play effect again after 50ms
	setTimeout(function() {
		key.classList.remove('playing');
	}, 50);
});
