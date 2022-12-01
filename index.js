// Run this function after the page is loaded
document.addEventListener("DOMContentLoaded", function () {
	console.log("Hello, webpage!")
});

window.onload = function () {
console.log("Hello, not loaded yet")
console.dir(document)

var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button_2 = document.getElementById("button_2");
var button3 = document.getElementById("button3");
var button_3 = document.getElementById("button_3");
var button4 = document.getElementById("button4");
var buttom = document.getElementById("buttom");
	
var timer = null;

buttom.onclick = function move() {
	var move = document.getElementById("move");
		console.log("move to bottom")
		move.style.left = -1400 + "px";
}

button1.onclick = function move(){
	console.log("1")
	clearInterval(timer);
	var speed = 30;
	var move = document.getElementById("move");
	timer = setInterval(function () {
		console.log("1" + move.offsetLeft)
		move.style.left = move.offsetLeft - speed + "px";
		if (move.offsetLeft < -520){
			clearInterval(timer);
			this.timer = null;
		}
	}, 50)
}

button2.onclick = function move() {
	clearInterval(timer);
		var speed = 30;
		var move = document.getElementById("move");
		timer = setInterval(function () {
			console.log("2" + move.offsetLeft)
			move.style.left = move.offsetLeft - speed + "px";
			if (move.offsetLeft < -1370 ) {
				clearInterval(timer);
				this.timer = null;
			}
		}, 50)
	}

button_2.onclick = function move() {
	clearInterval(timer);
	var speed = 30;
	var move = document.getElementById("move");
	timer = setInterval(function () {
		console.log("2" + move.offsetLeft)
		move.style.left = move.offsetLeft + speed + "px";
		if (move.offsetLeft > 0) {
			clearInterval(timer);
			this.timer = null;
		}
	}, 50)
}

	button_3.onclick = function move() {
		clearInterval(timer);
		var speed = 30;
		var move = document.getElementById("move");
		timer = setInterval(function () {
			console.log("3" + move.offsetLeft)
			move.style.left = move.offsetLeft + speed + "px";
			if (move.offsetLeft > -560) {
				clearInterval(timer);
				this.timer = null;
			}
		}, 50)
	}

	button3.onclick = function move() {
		clearInterval(timer);
		var speed = 30;
		var move = document.getElementById("move");
		timer = setInterval(function () {
			console.log("3" + move.offsetLeft)
			move.style.left = move.offsetLeft - speed + "px";
			if (move.offsetLeft < -2200) {
				clearInterval(timer);
				this.timer = null;
			}
		}, 50)
	}

button4.onclick = function move() {
	clearInterval(timer);
		var speed = 30;
		var move = document.getElementById("move");
		timer = setInterval(function () {
			console.log("3" + move.offsetLeft)
			move.style.left = move.offsetLeft + speed + "px";
			if (move.offsetLeft > 0) {
				clearInterval(timer);
				this.timer = null;
			}
		}, 50)
	}

	function makeFire() {
		console.log("Make fire");
		let el = document.getElementById("fireplace");
		setTimeout(() => el.append("🔥"), 3000)
	}
	
	makeFire();
	setTimeout(makeFire, 1000);
	makeFire();
	setTimeout(makeFire, 1000);
	makeFire();
	setTimeout(makeFire, 1000);
	makeFire();
	setTimeout(makeFire, 1000);
	makeFire();

	
	var a = document.querySelector('#loginA');
	var div = document.querySelector('.title');
	var close = document.querySelector('#close');
	var login = document.querySelector('.login');
	var username = document.querySelector('.username');
	var rusername = document.querySelector('.rusername');
	var iusername = document.querySelector('#iusername');
	var submit = document.querySelector('#submit');

	a.onclick = function () {
		login.style.display = 'block';
	}
	close.onclick = function () {
		login.style.display = 'none';
	}

	div.addEventListener('mousedown', function (e) {
		var x = e.pageX - login.offsetLeft;
		var y = e.pageY - login.offsetTop;
		document.addEventListener("mousemove", move)
		function move(e) {
			var newx = e.pageX - x;
			var newy = e.pageY - y;
			login.style.left = newx + 'px';
			login.style.top = newy + 'px';
		}
		document.addEventListener('mouseup', function (e) {
			document.removeEventListener("mousemove", move);
		})
	})

	iusername.addEventListener('change', function () {
		if (iusername.checked) {
			localStorage.setItem('username', username.value)
			localStorage.setItem('rusername', rusername.value)
		} else {
			localStorage.removeItem('username');
			localStorage.removeItem('rusername');
		}
	})
	if (localStorage.getItem('username')) {
		username.value = localStorage.getItem('username');
		iusername.checked = true;
	}
	if (localStorage.getItem('rusername')) {
		rusername.value = localStorage.getItem('rusername');
		iusername.checked = true;
	}


	submit.onclick = function ischeckemail() {
		var email = document.getElementById("emailname").value;
		if (email != "") {
			var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
			isok = reg.test(email);
			if (!isok) {
				alert("Please input the right email！");
				document.getElementById("emailname").focus();
				return false;
			}
		}else {
			alert("Please input the email！");
		}
		var phone = document.getElementById("phonenum").value;
		if (phone != "") {
			var reg = /^(1?|(1\-)?)\d{10,12}$/;
			isok = reg.test(phone);
			if (!isok) {
				alert("Please input the right phone");
				document.getElementById("phonenum").focus();
				return false;
			}
		}
	}

};

