const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//Middlewares
app.use(cors()); // Allows access from everywhere
app.use(bodyParser.json());

//Import Routes
const planetsRoute = require('./routes/planets');
app.use('/planets', planetsRoute);

// ROUTES

app.get('/', (req, res) => {
	res.send('Pagina Inicial');
});

// CONNECT TO DATABASE (USE .ENV TO CREATE ENVIRONMENT VARIABLES AND USE THEM SAFELY)

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
	console.log('Connected to Planets Database!')
);

// HOW DO WE START LISTENING TO THE SERVER?

app.listen(process.env.PORT || 3000);
//console.log(process.env.PORT);
