// $ npx json-server --port 3001 --watch db.json
// $ npm start

import React, { useState, useEffect } from 'react'
//import axios from 'axios';
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import personService from './services/personService'

const Notification = ({successMessage}) => {
  if ( successMessage === null) {
    return null
  }

  return (
    <div className="success">
      {successMessage}
    </div>
  )
}

const App = () => {

  const [ persons, setPersons ] = useState([{ person: null, phone: null }])

  const [ newName, setNewName ] = useState('')

  const [ newPhone, setNewPhone ] = useState('')

  const [ counter, setCounter ] = useState(0)

  const [successMessage, setSuccessMessage] = useState(null)

  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
        setFiltered(response.data)
        let max = 0
        response.data.forEach((object) => {
          console.log(object.id);
          if(object.id > max) {
            max = object.id
          }
        });

        setCounter(max)

        //setCounter(response.data.length)
      })
  }, [])

  console.log('counter', counter)

  const handleFilter = (event) => {

    event.preventDefault()

    let value = event.target.value.toLowerCase();

    let result = [];

    console.log('value', value);

    result = persons.filter((person) => {

      console.log('person.name', person.name);

      return person.name.toLowerCase().indexOf(value) !== -1;

    });

    setFiltered(result)

  }

  const addPerson = (event) => {

      event.preventDefault()

      console.log('Clicked', event.target)

      const personObject = {
        name: newName,
        phone: newPhone,
        date: new Date().toISOString(),
        important: Math.random() < 0.5,
        id: counter + 1,
      }

      console.log('personObject', personObject.name, personObject.phone)

      console.log('persons', persons)

      const personExists = persons.filter((person) => person.name === personObject.name)

      console.log('personExists ', personExists)

      if (personExists.length === 0) {

        console.log('personExists.length ', personExists.length)

        //setPersons(persons.concat(personObject))

        // $ npm install axios

        personService.create(personObject)
        .then(response => {

          console.log('response', response)
          
          setPersons(persons.concat(response.data))

          setFiltered(persons.concat(response.data))

          setCounter(personObject.id)

          setSuccessMessage(`Added ${personObject.name}`)

          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000)
        })
      } else {
        alert(`${newName} is already added to phonebook`)
      }
      
      setNewName('')
      setNewPhone('')
    }

    const handleNameChange = (event) => {
      console.log('handleNameChange', event.target.value)
      setNewName(event.target.value)
    }

    const handlePhoneChange = (event) => {
      console.log('handlePhoneChange', event.target.value)
      setNewPhone(event.target.value)
    }

    const handleDeletePerson = (event,person) => {

      event.preventDefault()

      const id = event.target.value;

      console.log('handleDeletePerson', id, person)

      if (window.confirm('Delete ' + person + '?')) {

        personService.deletePerson(id)
        .then(response => {
          personService
          .getAll()
          .then(response => {
            setPersons(response.data)
            setFiltered(response.data)
          })
        })
      }
    }

    return (
      <div>
        <h2>Phonebook</h2>
        <Notification successMessage={successMessage}/>
        <Filter persons={persons} handleFilter={handleFilter}/>
        <h3>Add New</h3>
        <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newPhone={newPhone} handlePhoneChange={handlePhoneChange}/>
        <h2>Numbers</h2>
        <Persons persons={persons} filtered={filtered} handleFilter={handleFilter} handleDeletePerson={handleDeletePerson}/>
      </div>
    )
}

export default App

