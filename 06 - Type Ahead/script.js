const endpoint =
	'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

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

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatch() {
	const matches = findMatch(this.value, cities);
	const html = matches
		.map((place) => {
			const rex = new RegExp(this.value, 'gi');
			// higlight search term in suggestions
			const cityName = place.city.replace(rex, `<span class="hl">${this.value}</span>`);
			const stateName = place.state.replace(rex, `<span class="hl">${this.value}</span>`);
			//return suggestions
			return `
                <li>
                    <span class="name">${cityName}, ${stateName}</span>
                    <span class="population">${numberWithCommas(place.population)}</span>
                </li>`;
		})
		.join('');

	suggestions.innerHTML = html;
}

searchInput.addEventListener('change', displayMatch);
searchInput.addEventListener('keyup', displayMatch);
