const mongoose = require('mongoose')
const password = 'G25rSoIAzN7dRisg'
const connectionString = `mongodb+srv://Andres:${password}@clusterone.imf7u.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('DataBase Connected'))
  .catch((err) => console.error(err))
