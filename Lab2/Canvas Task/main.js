var c = document.getElementsByTagName('canvas')[0];
var myColor = document.getElementById("canvas-color");
var ctx = c.getContext('2d');
var counter = 0;
var circlesToDraw = 100;
var interval;

function drawCircles() {
    ctx.clearRect(0, 0, c.width, c.height);

    for (var i = 0; i < circlesToDraw; i++) {
        ctx.beginPath();
        var w = Math.floor(Math.random() * c.width);
        var h = Math.floor(Math.random() * c.height);
        ctx.arc(w, h, 30, 0, Math.PI * 2);
        ctx.strokeStyle = myColor.value;
        ctx.stroke();
    }

    counter = circlesToDraw;
    clearInterval(interval);
}

myColor.addEventListener('input', function () {
    counter = 0;
    clearInterval(interval);
    interval = setInterval(drawCircles, 500);
});

interval = setInterval(drawCircles, 500);
