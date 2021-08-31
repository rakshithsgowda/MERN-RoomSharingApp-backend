const mongoose = require('mongoose')

// db connection
mongoose
  .connect(process.env.DATABASE_LOCAL, {
    useunifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('**DB connected**'))
  .catch((err) => console.log('**DB not Connected'))

export default mongoose
