import { useState } from "react";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");

  const API_KEY = "b66b91df719cc5c46a819ab3c920214e";

  function getWeather(e) {
    e.preventDefault();

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
      });
  }

  return (
    <div className="main">
      <form onSubmit={getWeather}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
        />
        <button type="submit">Search</button>
      </form>

      {weather && weather.main && (
        <div>
          <h2>Name: {weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;