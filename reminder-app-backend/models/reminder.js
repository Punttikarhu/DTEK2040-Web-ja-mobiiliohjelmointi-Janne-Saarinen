const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true})

const Reminder = mongoose.model('Reminder', {
  name: String,
  timestamp: Date
})

module.exports = Reminder