import axios from 'axios';

const url = 'https://covid-api.mmediagroup.fr/v1/cases';

export const fetchCountries = async () => {
    try {
        return await axios.get(url);
    }
    catch(error) {

    }
}

export const fetchCountryData = async (country) => {
    try {
        return await axios.get(`${url}?country=${country}`);
    }
    catch(error) {

    }
}

export const fetchCoordinates = async () => {
    try {
        return await axios.get(`${url}`);
    }
    catch(error) {

    }
}