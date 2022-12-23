import './css/styles.css';
import 'notiflix/dist/notiflix-3.2.5.min.css';
import debounce from 'lodash.debounce'
import getRefs from './countries-refs'
import fetchCountries from './fetchCountries';
import Notiflix from 'notiflix'
import { addMarkupForCountriesList, addMarkupForOneCountry, cleanMarkup} from './markup-renders';


const DEBOUNCE_DELAY = 300;
const refs = getRefs()

refs.inputRef.addEventListener('input', debounce(onInputRefInput, DEBOUNCE_DELAY))

function onInputRefInput(e) {
    const inputValue = e.target.value.trim()

    if (inputValue.length > 0){
        fetchCountries(inputValue)
            .then(countries => {
                onFetchCountries(countries)
            })
            .catch(() => Notiflix.Notify.failure('Oops, there is no country with that name'))
        }
}

function onFetchCountries(countries) {
            if (countries.length > 10) {
                cleanMarkup(refs.countryListRef)
                cleanMarkup(refs.countryInfoRef)
                Notiflix.Notify.info('Too many matches found. Please enter a more specific name.')
            }
            else if (countries.length === 1) {
                cleanMarkup(refs.countryListRef)
                addMarkupForOneCountry(countries)
            }
            else {
                cleanMarkup(refs.countryListRef)
                cleanMarkup(refs.countryInfoRef)
                addMarkupForCountriesList(countries)
            }
        }






