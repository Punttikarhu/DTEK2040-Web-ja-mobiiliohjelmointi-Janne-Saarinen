import React from 'react'

const ReminderForm = ({ addReminder, newName, handleReminderChange, newTime, handleTimeChange})  => {
    return(
    <div>
        <form onSubmit={addReminder}>
            <div>
                Topic: <input value={newName} onChange={handleReminderChange} />
            </div>
            <div>
                At time: <input type="datetime-local" value={newTime} onChange={handleTimeChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    </div>
    )
}

export default ReminderForm