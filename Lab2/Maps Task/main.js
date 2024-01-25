(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})
({key: "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg", v: "weekly"});

///////////////////////////////////////////////////////////
let btnMap = document.getElementById("getMap");
let locationTable = document.getElementById("locationTable");
let latValue=document.getElementById("lat");
let lonValue=document.getElementById("lon");
let myDate=document.getElementById("date");


document.getElementById("getLocation").addEventListener("click", function () {
    // Toggle the visibility of the table
    locationTable.style.display = "table";
});

btnMap.addEventListener("click", function () {
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(sucess, error);
} else {
  alert("update your browser");
}
});
//////////////////////////////////////////////////////
function sucess(obj) {
var lat = obj.coords.latitude;
var lon = obj.coords.longitude;
var currentTime = new Date();
latValue.textContent =  lat;
lonValue.textContent =  lon;
myDate.textContent=currentTime

console.log("Current Time:", currentTime.toLocaleString());
console.log(lat);
console.log(lon);
initMap(lat,lon);
}
//////////////////////////////////////////////////////
function error(e) {
switch (e.code) {
  case 1:
    console.log("error user denied");
    break;
}
}
/////////////////////////////////////////////////////////////////////////////
let map;

async function initMap(x,y) {
const { Map } = await google.maps.importLibrary("maps");

map = new Map(document.getElementById("map"), {
  center: { lat: x, lng: y},
  zoom: 15,
});
}
