export { addMarkupForCountriesList, addMarkupForOneCountry, cleanMarkup }

import getRefs from "./countries-refs";

const refs = getRefs()

function renderMarkupForCountriesList(countries){
    return countries.map(({name, flags}) =>
        `<li class="country"><img src="${flags.svg}"
            alt="Flag of ${name}" />
            <p>${name}</p></li>`
    )
    .join('');
}

function renderMarkupForOneCountry(countries) {
    return countries.map(({name, languages, capital, population, flags}) =>
        `<div><img src="${flags.svg}"
        alt="Flag of ${name}" />
        <h1>${name}</h1></div>
        <p><span class="country_property">Capital:</span> ${capital}</p>
        <p><span class="country_property">Population:</span> ${population.toLocaleString()}</p>
        <p><span class="country_property">Languages:</span> ${Object.values(languages).map((language) =>" " + language.name)}</p>
        <p><span class="country_property">Read more:</span> <a href="https://en.wikipedia.org/wiki/${name}" target="_blank">${name}</a></p>`
    )
}

function addMarkupForOneCountry(countries){
    refs.countryInfoRef.innerHTML = renderMarkupForOneCountry(countries)
}

function addMarkupForCountriesList(countries){
   refs.countryListRef.innerHTML = renderMarkupForCountriesList(countries);
}

function cleanMarkup(element) {
    return element.innerHTML = ''
}
