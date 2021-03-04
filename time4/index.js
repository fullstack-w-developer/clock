const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

setInterval(()=>{
const date = new Date();

let ss =  date.getSeconds() / 60;
let mm =  date.getMinutes() / 60;
let hh =  date.getHours() / 12;

hours.style.transform = "rotate(" + (hh * 360) + "deg)";
minutes.style.transform = "rotate(" + (mm * 360) + "deg)";
seconds.style.transform = "rotate(" + (ss * 360) + "deg)";
});