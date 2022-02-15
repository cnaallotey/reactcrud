const express = require('express');
const router = express.Router()
//const cors = require('cors')
const data = require('./client.json')


router.post('/addclient', (req, res) => {
    //adding a client
    const client = req.body;
    data.push(client);
    // fs.writeFileSync("./clients.json", client);
    console.log(data.length)
    res.send(data);

});


module.exports = router;