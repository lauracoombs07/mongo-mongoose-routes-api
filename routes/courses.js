const express = require('express');
const router = express.Router();


const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
];

//routehandler is middleware function.
//ENDPOINT TO GET ALL COURSES
router.get('/', (req, res) => {
    res.send(courses); 
});
router.post('/', (req, res) => {
    const { error } = validateCourse(req.body); // { error } is equivilant to result.error...using object destructuring JScript
    if (error) return res.status(400).send(result.error.details[0].message);

    
    const course = {
        id: courses.length + 1,//use .length +1 only without a real db
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});
router.put('/:id', (req,res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given id was not found.');
        

    const { error } = validateCourse(req.body); // { error } is equivilant to result.error...using object destructuring JScript
    if (error) return res.status(400).send(error.details[0].message);
        
    //update course
    //return updated course to client
    course.name = req.body.name;
    res.send(course);
});
router.delete('/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with the given id was not found.');

    //Delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);

})

router.get('/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given id was not found.');
    res.send(course);


});


function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);//change body to course and don't need const...just return

}
module.exports = router;