const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Importing the path module
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
