const mongoose = require('mongoose')

const password = process.env.DATABASE_PASSWORD
const connection = process.env.DATABASE_PRODUCTION.replace(
  '<password>',
  password
)
// db connection
mongoose
  .connect(connection, {
    useunifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('**DB connected**'))
  .catch((err) => console.log('**DB not Connected'))

export default mongoose
