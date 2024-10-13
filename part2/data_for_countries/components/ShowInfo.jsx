
const Show = ({filteredResults}) => {
    const country = filteredResults[0];
        return (
          <div>
            <h2>{country.name}</h2>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}</p>
            <br />
            <p>Languages: {country.languages}</p>
            <img src={country.flag} width="200px" height="150px" alt="Country flag"></img>
          </div>
        );
}

export default Show;