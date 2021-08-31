// intial pacage requirements for api
const esm = require('esm')
const express = require('express')

// file imports
import roomsRoute from './routes/roomsRoute.js'

// environment  variable
require('dotenv').config()
// mongodb connection
const dbconfig = require('./db.js')
// initailaize express
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes
app.use('/api/rooms', roomsRoute)

const port = process.env.PORT || 8000

app.listen(port, () => console.log(`Server is running on port => ${port}`))
