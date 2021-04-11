require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(express.static('build'))

const Reminder = require('./models/reminder')

// let reminders = [
//       {
//         "name": "Buy some eggs",
//         "timestamp": "2021-11-10T13:00:00.141Z",
//         "id": 1
//       },
//       {
//         "name": "Make an omelette",
//         "timestamp": "2021-11-11T08:00:00.141Z",
//         "id": 2
//       },
//       {
//         "name": "Wash dishes",
//         "timestamp": "2021-11-11T09:00:00.000Z",
//         "id": 3
//       },
//       {
//         "name": "Buy more eggs",
//         "timestamp": "2021-11-11T13:00:00.000Z",
//         "id": 4
//       }
//     ]

const formatReminder = (reminder) => {
  return {
    name: reminder.name,
    timestamp: reminder.timestamp,
    id: reminder._id
  }
}

app.get('/api/reminders', (req, res) => {
  Reminder
    .find({})
    .then(reminders => {
      res.json(reminders.map(formatReminder))
  })
})

app.get('/api/reminders/:id', (req, res) => {
  Reminder
    .findById(req.params.id)
    .then(reminder => {
      res.json((formatReminder(reminder)))
    })
})

app.delete('/api/reminders/:id', (req, res) => {
  Reminder
    .findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(204).end()
    })
})


// const generateId = () => {
//   return Math.floor(Math.random() * (10000000 - 1) + 1)
// }

app.post('/api/reminders', (req, res) => {
  const body = req.body

  if (body.name === undefined || body.timestamp === undefined) {
    return res.status(400).json({error: 'content missing'})
  }

  const reminder = new Reminder({
    name: body.name,
    timestamp: body.timestamp,
  })

  reminder
    .save()
    .then(savedReminder => {
      res.json(formatReminder(savedReminder))
    })
})



const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})