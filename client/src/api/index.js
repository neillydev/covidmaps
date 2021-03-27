import axios from 'axios';

const url = 'https://covid-api.mmediagroup.fr/v1/cases';

export const fetchCountries = async () => {
    try {
        const { data: allData } = await axios.get(url);
        let countryArray = ["Global", "US"];
        for(const [country] of Object.entries(allData)) {
            countryArray.push(countryArray.includes(country) ? null : country);
        }
        return countryArray;
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