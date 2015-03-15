var server = null;
var port = 3000;
var appRoot = './public';
var sdRoot = '/sdcard/testserver'; // ref. install.sh setting


//function who(thispointer) {
//  try {
//    return Object.getPrototypeOf(thispointer).constructor.name;
//  } catch (e) {
//    return "?";
//  }
//}

//function log(m) {
//	console.log(m);
//}

function init() {
  //
  var close_btn = document.getElementById('close');
  close_btn.innerHTML = 'Close';
  close_btn.addEventListener('click', function () {
    window.close();
  });

  var inputIlluminance = document.getElementById('inputIlluminance');
  var dispElmIlluminance = document.getElementById('dispElmIlluminance')
  var valIlluminance;
  inputIlluminance.addEventListener('change', function (evt) {
    valIlluminance = this.value;
    dispElmIlluminance.innerHTML = valIlluminance;
  });

  var inputWater = document.getElementById('inputWater');
  var dispElmWater = document.getElementById('dispElmWater')
  var valWater;
  inputWater.addEventListener('change', function (evt) {
    valWater = this.value;
    dispElmWater.innerHTML = valWater;
  });

  var inputState = document.getElementById('inputState');
  var dispElmState = document.getElementById('dispElmState')
  var valState;
  inputState.addEventListener('change', function (evt) {
    valState = this.value;
    dispElmState.innerHTML = valState;
  });

  var inputBumper = document.getElementById('inputBumper');
  var dispElmBumper = document.getElementById('dispElmBumper')
  var valBumper;
  inputBumper.addEventListener('change', function (evt) {
    console.log(this.value);
    valBumper = this.value === 'on' ? 1 : 0;
    dispElmBumper.innerHTML = valBumper;
  });

  // prepare server
  server = new HttpServer();
  server.get("/sd/", sdRoot);
  server.get("/", function(req, res, oncomplete) {
    console.log('10:22');
    console.log('req:', req);
    var buffer = req.bodyBuffer;
    console.log('body buffer:', buffer);

    if(buffer) {
      var
        binaryString = '',
        bytes = new Uint8Array(buffer),
        length = bytes.length;
      for (var i = 0; i < length; i++) {
        binaryString += String.fromCharCode(bytes[i]);
      }

      var json = JSON.parse(bynaryString);

      console.log(bynaryString);
    } else {
      console.log('no body');
    }
    
    res.write('10:22');
    oncomplete();
  });
  server.get("/config/", appRoot);
  server.get("/api/plant", function xhrres(req, res, oncomplete) {
    console.log(req);
    
    var time_stamp = (new Date()).valueOf();
    var illuminance = parseInt(valIlluminance);
    var water = parseInt(valWater);
    var state = valState;
    var bumper = parseInt(valBumper);

    var ret = {
       time_stamp: time_stamp,
       illuminance: illuminance,
       water: water,
       state: state,
       bumper: bumper
    };

    res.write(JSON.stringify(ret));
    oncomplete();
  });
  server.start(port);
}

addEventListener('load', init);