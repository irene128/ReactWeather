var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false
    }
  },
  handleSearch: function(location){
    var that = this;

    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading : false
      });
      },function (errMeg) {
        that.setState({
          isLoading: false
                });
          alert(errMeg);
    });
  },
  render: function (){
  var {isLoading, temp, location} = this.state;
 function renderMessage(){
    if(isLoading){
      return <h4>Fetching..................</h4>;
    }else if (temp && location){
      return <WeatherMessage temp={temp} location={location}/>;
    }
 }

    return (
    <div>
     <h2>Weather Component</h2>
     <WeatherForm onSearch={this.handleSearch}/>
     {renderMessage()}
    </div>
    );
  }
});

module.exports = Weather;
