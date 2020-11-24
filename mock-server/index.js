const express = require('express');
const app = express();
var cors = require('cors')
const data = require('./data.json');

app.get('/data/:name',cors(), (req, resp) => {
    const { name } = req.params;
    const response = data.find((dataObj) => dataObj.id === name);
    resp.send(response.items)
})
app.listen(4000, () => {
    console.log('=====listening on server on 4000 port')
})
