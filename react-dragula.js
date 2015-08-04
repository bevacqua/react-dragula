'use strict';

var dragula = require('dragula');

function reactDragula () {
  return dragula.apply(this, arguments).on('cloned', cloned);

  function cloned (clone) {
    rm(clone);
    Array.prototype.slice.call(clone.getElementsByTagName('*')).forEach(rm);
  }

  function rm (el) {
    el.removeAttribute('data-reactid');
  }
}

module.exports = reactDragula;
