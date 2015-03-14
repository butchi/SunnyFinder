window.licker = window.licker || {};
window.licker.page = window.licker.page || {};
(function(ns, app) {
  'use strict';

  function init() {
    console.log('page-top');
  }

  /*
   */
  function update() {
  }

  app.top = {
    init: init,
    update: update
  }
}(window.licker, window.licker.page));
