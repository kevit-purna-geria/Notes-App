const { response } = require('express')
const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const forecast = (latitude, longitude, callback) => {
        const url = "http://api.weatherapi.com/v1/current.json?key=260094bab3814494a4b61752232804&q="+longitude+","+latitude+"aqi=no"
    
        request({ url: url, json: true }, (error, response) => {
            if (error) {
                callback('Unable to connect to weather service!', undefined)
            } else if (response.body.error) {
                callback('Unable to find location', undefined)
            } else {
                callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
            }
        })
    }
    
    module.exports = forecast

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast