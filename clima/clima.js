const axios = require('axios');

const getClima = async(lat, lng) => {
    let apiKey = 'faf7d07c1aa86783348f5ea236f24e5d';
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=${ apiKey }`)

    return response.data.main.temp;
}

module.exports = {
    getClima
}