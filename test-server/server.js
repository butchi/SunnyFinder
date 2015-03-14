
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

// 	var slider1 = document.getElementById('slider1');
// 	var dispElm1 = document.getElementById('val1')
// 	slider1.addEventListener('change', function(evt) {
// 		dispElm1.innerHTML = this.value;
// 	});

// 	var slider2 = document.getElementById('slider2');
// 	var dispElm2 = document.getElementById('val2')
// 	slider2.addEventListener('change', function(evt) {
// 		dispElm2.innerHTML = this.value;
// 	});

	// prepare server
	server = new HttpServer();
	server.get("/xhr", function xhrres(req, res, oncomplete){
		console.log(req);
		var ret = Math.random() < .3 ? 'あたり' : 'はずれ';
		res.write(ret); // not send?
		oncomplete();
	});
// 	server.get("/api/illuminance", function xhrres(req, res, oncomplete){
// 		console.log(req);
// 		var ret = Math.random() < .3 ? 'あたり' : 'はずれ';
// 		res.write(ret); // not send?
// 		oncomplete();
// 	});
// 	server.get("/api/rotation", function xhrres(req, res, oncomplete){
// 		console.log(req);
// 		var ret = Math.random() < .3 ? 'あたり' : 'はずれ';
// 		res.write(ret); // not send?
// 		oncomplete();
// 	});
 	server.start(port);
}

addEventListener('load', init);

