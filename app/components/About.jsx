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
    <h2>About</h2>
    <p>Welcome to example page!</p>
  </div>
      )
};

module.exports = About;
