const baseUrl = "http://api.weatherapi.com/v1/current.json?key=819f0c283d8c4a2fb26215441221505&q=Mumbai&aqi=yes";

fetch(baseUrl)
.then(function(response){
   return response.json();
})
.then(function(city){
    let date = new Date();
    let placeholder = document.querySelector("#box");
    let out = "";
    let i = "https:" + city.current.condition.icon;
    out += `
          <p>${date.getFullYear()}/${date.getMonth()}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}</p>
          <p>${city.current.condition.text}</p>
          <p>${city.location.name}, ${city.location.region}, ${city.location.country}</p>
          <img src = ${i}>
          <h1>${city.current.feelslike_c} &degC</h1>
          <br>
          <p> Wind speed: ${city.current.wind_kph}kph &ensp;
          Wind degree: ${city.current.wind_degree}</p>
          <p>Wind direction: ${city.current.wind_dir} &ensp;
          Pressure: ${city.current.pressure_mb}</p>
          <p>Precipitate: ${city.current.precip_mm}mm &ensp;
          Humidity: ${city.current.humidity} %</p>
          <p>Cloud: ${city.current.cloud}</p>
          <br>
          <h3>Air Quality</h3>
          <p>CO: ${city.current.air_quality.co.toFixed(3)} &emsp; NO2: ${city.current.air_quality.no2.toFixed(3)}</p>
          <p>O3: ${city.current.air_quality.o3.toFixed(3)} &emsp; SO2: ${city.current.air_quality.so2.toFixed(3)}</p>
    `;
 
   placeholder.innerHTML = out;
});