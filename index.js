const helmet = require('helmet');
const Joi = require ('joi');//required files on top
const logger = require ('./public/middleware/logger');
const courses = require ('./routes/courses');
const home = require ('./routes/home');
const authentication = require ('./authentication')
const express = require('express');
const app = express();

app.use(express.json()); //middleware to stringify built in middleware
//express is nothing but a bunch of middleware functions
app.use(express.urlencoded({ extended: true }));//key=value&key=value parses to req.body json
app.use(express.static('public'));
app.use(helmet());
app.use('/api/courses', courses);

app.use('/', home)
app.use(logger);


app.use(authentication);
//called in sequence


//PORT
const port =process.env.PORT  || 3000 
app.listen(port, () => console.log('Listening on port 3000...'));//environmental variable


