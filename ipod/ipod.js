// Create your global variables below:
var tracklist = ["Let It Happen", "Nangs", "The Moment", "Yes I'm Changing", "Eventually", "Gossip", "The Less I Know The Better", "Past Life", "Disciples", "'Cause I'm A Man"];
var volLevels = [];
var volcur = 2;
var playtime = 0;
var interval = 0;
let timer = document.getElementById("time-elapsed");
var cur = 6;
let playsong = document.getElementById("play-song");
let sp = document.getElementById("switchplay");
let player_time = document.getElementById("player-time");
let album_info = document.getElementById("play-album");

function init() {
	// Your code goes here
	for (var i = 0; i < 6; i++) {
		volLevels[i] = document.getElementById("vl" + i);
	}
	for (var i = 0; i < 3; i++) {
		volLevels[i].style.backgroundColor = "#9f5cc4";
	}
};

function volUp() {
	// Your code goes here
	if (volcur < 5){
		volcur += 1;
		volLevels[volcur].style.backgroundColor = "#9f5cc4";
	}
}

function volDown() {
	// Your code goes here
	if (volcur >= 0) {
		volLevels[volcur].style.backgroundColor = "rgb(255, 255, 255)";
		volcur -= 1;
	}
}

function switchPlay() {
	// Your code goes here
	if (sp.innerHTML == "play_arrow") {
		sp.innerHTML = "pause";
		interval = setInterval(func, 1000);
	}else {
		sp.innerHTML = "play_arrow";
		clearInterval(interval);
	}
	function func() {
		playtime += 1;
		player_time.style.paddingLeft = 2 * playtime + "px";
		timer.innerHTML = secondsToMs(playtime)
		if (playtime === 180) {
			playtime = 0;
			nextSong();
		}
	}
}

function nextSong() {
	// Your code goes here
	playtime = 0;
	timer.innerHTML = secondsToMs(playtime);
	player_time.style.paddingLeft = "0px";
	if (cur == tracklist.length - 1) {
		cur = 0;
	} else {
		cur += 1;
	}
	playsong.innerHTML = tracklist[cur];
	album_info.src = "images/" + tracklist[cur] + ".jpg";
	//console.log(cur);
	// if (sp.innerHTML == "pause") {
	// 	switchPlay();
	// 	switchPlay();
	// }
}

function prevSong() {
	// Your code goes here
	playtime = 0;
	timer.innerHTML = secondsToMs(playtime);
	player_time.style.paddingLeft = "0px";
	if (cur == 0) {
		cur = tracklist.length - 1;
	} else {
		cur -= 1;
	}
	playsong.innerHTML = tracklist[cur];
	album_info.src = "images/" + tracklist[cur] + ".jpg";
}

function secondsToMs(d) {
    d = Number(d);

    var min = Math.floor(d / 60);
    var sec = Math.floor(d % 60);

    return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}

init();