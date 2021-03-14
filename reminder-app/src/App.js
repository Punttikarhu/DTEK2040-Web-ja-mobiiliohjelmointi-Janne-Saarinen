import React from 'react';
import ReminderForm from './components/ReminderForm'
import ViewReminders from './components/ViewReminders'
import reminderService from './services/reminders'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reminders: props.reminders,
      newName: '',
      newTime: ''
    }
  }

  componentDidMount() {
    reminderService
      .getAll()
      .then(response => {
        this.setState({ reminders: response.data })
      })
  }

  addReminder = (event) => {
    event.preventDefault()

    const name = this.state.newName;

    const filteredTopics = this.state.reminders.filter(n => n.name === name)

    if (filteredTopics.length > 0) {
      alert("Reminder already exists")
      this.setState({newName: ''})
      return
    }

    const reminderObject = {
      name: name,
      timestamp: this.state.newTime
    }

    reminderService
      .create(reminderObject)
      .then(response => {
      this.setState({
        reminders: this.state.reminders.concat(response.data),
        newName: ''
      })
    })
  }

  handleReminderChange = (event) => {
    this.setState({ newName: event.target.value })
  }

  handleTimeChange = (event) => {
    console.log(event.target.value)
    this.setState({ newTime: event.target.value})
  }

  handleDelete = (id) => {
    if (window.confirm('Do you really want to delete this?')) {
      reminderService
        .deleteEntry(id)
        .then(() => {
          reminderService
          .getAll()
          .then(response => {
            this.setState({ reminders: response.data })
          })
        })
    }
  }

  render() {
    return (
      <div>
        <h2>Add reminder</h2>
        <ReminderForm addReminder={this.addReminder} 
                      newName={this.newName} handleReminderChange={this.handleReminderChange}
                      newTime={this.newTime} handleTimeChange={this.handleTimeChange} />

        <h2>Reminders</h2>
        <ViewReminders reminders={this.state.reminders} handleDelete={this.handleDelete}  />
      </div>
    )
  }
}

export default App