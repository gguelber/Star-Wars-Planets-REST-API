# Star-Wars-Planets-REST-API
A simple application that shows a random planet from a database through RESTful API. Uses Node.js, MongoDb(Atlas), mongoose and express


Instructions:
  - Clone the repository to your local machine
  - Install all dependencies from package.json
  - Create your environment variables with dotenv package to connect to the Db of your choice (MongoDb.Atlas or MongoDb locally) 
  - Import the planetsDb.json to your db so you can use the application correctly
  - Go to the folder and run npm start to start the server
  - Open index.html and have fun!
  - The getRandomPlanet function is called once when the page is loaded (window.onload)
  - The NEXT button gets a random planet from the db and show it on the screen.
