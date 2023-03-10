export default function fetchCountries(countryName) {
        return fetch(`https://restcountries.com/v2/name/${countryName}?fields=name,capital,population,flags,languages`)
        .then(response => {return response.json()})}