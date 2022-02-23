import React from 'react'
import Person from './Person'

const Filter = ({ persons, handleFilter }) => {

  console.log('person', persons.name)

  return ( 
        <div>
          <label>Filter: </label><input value={persons.name} onChange={handleFilter}/>
        </div>
      )
}

export default Filter