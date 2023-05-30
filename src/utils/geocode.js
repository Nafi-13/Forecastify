const request = require('request')

const geocode = (address, callback) =>{
    const url = 'https://api.opencagedata.com/geocode/v1/json?key=2b430d8289f04f098787db4e851615a5&q='+encodeURIComponent(address)
    request({ url:url, json:true },(error,response)=>{
        if(error)
        {
            callback('Unable to connect to location services!',undefined)
        }
        else if(response.body.results.length===0)
        {
            callback('Unable to find location. Try another search!',undefined)
        }
        else
        {
            callback(undefined,{
                latitude: response.body.results[0].geometry.lat,
                longitude: response.body.results[0].geometry.lng,
                location: response.body.results[0].formatted
            })
        }
    })
}

module.exports = geocode