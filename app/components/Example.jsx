var React = require('react');
var {Link} = require('react-router');
/*
var Example = React.createClass({
  render: function (){
    return (
     <h2>Example components</h2>
    );
  }
});
*/

var Example = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Taipei'>Taipei</Link>
        </li>
        <li>
          <Link to='/?location=Taoyuan'>Taoyuan</Link>
        </li>
      </ol>
    </div>
    )
};

module.exports = Example;
