import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const phonebookapp = {
    title: 'Superadvanced web phonebook app',
    contacts: [
    {
      name: 'John Doe',
      phonenumber: '358401234567'
    },
    {
      name: 'Jane Doe',
      phonenumber: '44551234567'
    },
    {
      name: 'Foo bar',
      phonenumber: '000'
    }
    ]
  }

  const Header = (props) => {
    return(
      <div>
        <h1>
          {props.title}
        </h1>
      </div>
    )
  }

  const Entry = (props) => {
    return(
      <div>
        {props.contact.name}{" "}{props.contact.phonenumber}
      </div>
    )
  }

  const Contents = (props) => {
    return(
      <div>
        <Entry contact={props.contacts[0]}/> 
        <Entry contact={props.contacts[1]}/> 
        <Entry contact={props.contacts[2]}/>                        
      </div>
    )
  }


  return (
    <div>
      <Header title={phonebookapp.title}/>
      <Contents contacts={phonebookapp.contacts} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)