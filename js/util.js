window.licker = window.licker || {};
window.licker.util = window.licker.util || {};
(function(ns) {
  'use strict';

  //prefixにマッチするクラスを一括で削除するremoveClass用コールバック
  //参考: http://kachibito.net/snippets/removeclass-wildcard
  function removeClassCallback(prefix) {
    var regExp = new RegExp("\\b" + prefix + "-\\S+", "g");
    var callback = (function(index, css) {
      return (css.match(regExp) || []).join(" ");
    });

    return callback;
  }

  ns.util = {
    removeClassCallback: removeClassCallback
  }
}(window.licker));
