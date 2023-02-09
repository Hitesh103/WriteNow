const connectToMongo = require('./db')
const express = require('express')
const cors = require('cors');


connectToMongo();
const app = express()
const port = 5000

app.use(express.json())
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Available Rouets
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
    console.log(`WriteNow listening on port ${port}`)
})