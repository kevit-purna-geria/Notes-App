const { response } = require('express')
const request = require('request')

// Get Weather from Longitude and Latitude
const url = "http://api.weatherapi.com/v1/current.json?key=260094bab3814494a4b61752232804&q=34.053691,.242766aqi=no"
request({url : url}, (error,response)=>{
    if(error){
        console.log("Unable to Connect...!")
    }else if(response.body.error){
        console.log("Unable to find Location")
    }else{
        const data = JSON.parse(response.body)
        console.log(data.current)
    }

})

// Get Longitude and Latitude co ordinates from address
const url2 = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicHVybmE0MTkiLCJhIjoiY2xoMDY5Yjd0MHEyaTNvcDR4azZicXF1bCJ9.NakadZXWKZsCnmGUaBB2jQ&limit=1"
request({url:url2}, (error, response)=>{
    // Open response Body
    const body = JSON.parse(response.body)

    // open body features
    const features = body.features
    if(features.length<1){
        console.log("No Location Found")
    }else{
    // Co-ordinates
    const cord = features[0].center
    
    console.log(features[0].place_name)

    //Latitude
    const longitude = cord[0]

    // Longitude
    latitude = cord[1]
    }
})


const geoCode = (address, callback)=>{
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoicHVybmE0MTkiLCJhIjoiY2xoMDY5Yjd0MHEyaTNvcDR4azZicXF1bCJ9.NakadZXWKZsCnmGUaBB2jQ&limit=1"

    request({url, url, json :true}, (error, response)=>{
        if(error){
            callback("Unable to connect...!", undefined)
        }else if(response.body.features.length ===0){
            callback("Unable to find location...!", undefined)
        }else{
            const features = response.body.features
            // Co-ordinates
            const cord = features[0].center
                
            //Longitude
            const longitude = cord[0]
            
            // Latitude
            latitude = cord[1]
            callback(undefined, {
                latitude : latitude,
                longitude : longitude,
                location : features[0].place_name
            })
        }
    })
    // console.log(url)

}

geoCode("gujarat",(error, data)=>{
    console.log("Error : ", error)
    console.log("Data : ", data)
})
