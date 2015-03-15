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

  var valIlluminance;
  var valWater;
  var valState;
  var valBumper;

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
  server.get("/sunny-finder/", appRoot);
  server.get("/config/", appRoot + '/config');
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