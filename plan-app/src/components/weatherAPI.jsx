import React, { useState } from "react";
import axios from "axios";
import "../styles/styles.css";

function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleresponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      city: response.data.name,
    });
    setReady(true);
  }

  if (weatherData.ready) {
    return (
      <div className="weather-row">
        <div>
          <p>Weather</p>
          <p className="temp">{Math.round(weatherData.temperature)}℃</p>
          <p>Location</p>
          <p className="city">{weatherData.city}</p>
        </div>

        <div className="right">
          <p>{weatherData.description}</p>
          <img src={user} alt="" className="weather-img" />
          <p>Mood</p>
          <p className="mood">Outdoors</p>
        </div>
      </div>
    );
  } else {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
}

export default Weather;
