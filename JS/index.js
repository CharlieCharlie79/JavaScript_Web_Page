/* NavBar */

var hamburger = document.querySelector(".hamburger");
var navBar = document.querySelector(".navbar-content");


hamburger.addEventListener("click", mobileMenu);

function mobileMenu()
{
   hamburger.classList.toggle("active");
   navBar.classList.toggle("active");
}



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



/* Weather App */

var inputval = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector("#cityoutput");
var descrip = document.querySelector("#description");
var temp = document.querySelector('#temp');
var wind = document.querySelector("#wind");

api = "768c56f3d272489471d1340bd1083e16";

function convertion(val)
{
    return (val - 273).toFixed(2);
}

btn.addEventListener('click', function(){

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' +inputval.value+ "&appid=" +api).then(res => res.json())

    .then(data => {
        var nameval = data['name'];
        var descrip = data['weather']['0']['description'];
        var temperature = data['main']['temp'];
        var wndspd = data['wind']['speed'];

        city.innerHTML= `Weather of  <span>${nameval} <span>`;
        temp.innerHTML = `Temperature: <span>${convertion(temperature)} C</span>`;
        description.innerHTML = `Sky Conditions: <span> ${descrip}<span>`;
        wind.innerHTML = `Wind Speed: <span>${wndspd} km/h <span>`
    })

    .catch(err => alert('You entered Wrong cityu name'));
})


/* Google maps */
/*
function initMap()
{
    const uluru = {lat: -25.344, lng: 131.036};

    let map = new google.maps.Map(document.getElementById("google_map"),{
        zoom: 4,
        center: uluru,
    });

    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}
*/
