const request = require('request')

const geocode = (address, callback) => {
   const url2 = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiZHNkYXMxMjMyMyIsImEiOiJjbDQ4ZmIxNXAwaDJqM2tvODF1cGdpNmpxIn0.31xBRuE6WixHORSKqAe5Tw`
    
    request({ url: url2, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to location services!', undefined)
        }else if(response.body.features.length === 0){
            callback('Unable to find location!', undefined)
        }else{
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0]
            })
        }
    })
}

module.exports = geocode