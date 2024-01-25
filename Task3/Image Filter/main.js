var saturate = document.getElementById("saturate");
var opacity = document.getElementById("opacity");
var invert = document.getElementById("invert");
var sepla = document.getElementById("sepla");
var grayscale = document.getElementById("grayscale");
var imageone = document.getElementById("imageone");
saturate.addEventListener("click",function(){
    imageone.style.filter="saturate(30%)";
})

opacity.addEventListener("click",function(){
    imageone.style.filter="opacity(25%)";
})

invert.addEventListener("click",function(){
    imageone.style.filter="invert(75%)";
})

sepla.addEventListener("click",function(){
    imageone.style.filter="sepia(60%)";
})

grayscale.addEventListener("click",function(){
    imageone.style.filter="grayscale(50%)";
})