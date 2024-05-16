function timer() {
    var d = new Date();
    document.getElementById("date_today").innerText = " " + d.getMinutes() + ':' + d.getSeconds();
}