const time = document.querySelector(".time");

setInterval(()=>{
//create abject Date
const Time = new Date();

let hours = Time.getHours();
let minutes = Time.getMinutes();
let seconds = Time.getSeconds();
let day_night = "AM";

if(hours > 12){
    day_night = "PM";
    hours = hours - 12;
}

if(hours < 10){
    hours = "0" + hours
}
if(minutes < 10){
    minutes = "0" + minutes
}
if(seconds < 10){
    seconds = "0" + seconds;
}


time.innerHTML = hours + ":" + minutes + ":" + seconds + " " +  day_night;
})

