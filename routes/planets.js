const express = require('express');
const router = express.Router();
const Planet = require('../models/Planet');

// RETORNAR TODOS OS PLANETAS -- GET ALL PLANETS

router.get('/', async (req, res) => {
	try {
		const planets = await Planet.find();
		res.json(planets);
	} catch (err) {
		res.json({ message: err });
	}
});

// RETORNAR UM PLANETA ESPECIFICO POR NOME OU ID (planetParam)  -- GET A SPECIFIC PLANET BY NAME OR ID

router.get('/:planetParam', async (req, res) => {
	try {
		const planetByNameOrId =
			(await Planet.findOne({ name: req.params.planetParam })) || (await Planet.findById(req.params.planetParam));
		res.json(planetByNameOrId);
	} catch (err) {
		res.json({ message: err });
	}
});

// CRIAR UM PLANETA -- CREATE A PLANET

router.post('/', async (req, res) => {
	const planet = new Planet({
		name: req.body.name,
		population: req.body.population,
		climate: req.body.climate,
		terrain: req.body.terrain,
		films: req.body.films
	});
	try {
		const savedPlanet = await planet.save();
		res.json(savedPlanet);
	} catch (err) {
		res.json({ message: err });
	}
});

// DELETAR UM PLANETA ESPECIFICO POR ID OU NOME -- DELETE A SPECIFIC PLANET BY ID OR NAME (planetParam)

router.delete('/:planetParam', async (req, res) => {
	try {
		const removedPlanetId = await Planet.findByIdAndDelete({ _id: req.params.planetParam });
		res.json(removedPlanetId);
	} catch (err) {
		try {
			const removedPlanetName = await Planet.deleteOne({ name: req.params.planetParam });
			res.json(removedPlanetName);
		} catch (err) {
			res.json({ message: err });
		}
	}
});

// ATUALIZAR (EDITAR) UM PLANETA ESPECIFICO POR ID ou NOME (deve-se especificar todos os campos necessarios, do contrário o campo será definido como null)
//(planetParam) -- UPDATE A SPECIFIC PLANET BY NAME OR ID (you must specify all fields, otherwise they'll be defined as null)

router.patch('/:planetParam', async (req, res) => {
	try {
		const updatedPlanet = await Planet.updateOne(
			{ _id: req.params.planetParam },
			{
				$set: {
					name: req.body.name,
					population: req.body.population,
					climate: req.body.climate,
					terrain: req.body.terrain,
					films: req.body.films
				}
			}
		);
		console.log('Planeta Atualizado!');
		res.json(updatedPlanet);
	} catch (err) {
		try {
			const updatedPlanetName = await Planet.updateOne(
				{ name: req.params.planetParam },
				{
					$set: {
						name: req.body.name,
						population: req.body.population,
						climate: req.body.climate,
						terrain: req.body.terrain,
						films: req.body.films
					}
				}
			);
			console.log('Planeta Atualizado pelo nome!');
			res.json(updatedPlanetName);
		} catch (err) {
			res.json({ message: err });
		}
	}
});

module.exports = router;
