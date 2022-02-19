import React from 'react'
import Person from './Person'

const Persons = ({ persons, filtered, handleDeletePerson }) => {

  return (  
    <div style={{padding:5}}>
      <table>
        { filtered.map(person => <Person key={person.id} id={person.id} person={person.name} phone={person.phone} handleDeletePerson={handleDeletePerson}/> )}
      </table>
    </div>
    )

}

export default Persons