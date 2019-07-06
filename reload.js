setInterval(function() {
}, 5000);

var countDown = 5;

setInterval(function() {
	document.getElementById('reloadDisplay').innerHTML = 'Will look for QR Login in ' + countDown;
	if(countDown <= 0) {
		fetch(sqrlReload.adminURL + '?action=sqrl_check_login&session=' + sqrlReload.session)
			.then((res) => {
				return res.text();
			})
	    	.then((body) => {
				if(body == 'true') {
					window.location.href = sqrlReload.adminURL + '?action=sqrl_login&session=' +
						sqrlReload.session + sqrlReload.existingUserParam;
				}
	    	});
		countDown = 6;
	}
	countDown--;
}, 1000);

var qrcode = new QRCode(document.getElementById("sqrl-qrcode"), {
	text: sqrlReload.sqrlLoginURL,
	width: 128,
	height: 128,
	colorDark : "#000000",
	colorLight : "#ffffff",
	correctLevel : QRCode.CorrectLevel.M
});