
const PeopleList = ({ filteredResults }) => {
    return (
        <>
            <div>
                <ul>
                    {filteredResults.map((person) => <li key={person.id}>{person.name}, {person.number}</li>)} 
                </ul>
            </div>
        </>
    )
}

export default PeopleList;