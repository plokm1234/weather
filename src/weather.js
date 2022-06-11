const request = require('request')

const weather = (data, callback) => {
   const url = `http://api.weatherstack.com/current?access_key=6b33c88492aa14533b12c6a836eae5c0&query=${data.latitude},${data.longitude}`

    request({ url: url, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to weather services!', undefined)
        }else if(response.body.current.length === 0){
            callback('Unable to find the weather!', undefined)
        }else{
            callback(undefined, {
                data1: response.body.current.temperature,
                data: response.body.current.feelslike,
                location: response.body.location.name
            })
        }
    })
}

module.exports = weather