window.licker = window.licker || {};
(function(ns) {
  'use strict';

  $(function() {
    init();
  });

  function init() {
    ns.page.top.init();
    
    var xhr = new XMLHttpRequest();
    var url = '/api/plant';
    xhr.open('GET',url,true);
    xhr.onload = function(e){
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
      }
    }
    console.log('req2');
    xhr.send(null);
}}(window.licker));
