
var server = null;
var port = 3000;
var appRoot = './public';
var sdRoot = '/sdcard/testserver'; // ref. install.sh setting


//function who(thispointer) {
//	try {
//		return Object.getPrototypeOf(thispointer).constructor.name;
//	} catch (e) {
//		return "?";
//	}
//}

//function log(m) {
//	console.log(m);
//}

function init() {
	//
	var close_btn = document.getElementById('close');
	close_btn.innerHTML = 'Close';
	close_btn.addEventListener('click', function() {
		window.close();
	});

	var slider1 = document.getElementById('slider1');
	var dispElm1 = document.getElementById('val1')
	var val1;
	slider1.addEventListener('change', function(evt) {
		val1 = this.value;
		dispElm1.innerHTML = val1;
	});

	var slider2 = document.getElementById('slider2');
	var dispElm2 = document.getElementById('val2')
	var val2;
	slider2.addEventListener('change', function(evt) {
		val2 = this.value;
		dispElm2.innerHTML = val2;
	});

	var slider3 = document.getElementById('slider3');
	var dispElm3 = document.getElementById('val3')
	var val3;
	slider3.addEventListener('change', function(evt) {
		val3 = this.value;
		dispElm3.innerHTML = val3;
	});

	var slider4 = document.getElementById('slider4');
	var dispElm4 = document.getElementById('val4')
	var val4;
	slider4.addEventListener('change', function(evt) {
		val4 = this.value;
		dispElm4.innerHTML = val4;
	});

	var slider5 = document.getElementById('slider5');
	var dispElm5 = document.getElementById('val5')
	var val5;
	slider5.addEventListener('change', function(evt) {
		val5 = this.value;
		dispElm5.innerHTML = val5;
	});

	// prepare server
	server = new HttpServer();
	server.get("/api/illuminance", function xhrres(req, res, oncomplete){
		console.log(req);
		var time = new Date();
		var val = parseInt(val2);

		var ret = {
			time_stamp: time.valueOf(),
			value: val
		};
		res.write(JSON.stringify(ret));
		oncomplete();
	});
	server.get("/api/rotation", function xhrres(req, res, oncomplete){
		console.log(req);

		var time = new Date();
		
		var left1 = parseInt(val2);
		var right1 = parseInt(val3);
		var left2 = parseInt(val4);
		var right2 = parseInt(val5);
		var ret = {
			time_stamp: time.valueOf(),
			value: {
				left1: left1,
				right1: right1,
				left2: left2,
				right2: right2
			}
		};
		res.write(JSON.stringify(ret));
		oncomplete();
	});
 	server.start(port);
}

addEventListener('load', init);
