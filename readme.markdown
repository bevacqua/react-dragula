[![logo.png][3]][2]

> Drag and drop so simple it hurts

Official React wrapper for [`dragula`][4].

# Demo

[![demo.png][1]][2]

Try out the [demo][2]!

# Install

You can get it on npm.

```shell
npm install react-dragula --save
```

Or bower, too.

```shell
bower install react-dragula --save
```

# Usage

Refer to the documentation for [`dragula`][4]. The API for `react-dragula` is identical, but a few tiny tweaks were made around it so that it works out the box with React.

# Example

Here's an example application using `react` and `react-dragula`.

```jsx
var React = require('react');
var dragula = require('react-dragula');
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
    dragula([container]);
  }
});
React.render(<App />, document.getElementById('examples'));
```

# Example using refs (ES2015 syntax)

Here's an example using refs (ES2015 syntax):  [React: The ref Callback Attribute](https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute)

```jsx
import * as React from "react";
import * as ReactDOM from 'react-dom';
import Dragula from 'react-dragula';
export class App extends React.Component {
  render () {
    return <div className='container' ref={this.dragulaDecorator}>
      <div>Swap me around</div>
      <div>Swap her around</div>
      <div>Swap him around</div>
      <div>Swap them around</div>
      <div>Swap us around</div>
      <div>Swap things around</div>
      <div>Swap everything around</div>
    </div>;
  },
  dragulaDecorator = (componentBackingInstance) => {
    if (componentBackingInstance) {
      let options = { };
      Dragula([componentBackingInstance], options);
    }
  };
});
ReactDOM.render(<App />, document.getElementById('examples'));
```

# License

MIT

[1]: https://github.com/bevacqua/react-dragula/blob/master/resources/demo.png
[2]: http://bevacqua.github.io/react-dragula/
[3]: https://github.com/bevacqua/react-dragula/blob/master/resources/logo.png
[4]: https://github.com/bevacqua/dragula
