function loadApi() {
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);

            let api = this.responseText;
            var parsedText = JSON.parse(api);
            console.log(parsedText);

            var date = parsedText.currentDateTime;
            var day = parsedText.dayOfTheWeek;

            document.getElementById("time").innerHTML = date.slice(0, 10);
            document.getElementById("day").innerHTML = day;
        }
    });

    xhr.open("GET", "https://world-clock.p.rapidapi.com/json/utc/now");
    xhr.setRequestHeader("x-rapidapi-host", "world-clock.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "9b04120d7fmsh20735ed7c67d614p149aa9jsn59919ecb89b0");

    xhr.send(data);
}

