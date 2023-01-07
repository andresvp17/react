const mongoose = require('mongoose')
const PASSWORD = 'G25rSoIAzN7dRisg'
const CONNECTION_URL = `mongodb+srv://Andres:${PASSWORD}@clusterone.imf7u.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('DataBase Connected'))
  .catch((err) => console.error(err))
