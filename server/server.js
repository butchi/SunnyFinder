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

  var valIlluminance;
  var valWater;
  var valState;
  var valBumper;

  // prepare server
  server = new HttpServer();
  server.get("/sd/", sdRoot);
  server.get("/", function(req, res, oncomplete) {
    console.log('12:54');
    console.log('req:', req);
    var bodyBuffer = req.bodyBuffer || null;
    console.log('body buffer:', bodyBuffer);

    if(bodyBuffer) {
      var binaryString = '';
      var bytes = new Uint8Array(bodyBuffer);
      var length = bytes.length;
      for (var i = 0; i < length; i++) {
        binaryString += String.fromCharCode(bytes[i]);
      }

      var json = JSON.parse(binaryString);

      console.log(json);
      if(json.state==='G'){$("#face").attr("src","./img/plant-anim.gif");}
      if(json.state==='S'){$("#face").attr("src","./img/plant-anim2.gif");}
      if(json.state==='R'){$("#face").attr("src","./img/plant-anim3.gif");}
      if(json.state==='L'){$("#face").attr("src","./img/plant-anim4.gif");}
      
    } else {
      console.log('no body');
    }
    
    res.write('12:52');
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
  console.log("server start");
  
  face();  
}

addEventListener('load', init);

function face(){
  console.log("face");
  var i=Math.random()*4;
      if(i<3){$("#face").attr("src","./img/plant-anim.gif");}
      if(i<2){$("#face").attr("src","./img/plant-anim2.gif");}
      if(i<1){$("#face").attr("src","./img/plant-anim3.gif");}
      if(i<0){$("#face").attr("src","./img/plant-anim4.gif");}

  
  setTimeout(face,1000);
}