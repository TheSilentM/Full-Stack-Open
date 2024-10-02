


const PersonForm = ({ add, name, handleChangePerson, number, handleChangeNumber }) => {
    return (
        <>
            <form onSubmit={add}>
                <h2>Add new Number</h2>
                <div>
                    name: <input value={name} onChange={handleChangePerson}/>
                </div>
                <div>
                    number: <input value={number} onChange={handleChangeNumber}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </>
    )
};

export default PersonForm;