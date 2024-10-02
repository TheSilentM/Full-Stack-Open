
const SearchNumbers = ({ searchFilter, handleSearchNumbers}) => {

    return (
        <>
            <div>
                Search numbers: <input value={searchFilter} onChange={handleSearchNumbers}/>
            </div>
        </>
    )
}

export default SearchNumbers;