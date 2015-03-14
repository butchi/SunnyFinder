window.licker = window.licker || {};
(function(ns) {
  'use strict';

  $(function() {
    init();
  });

  function init() {
    console.log('init');
    ns.page.top.init();
  }
}(window.licker));
