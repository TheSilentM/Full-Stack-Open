
const SearchCountries = ({filter, handleSearchCountries}) => {
    return (
      <>
        <div>
          find countries: <input value={filter} onChange={handleSearchCountries} />
        </div>
      </>
    )
  }

export default SearchCountries;