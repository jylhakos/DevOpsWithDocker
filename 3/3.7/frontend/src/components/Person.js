import React from 'react'

const Person = ({ id, person, phone, handleDeletePerson }) => {

  console.log('id', id, 'person', person, 'phone', phone)

  return ( 
      person != null ? ( <tr><td>{person}</td> <td>{phone}</td> <td><button type="submit" value={id} onClick={(e) => handleDeletePerson(e,person)}>Delete</button></td></tr> ) : null
      )
}

export default Person