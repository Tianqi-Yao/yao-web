const express = require('express');
const app = express();
const routes = require('./routes')
const cors = require('cors');

app.use(cors());
// app.use(express.json());
app.use(express.static('public/images'));
app.use('/',routes)

app.listen(4005, () => {
    console.log("We've now got a server!");
    console.log('Your routes will be running on http://localhost:4005');
}
);

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/404.html');
}
);

