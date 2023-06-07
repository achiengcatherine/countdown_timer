var countdown = new Date("September 10, 2023 12:00:00").getTime();
var k = setInterval(function () {
    var now = new Date().getTime();
    var dest = countdown - now;
    var days = Math.floor(dest / (1000 * 60 * 60 * 24));
    var hours = Math.floor((dest % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutes = Math.floor((dest % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((dest % (1000 * 60)) / (1000));
    document.getElementById("birthday").innerHTML = days + "d " + hours + "hrs " + minutes + "m " + seconds + "s "; 
    
    if (dest < 0) {
        clearInterval(k);
        document.getElementById("birthday").innerHTML = "HAPPY BIRTHDAY KATE";
    }
})