const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodedUrl = encodeURI(direccion);

    let response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }`)

    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la busqueda: ${ direccion }`)
    }

    let location = response.data.results[0];

    return {
        direccion: response.data.results[0].formatted_address,
        lat: location.geometry.location.lat,
        lng: location.geometry.location.lng
    }
}

module.exports = {
    getLugarLatLng
}