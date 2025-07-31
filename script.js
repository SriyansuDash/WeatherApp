const apiKey = "efd5caa7db8b37d0e937eadbf99da20a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&appid=&units=metric&q=";

const searchBox = document.querySelector(".search-container input");
const searchButton = document.querySelector(".search-container button");
const weatherIcon = document.querySelector(".weather-type img");


async function getWeatherInfo(cityname) {
    const response = await fetch(apiUrl + cityname + `&appid=${apiKey}`);
    if (response.status == 404) {
        alert("City not found. Please enter a valid city name.");
        return;
    }

    var data = await response.json();
    console.log(data);
    document.querySelector(".cityname").innerHTML = data.name;
    document.querySelector(".temprature .value").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".weather-type .value").innerHTML = data.weather[0].main;
    document.querySelector("#humidityValue").innerHTML = data.main.humidity + "%";
    document.querySelector("#windValue").innerHTML = data.wind.speed + "km/h";
    const iconCode = data.weather[0].icon;
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}

searchButton.addEventListener("click", () => {
    getWeatherInfo(searchBox.value);
});

searchBox.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        getWeather(searchBox.value);
    }
});
if(data.wind.deg >= 0 && data.wind.deg < 90) {
    document.querySelector(".wind-info .direction").innerHTML = "N";
}
else if(data.wind.deg >= 45 && data.wind.deg < 90) {
    document.querySelector(".wind-info .direction").innerHTML = "NE";
}
else if(data.wind.deg >= 90 && data.wind.deg < 135) {
    document.querySelector(".wind-info .direction").innerHTML = "E";
}
else if(data.wind.deg >= 135 && data.wind.deg < 180) {
    document.querySelector(".wind-info .direction").innerHTML = "SE";
}
else if(data.wind.deg >= 180 && data.wind.deg < 225) {
    document.querySelector(".wind-info .direction").innerHTML = "S";
}
else if(data.wind.deg >= 225 && data.wind.deg < 270) {
    document.querySelector(".wind-info .direction").innerHTML = "SW";
}
else if(data.wind.deg >= 270 && data.wind.deg < 315) {
    document.querySelector(".wind-info .direction").innerHTML = "W";
}
else if(data.wind.deg >= 315 && data.wind.deg < 360) {
    document.querySelector(".wind-info .direction").innerHTML = "NW";
}