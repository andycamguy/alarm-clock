
// gets current time  from html

let time = document.getElementById('currentTime");

// shows the current time on the page

setInterval((0 => {
    let d = new Date ();
    time.innerHTML = d. toLocaleTimeString();
},1000)

//I alert for the page 
setTimeout(function () { alert("You've been staringfor too long); }, 10000); //1000 is 1000 ms or a second
