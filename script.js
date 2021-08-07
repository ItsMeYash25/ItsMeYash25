var deadLine = new Date("Aug 10, 2021 12:30:00").getTime()
var x = setInterval(() => {
    var now = new Date().getTime()
    var t = deadLine - now
    var days = Math.floor(t / (1000 * 60 * 60 * 24))
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((t % (1000 * 60)) / 1000)

    document.getElementById("demo").innerHTML = days + " d " + hours + " h " + minutes + " m " + seconds + " s "

    if (t < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "expired"
    }
}, 1000);