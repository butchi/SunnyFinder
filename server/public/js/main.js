window.licker = window.licker || {};
(function(ns) {
  'use strict';

  $(function() {
    init();
  });

  function init() {
    ns.page.top.init();
    
    $.getJSON('/api/rotation', function(data) {
      console.log(data);
    });
  }
}(window.licker));