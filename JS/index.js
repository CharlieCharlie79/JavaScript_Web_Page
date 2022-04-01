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


/* Weather */
let lon;
let lat;
let temperature = document.querySelector(".temp");
let summary = document.querySelector(".summary");
let loc = document.querySelector(".location");
let icon = document.querySelector(".icon");
const kelvin = 273;

window.addEventListener("load", () => {
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition((position) =>{
            console.log(position);
            lon = position.coords.longitude;
            lat = position.coords.latitude;

            const api = "768c56f3d272489471d1340bd1083e16"

            const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&` + `lon=${lon}&appid=768c56f3d272489471d1340bd1083e16`;

            fetch(base)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                temperature.textContent = Math.floor(data.main.temp - kelvin) + "C";
                summary.textContent = data.weather[0].description;
                loc.textContent = data.name + "," + data.sys.country;
                let icon1 = data.weather[0].icon;
                icon.innerHTML = 
                `<img src="IMG/icon_cloud.png" style = 'height:10rem'/>`;
            })
        })
    }
})
