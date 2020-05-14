function setDate() {
	const now = new Date();
	const seconds = now.getSeconds();
	const minutes = now.getMinutes();
	const hours = now.getHours();
	const secondHand = document.querySelector('.second-hand');
	const minuteHand = document.querySelector('.min-hand');
	const hourHand = document.querySelector('.hour-hand');
	//rotate hands based on seconds, minutes (/60 * 360) and hours (/12 * 360)
	secondHand.style.transform = `rotate(${seconds * 6 + 90}deg)`;
	minuteHand.style.transform = `rotate(${minutes * 6 + 90}deg)`;
	hourHand.style.transform = `rotate(${hours * 30 + 90}deg)`;
}
//update clock each second
setInterval(setDate, 1000);
