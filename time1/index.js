const time = document.querySelector(".time");

setInterval(()=>{
    const Time = new Date();
    time.innerHTML = Time.toLocaleTimeString();
})

