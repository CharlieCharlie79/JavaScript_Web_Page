/* Count down */

var countDownDate = new Date("Jan 1, 2023 00:00:01").getTime();

var x = setInterval(function()
{
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var min = Math.floor((distance % (1000 * 60 *60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 *60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = seconds;
}, 1000);