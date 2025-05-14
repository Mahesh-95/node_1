const express = require('express');
const dotenv = require('dotenv');
const dbConnection = require("./config/db");

const app = express()

dotenv.congig();   
dbConnection();


app.use(express.json());

// app.use('/api/user', userRoutes)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running in PORT ${PORT}`)
})