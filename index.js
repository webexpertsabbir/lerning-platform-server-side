const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const courses =  require('./Data/course.json');

app.get('/', (req, res) => {
    res.send('Mark Api Running');
})

app.get('/course', (req, res) => {
    res.send(courses);
})

app.listen(port, () => {
    console.log('Mark Server running on port', port);
});