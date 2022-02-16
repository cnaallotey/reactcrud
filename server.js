//installing Dependencies
const express = require('express')
const serveStatic = require('serve-static')
const cors = require('cors')
const router = express.Router()

const path = require('path')


//importing json
data = require('./server/client.json')

//running express
const app = express()

//using cors
app.use(cors())


//configuring body parser middle ware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// //import get routes
const getRoutes = require('./server/gets')
app.use('/', getRoutes)

//delete a client
app.delete('/client/:id', (req, res) => {
    const query = req.params.id;
    
    
    data = data.filter(i => i.id !== query);
    
    console.log(data.length)
    res.send(data);
    //console.log("client has been deleted");

})

app.post('/client', (req, res) => {
    //adding a client
    const client = req.body;
    console.log(client)
    data.push(client);
    // fs.writeFileSync("./clients.json", client);
    res.send(client);

});

//updating a client
app.put('/client/updateclient/:id', (req, res) => {

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


//configuring body parser middle ware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// //import get routes
// const getRoutes = require('./server/gets')
// app.use('/', getRoutes)

// //import post routes
// const postRoutes = require('./server/posts')
// app.use('/', postRoutes)

// //import delete routes
// const deleteRoutes = require('./server/deletes')
// app.use('/', deleteRoutes)

// //importing put routes
// const updateRoutes = require('./server/puts')
// app.use('/', updateRoutes)


app.use('/', serveStatic(path.join(__dirname, 'dist')))



const port = process.env.PORT || 3001;

app.listen(port, ()=> {
    console.log(`App is running on ${port}`);
})