const express = require('express');

const expressConfig = require('./config/expressConfig')
const handlebarsConfig = require('./config/handlebarsConfig')
const homeConroller = require('./controllers/homeController')
const cubeController = require('./controllers/cubeController')

const app = express();

const PORT = 5000;

expressConfig(app);
handlebarsConfig(app);

app.use(homeConroller);
app.use('/cubes', cubeController)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));