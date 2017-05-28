var axios = require('axios');

const OPEN_WEATHER_MAP = 'http://api.openweathermap.org/data/2.5/weather?appid=2869817360a514232d9257ad85ecd020&units=metric';

module.exports = {
  getTemp: function (location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(response){
      debugger;
      if(response.data.cod && response.data.message){
        throw new Error(response.data.message);
      }else{
        return response.data.main.temp;
      }
      }, function (response) {
        throw new Error(response.data.message);
    });
  }
}
