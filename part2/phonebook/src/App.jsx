import { useState, useEffect } from 'react';
import PeopleList from "../components/PeopleList";
import PersonForm from "../components/PersonForm";
import SearchNumbers from '../components/SearchNumbers';
import services from "../src/services/numbers";
import axios from "axios";

const App = () => {
  const [people, setPeople] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchFilter, setSearchFilter] = useState("");

  //promise asynchronous function
  const hook = () => {
    services.getAll().then(response => {
      setPeople(response.data);
    });
  }

  useEffect(hook, []);

  const addPerson = (e, id) => {
    e.preventDefault();
    const nameObject = {
      name: newName, number: newNumber
    };

    //.find creates a new array where you can take the id that corresponds to the selected person.
    //confirm with window.confirm and if is true, put the new number on the nameObject in the JSON server, using axios.put
    //if th id of the person is not equal to the id of the existingPerson, set people array to all the people array, else on the data that the response has send.
    
    const existingPerson = people.find(person => person.name === newName);
    if (existingPerson) {
      const confirmUpdate = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`);
      if (confirmUpdate) {
        services.putNewNumbers(existingPerson.id, nameObject).then(response => {
          setPeople(people.map(person => person.id !== existingPerson.id ? person : response.data));
          setNewName("");
          setNewNumber("");
        })
      }
    } else {
      services.save(nameObject).then(response => {
        setPeople(people.concat(response.data));
        setNewName("");
        setNewNumber("");
      })
    }
  }

  const handleChangePerson = (e) => {
    setNewName(e.target.value);
  }

  const handleChangeNumber = (e) => {
    setNewNumber(e.target.value);
  }

  const handleSearchNumbers = (e) => {
    setSearchFilter(e.target.value);
  }

  const filter = people.filter(person => person.name.toLowerCase().includes(searchFilter.toLowerCase()));
  
  const deleteSelectedPerson = (id) => {
    const confirmation = window.confirm("Do you really want to deleter this number?");
    if(confirmation) {
      services.deleteItem(id).then(response => {
        setPeople(people.filter(person => person.id !== response.data));
      })
    }
  }



  return (
    <div>
      <div>
        <h1>Phonebook</h1>
      </div>
      <SearchNumbers people={people} searchFilter={searchFilter} handleSearchNumbers={handleSearchNumbers}/>
      <PersonForm add={addPerson} name={newName} handleChangePerson={handleChangePerson} number={newNumber} handleChangeNumber={handleChangeNumber}/>
      <h2>Numbers</h2>
      <PeopleList filteredResults={filter} deleteSelectedPerson={deleteSelectedPerson}/>
    </div>
  )
}

export default App
