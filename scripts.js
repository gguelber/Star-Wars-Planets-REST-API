const planetName = document.getElementById('name');
const population = document.getElementById('pop');
const climate = document.getElementById('climate');
const terrain = document.getElementById('terrain');
const films = document.getElementById('films');
const endpoint = 'http://localhost:3000/planets';

let data = {};
async function getData(url) {
	try {
		const response = await fetch(url);
		const result = await response.json();
		let randomNumber = Math.floor(Math.random() * result.length);
		planetName.innerHTML = `${result[randomNumber].name}`;
		population.innerHTML = `Population: ${result[randomNumber].population}`;
		climate.innerHTML = `Climate: ${result[randomNumber].climate}`;
		terrain.innerHTML = `Terrain: ${result[randomNumber].terrain}`;
		films.innerHTML = `Featured in ${result[randomNumber].films.length} films`;
	} catch (error) {
		window.alert(error);
	}
}

window.onload = getData(endpoint);
