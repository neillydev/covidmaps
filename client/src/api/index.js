import axios from 'axios';

const url = 'https://covid-api.mmediagroup.fr/v1/cases';

export const fetchCountries = async () => {
    try {
        const { data: allData } = await axios.get(url)
        let countryArray = [];
        for(const [country] of Object.entries(allData)) countryArray.push(country);
        return countryArray;
    }
    catch(error) {

    }
}