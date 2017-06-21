var React = require('react');

/*
var About = React.createClass({
  render: function (){
    return (
     <h2>About components</h2>
    );
  }
});
*/

var About = (props) => {
  return (
  <div>
    <h1 className="text-center page-title">About</h1>
    <p>
      This is a weather application build on React.  I have built this for The Complete React Web App Developer Course.
    </p>
    <p>
      Here are some of the tools I used:
    </p>
    <ul>
      <li>
        <a href="https://facebook.github.io/react">React</a> - Javascript framework
      </li>
      <li>
        <a href="https://openweathermap.org">Open Weather Map</a> - API to get weather data
      </li>
    </ul>
  </div>
      )
};

module.exports = About;
