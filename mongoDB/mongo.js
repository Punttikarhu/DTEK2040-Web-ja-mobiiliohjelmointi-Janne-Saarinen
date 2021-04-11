require('dotenv').config()
const mongoose = require('mongoose')

if (process.argv.length === 4) {


const name = process.argv[2]
const date = process.argv[3]

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true})

const Reminder = mongoose.model('Reminder', {
  name: String,
  timestamp: Date
})

const reminder = new Reminder({
  name: name,
  timestamp: date
})

reminder
  .save()
  .then(response => {
    console.log(`adding person Reminder "${name}" at ${date} to the reminder database`)
    mongoose.connection.close()
  })     
} else {

    mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true})

    const Reminder = mongoose.model('Reminder', {
      name: String,
      timestamp: Date
    })

    Reminder
      .find({})
      .then(reminders => {
        console.log("Reminders:")
        reminders.map((reminder, i) => {
          if (i === reminders.length - 1) {
            console.log(`${reminder.name}, ${reminder.timestamp}`)            
          } else {
            console.log(`${reminder.name}, ${reminder.timestamp},`)
          }
        })
        mongoose.connection.close()
      })

}