const source = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const citiesOfUs = [];
const userChoiceInput = document.getElementById('search');
const searchResult = document.getElementById('searchResult');

fetch(source)
	.then( sourceToJson => sourceToJson.json()) // rebuild data from source to json structure 
	.then( jsonSource => citiesOfUs.push(...jsonSource)); // add data from source to a cietiesOfUs's array

function numberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function findByMaches(searchWord, sourceData) {
	return sourceData.filter( place => {
		const regularExpresion = new RegExp(searchWord, 'gi');
		return place.city.match(regularExpresion) || place.state.match(regularExpresion);
	});
}

function displayMaches() {
	const matchArray = findByMaches(this.value, citiesOfUs);
	console.log(matchArray);
	const listOfResultsHtml = matchArray.map(result => {
	const regularExpresion = new RegExp(this.value, 'gi');
	const cityName = result.city.replace(regularExpresion, `<span class='activeSearch'>${this.value}</span>`);
	const stateName = result.state.replace(regularExpresion, `<span class='activeSearch'>${this.value}</span>`);
		return `
			<li>
				<span class='results'>${cityName}, ${stateName}</span>
				<span class='population'>${numberWithCommas(result.population)}</span>
			</li>
		`;
	}).join('');
	searchResult.innerHTML = listOfResultsHtml;
}

userChoiceInput.addEventListener('change', displayMaches);
userChoiceInput.addEventListener('keyup', displayMaches);
