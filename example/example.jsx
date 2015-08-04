'use strict';

var React = require('react');
var reactDragula = require('..');
var App = React.createClass({
  render: function () {
    return <div className='container'>
      <div>Swap me around</div>
      <div>Swap her around</div>
      <div>Swap him around</div>
      <div>Swap them around</div>
      <div>Swap us around</div>
      <div>Swap things around</div>
      <div>Swap everything around</div>
    </div>;
  },
  componentDidMount: function () {
    var container = React.findDOMNode(this);
    reactDragula([container]);
  }
});
React.render(<App />, document.getElementById('examples'));
