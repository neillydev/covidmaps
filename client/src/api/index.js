import axios from 'axios';

const url = 'https://covid-api.mmediagroup.fr/v1/cases';

export const fetchCountries = async () => {
    try {
        return await axios.get(url).then((response)=>{
            const { data: allData } = response;
            let countryArray = ["Global", "US"];
            for(const [country] of Object.entries(allData)) {
                countryArray.push(countryArray.includes(country) ? null : country);
            }
            return countryArray;
        }).catch(error => {

        });
    }
    catch(error) {

    }
}

export const fetchCountryData = async (country) => {
    try {
        return await axios.get(`${url}?country=${country}`).then((response)=>{
            return response;
        }).catch(error => {

        });
    }
    catch(error) {

    }
}

export const fetchCoordinates = async () => {
    try {
        return await axios.get(url).then((response)=>{
            const { data: allData } = response;
            let coordinateArray = [];
            for(const [country, {All: countryData}] of Object.entries(allData)) {
                coordinateArray.push({
                    lat: countryData.lat,
                    long: countryData.long,
                    cases: countryData.confirmed,
                    recovered: countryData.recovered,
                    deaths: countryData.deaths,
                    country: countryData.country
                });
            }
            return (coordinateArray);
        }).catch(error => {

        });
    }
    catch(error) {

    }
}