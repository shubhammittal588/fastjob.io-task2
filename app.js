const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000

app = express()

const mongoURI = "mongodb://localhost:27017/pet-api"
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => console.log("MongoDB connected"))
    .catch((err) => console.log(err))

app.listen(PORT, console.log(`Server is listening on port ${PORT}`))