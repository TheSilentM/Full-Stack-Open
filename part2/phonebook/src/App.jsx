import { useState } from 'react'

const App = () => {
  const [people, setPeople] = useState([
    {name: "Arto Hellas"},
  ]);

  const [newName, setNewName] = useState("");


  const addPerson = (e) => {
    e.preventDefault();
    const nameObject = {
      name: newName
    };

    if (people.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPeople(people.concat(nameObject));
      setNewName("");
    }
  }

  const handleChange = (e) => {
    setNewName(e.target.value);
  }

  return (
    <div>
      <div>
        <h2>Phonebook</h2>
      </div>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {people.map((person, i) => <li key={i}>{person.name}</li>)}
      </ul>
    </div>
  )
}

export default App
