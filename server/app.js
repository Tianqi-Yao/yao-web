const express = require('express');
const app = express();
const routes = require('./routes/index')
const cors = require('cors');

app.use(cors());
// app.use(express.json());

app.use('/',routes)

const server = app.listen(3005, (app) => {
    console.log("We've now got a server!");
    console.log('Your routes will be running on http://localhost:3005');
}
);


app.get('*', (req, res) => {
    res.sendFile(__dirname + '/404.html');
}
);

