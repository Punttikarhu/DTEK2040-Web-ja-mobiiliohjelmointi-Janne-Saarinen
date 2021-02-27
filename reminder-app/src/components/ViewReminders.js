import React from 'react'

const ViewReminders = ({ reminders, handleDelete }) => {

    const formatTimestring = (timestring) => {
        const date = new Date(timestring)
        return(
          date.toLocaleString()
        )
    }

    return(
    <div>
        {reminders.map(reminder => {
            return(
            <div style={{whiteSpace:"pre"}} key={reminder.name}>
                {formatTimestring(reminder.timestamp)}{" "}{reminder.name}{" "}
                <button onClick={() => handleDelete(reminder.id)}>delete</button><br /> <br />
            </div>
            )})}
    </div>     
    )
}


export default ViewReminders