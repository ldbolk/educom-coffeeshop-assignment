import express, { request } from "express";
import mongo from './mongo.js';

const app = express();


app.use(express.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
    res.setHeader("Access-Control-Allow-Header", "X-Requested-With, content-type");
    next();
})

app.listen(3000, () => {
    console.log("I am a machine");
})


// GET //////////////////////////////////////////////////////////////////////////////////////////////////
// Get all types/orders/...//////////////////////////////////////////////////////////////////////////////
app.get("/:path", (req, res) => {  // Get the collection you enter in the localhost/3000/collectionName
    mongo.get(req.params.path, null)
    .then(result => {
        res.send(result);
    })
    .catch(err => {
        res.send(err)
    })
})

// Get specific types/orders
app.get("/:path/:id", (req, res) => {
    mongo.get(req.params.path, req.params.id)
    .then(result => {
        res.send(result);
    })
    .catch(err => {
        res.send(err);
    })
})


// POST ////////////////////////////////////////////////////////////////////////////////////////////////
// Post an order ///////////////////////////////////////////////////////////////////////////////////////
app.post("/orders", (req, res) => {
    let data = req.body
    mongo.create("orders", data)
    .then(result => {
        res.send(result);
    })
    .catch(err => {
        res.send(err);
    })
})

