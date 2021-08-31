// intial pacage requirements for api
const esm = require('esm')
const express = require('express')

// environment  variable
require('dotenv').config()
// mongodb connection
const dbconfig = require('./db.js')

const app = express()

const port = process.env.PORT || 8000

app.listen(port, () => console.log(`Server is running on port => ${port}`))
