import axios from 'axios';

const url = 'https://corona-api.com/countries';
var countryCodes = {};

export const fetchCountries = async () => {
    try {
        return await axios.get(url).then((response)=>{
            const {data: { data: countries } }  = response;
            return countries;
        }).catch(error => {

        });
    }
    catch(error) {

    }
}

export const fetchCountryData = async (country) => {
    try {
        if(country != 'Global'){
            return await axios.get(`${url}/${countryCodes[country.toLowerCase()]}`).then((response)=>{
                const {data: { data: { latest_data } } } = response;
                console.log(latest_data)
                return latest_data;
            }).catch(error => {
    
            });
        }
    }
    catch(error) {

    }
}

export const fetchCoordinates = async () => {
    try {
        return await axios.get(url).then((response)=>{
            const {data: { data: countries } } = response;
            let coordinateArray = [];
            
            countries.map(countryObj => {
                //set all country codes
                countryCodes[countryObj.name.toLowerCase()] = countryObj.code;

                coordinateArray.push({
                    lat: countryObj.coordinates.latitude,
                    long: countryObj.coordinates.longitude,
                    cases: countryObj.latest_data.confirmed,
                    recovered: countryObj.latest_data.recovered,
                    deaths: countryObj.latest_data.deaths,
                    country: countryObj.name
                });
            });
            return (coordinateArray);
        }).catch(error => {

        });
    }
    catch(error) {

    }
}