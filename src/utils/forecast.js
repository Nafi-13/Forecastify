const request = require('request')

const forecast=(latitude, longitude,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=49d3f007d1144d96b66720b1fed27ee0&query='+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)
    request({url:url,json:true}, (error,{body})=>{
        if(error)
        {
            callback('Unable to connect to weather service!',undefined)
        }
        else if(body.error)
        {
            callback('Unable to find location',undefined)
        }
        else
        {
            callback(undefined,body.current.weather_descriptions[0]+'. It is currently '+body.current.temperature+' degrees out . It feels like '+body.current.feelslike+' degress out')
        }
    })
}

module.exports = forecast