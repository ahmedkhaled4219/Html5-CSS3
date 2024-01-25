var a = document.getElementsByTagName("audio")[0];
var btnPlay = document.getElementById("play");
var btnPause = document.getElementById("pause");
var btnStop = document.getElementById("stop");
var btnMute = document.getElementById("mute");
var volumeRange = document.getElementById("volume");
var durationRange = document.getElementById("duration");
var speed = document.getElementById("rate");
var image = document.querySelector(".img img");
var btnFirst = document.getElementById("first");
var btnSecond = document.getElementById("second");
var btnThird = document.getElementById("third");
var btnFourth = document.getElementById("fourth");
////////////////////////////////////
btnFirst.addEventListener("click", function () {
  image.src = "images/1.jpg";
  a.src = "resources/1.mp3";
  durationRange.value = a.currentTime;
});
btnSecond.addEventListener("click", function () {
  image.src = "images/2.jpg";
  a.src = "resources/2.mp3";
  durationRange.value = a.currentTime;
});
btnThird.addEventListener("click", function () {
  image.src = "images/3.jpg";
  a.src = "resources/3.mp3";
  durationRange.value = a.currentTime;
});
btnFourth.addEventListener("click", function () {
  image.src = "images/4.jpg";
  a.src = "resources/4.mp3";
  durationRange.value = a.currentTime;
});
btnPlay.addEventListener("click", function () {
  a.play();
});
//////////////////////////////////////////
btnPause.addEventListener("click", function () {
  a.pause();
});
/////////////////////////////////////////////
btnStop.addEventListener("click", function () {
  a.load();
  a.pause();
});
///////////////////////////////////////////////
btnMute.addEventListener("click", function () {
  a.muted = !a.muted;
});
//////////////////////////////////
volumeRange.addEventListener("input", function () {
  a.volume = volumeRange.value;
});
///////////////////////////////////////
window.addEventListener("load", function () {
  console.log(a.duration);
  durationRange.max = a.duration;
});
a.addEventListener("durationchange", function () {
  //    console.log(a.duration);
  a.duration = durationRange.value;
  //durationRange.value=a.currentTime;
});
////////////////////////////////////////////
a.addEventListener("timeupdate", function () {
  durationRange.value = a.currentTime;
});
///////////////////////////////////////////
durationRange.addEventListener("input", function () {
  a.currentTime = durationRange.value;
});
////////////////////////////////////////
speed.addEventListener("click", function () {
  a.playbackRate = speed.value;
});
