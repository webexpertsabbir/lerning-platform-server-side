const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

 app.use(cors());

const courses =  require('./Data/course.json');

const singel = require('./Data/courses.json');

app.get('/', (req, res) => {
    res.send('Mark Api Running');
})

app.get('/course', (req, res) => {
    res.send(courses);
})
app.get('/course/:id',(req, res) =>{
    const id = req.params.id;
    const selectedCourse = singel.find(n => n._id === id);
    res.send(selectedCourse);
} )

app.listen(port, () => {
    console.log('Mark Server running on port', port);
});