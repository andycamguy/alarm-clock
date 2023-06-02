
// gets current time  from html

let time = document.getElementById("currentTime");

// shows the current time on the page

setInterval(() => { // the function to set the interval as well as create a time string showing the time
    let d = new Date ();
    time.innerHTML = d.toLocaleTimeString();
},1000)

//I send an alert after so much time
setTimeout(function () { alert("You've been staring for too long"); }, 10000); 
//1000 is 1000 ms or a second
