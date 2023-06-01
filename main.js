
function clock(){
    var d = new Date(); //retrieves the live time
    var s = d.getSeconds(); // sets the seconds
    var m = d.getMinutes(); // sets the minute
    var h = d.getHours(); //sets the hour
    document.write(h + ":" + m + ":" + s);
}

setInterval(time,1000); // 1000 millisends equal 1 second. I honestly forgot about that but learned it from Arduino
