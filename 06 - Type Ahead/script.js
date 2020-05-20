const endpoint =
	'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
	// get data from endpoint, turn to json, spread data and push each city into [cities]
	.then((blob) => blob.json())
	.then((data) => cities.push(...data));

function findMatch(phrase, cities) {
	return cities.filter((place) => {
		// regular expression: g - global, i - insensitive: case doesn't matter
		const rex = new RegExp(phrase, 'gi');
		//return cities and/or states that matches the phrase passed in
		return place.city.match(rex) || place.state.match(rex);
	});
}
