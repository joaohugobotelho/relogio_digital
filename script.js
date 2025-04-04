setInterval(updateClock, 1000);

function updateClock() {
    var updateClock = new Date;

    var horas = updateClock.getHours();
    var min = updateClock.getMinutes();
    var seg = updateClock.getSeconds();

    if (horas < 10) {
        horas = '0' + horas
    }
    if (min < 10) {
        min = '0' + min;
    }
    if(seg < 10) {
        seg = '0' + seg;
    }

    var digitalClock = horas + ':' + min + ':' + seg;

    document.getElementById('clock').innerHTML = digitalClock;
}