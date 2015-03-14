window.licker = window.licker || {};
(function(ns) {
  'use strict';

  $(function() {
    init();
  });

  function init() {
    ns.page.top.init();
    
    $.getJSON('http://192.168.43.3:3000/api/rotation', function(data) {
      cosole.log(data);
    });
  }
}(window.licker));
