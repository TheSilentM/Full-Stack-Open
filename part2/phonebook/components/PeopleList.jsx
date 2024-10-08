
const PeopleList = ({ filteredResults, deleteSelectedPerson}) => {
    return (
        <>
            <div>
                <ul>
                    {filteredResults.map((person) => <li key={person.id}>{person.name}, {person.number} <button onClick={() => deleteSelectedPerson(person.id)}>delete</button> </li>)}
                </ul>
            </div>
        </>
    )
}

export default PeopleList;