const planetName = document.getElementById('name');
const population = document.getElementById('pop');
const climate = document.getElementById('climate');
const terrain = document.getElementById('terrain');
const films = document.getElementById('films');
const url = 'http://localhost:3000/planets';

const getRandomPlanet = async () => {
	await fetch(url)
		.then((response) => {
			const data = response.json();
			return data;
		})
		.then((result) => {
			let randomNumber = Math.floor(Math.random() * result.length);
			//console.log(randomNumber);
			planetName.innerHTML = `${result[randomNumber].name}`;
			population.innerHTML = `Population: ${result[randomNumber].population}`;
			climate.innerHTML = `Climate: ${result[randomNumber].climate}`;
			terrain.innerHTML = `Terrain: ${result[randomNumber].terrain}`;
			films.innerHTML = `Featured in ${result[randomNumber].films.length} films`;
			return result;
		});
};

window.onload = getRandomPlanet();
