'use strict';

var dragula = require('dragula');
var atoa = require('atoa');

function reactDragula () {
  return dragula.apply(this, atoa(arguments)).on('cloned', cloned);

  function cloned (clone) {
    rm(clone);
    atoa(clone.getElementsByTagName('*')).forEach(rm);
  }

  function rm (el) {
    el.removeAttribute('data-reactid');
  }
}

module.exports = reactDragula;
