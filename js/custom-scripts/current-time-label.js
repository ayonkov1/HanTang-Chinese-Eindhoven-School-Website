// time script used from Mr. John Lara, will be implemented after login
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('currentTimeLabel').innerHTML =
        h + ":" + m;
    var t = setTimeout(startTime, 60000);
}
function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}
