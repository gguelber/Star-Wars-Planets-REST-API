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



API rules:

  GET methods:

  /planets/:id ---- Get planet by ID
  /planets/:planetName ---- Get planet by planetName

  POST methods:
  
  /planets/ ---- POST a new planet
  
      Required Schema:
      {
        "name": "name",
        "population": "population",
        "climate": "climate",
        "terrain": "terrain",
        "films": ["film1", "film2"]
      }
      
  PATCH methods:
   
   /planets/:id ---- PATCH by planet ID
   /planets/:planetName ---- PATCH by planet name
   
      
      Required Schema:
      {
        "name": "name",
        "population": "population",
        "climate": "climate",
        "terrain": "terrain",
        "films": ["film1", "film2"]
      }
      
  DELETE methods:
    
   /planets/:id ---- DELETE by planet ID
   /planets/:planetName ---- DELETE by planet name
