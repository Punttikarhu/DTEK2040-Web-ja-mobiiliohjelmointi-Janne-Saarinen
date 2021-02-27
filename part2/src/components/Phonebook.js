import React from 'react'

const Header = ({ title }) => {
    return(
      <div>
        <h1>
          {title}
        </h1>
      </div>
    )
  }

const Entry = ({ contact }) => {
return(
    <tr>
       <td> Name: {contact.name}</td><td> Number: {contact.phonenumber}</td>
    </tr>
)
}

const Contacts = ({ contacts }) => {
return(
    <div>
        <table style={{width:50 +'%'}}>
            <tbody>
                {contacts.map(contact => <Entry key={contact.name} contact={contact} />)} 
            </tbody>                       
        </table>
    </div>
)
}

const Total = ({ contacts }) =>  {
const count = (array) => {
    var count = 0
    array.forEach(() => {
    count++;
    });
    return count
}
return(
    <div>
    <br></br>
    Total number of entries: {count(contacts)}
    </div>
)
}

const Phonebook = ({ phonebook }) => {
return(
    <div>
    <Header title={phonebook.title}/>
    <Contacts contacts={phonebook.contacts} />
    <Total contacts={phonebook.contacts} />
    </div>
)
}

export default Phonebook