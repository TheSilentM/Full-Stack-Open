import { useState } from 'react';
import PeopleList from "../components/PeopleList";
import PersonForm from "../components/PersonForm";
import SearchNumbers from '../components/SearchNumbers';

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


  const addPerson = (e) => {
    e.preventDefault();
    const nameObject = {
      name: newName, number: newNumber, id: people.length + 1
    };

    if (people.some(person => person.name === newName && person.number === newNumber)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPeople(people.concat(nameObject));
      setNewName("");
      setNewNumber("");
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

  const filter = people.filter( person => person.name.toLowerCase().includes(searchFilter.toLowerCase()));

  return (
    <div>
      <div>
        <h1>Phonebook</h1>
      </div>
      <SearchNumbers people={people} searchFilter={searchFilter} handleSearchNumbers={handleSearchNumbers}/>
      <PersonForm add={addPerson} name={newName} handleChangePerson={handleChangePerson} number={newNumber} handleChangeNumber={handleChangeNumber}/>
      <h2>Numbers</h2>
      <PeopleList filteredResults={filter}/>
    </div>
  )
}

export default App
