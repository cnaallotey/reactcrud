const express = require('express');
const router = express.Router()
const data = require('./client.json')



//updating a client
router.put('/client/updateclient/:id', (req, res) => {

    const found = data.findIndex(obj => obj.id === req.params.id)
    data[found].Name.firstName = req.body.firstName;
    data[found].Name.lastName = req.body.lastName;
    data[found].email= req.body.email;
    data[found].active= req.body.active;
    data[found].role = req.body.role;
    data[found].department = req.body.department;
    if(req.body.active == true){data[found].status = ("Active")}else {data[found].status=("Inactive")};
    res.send(data);

})

module.exports = router