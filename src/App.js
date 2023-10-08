import { useState } from 'react';
import './App.css';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import Search from './components/Search';
import Forecast from './components/Forecast/Forecast';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleSearchChange = searchData => {
    const [lat, lon] = searchData.value.split(' ');
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    Promise.all([currentWeatherFetch, forecastFetch]).then(async response => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();
      setCurrentWeather({ city: searchData.label, ...weatherResponse });
      setForecast({ city: searchData.label, ...forecastResponse });
    });
  };
  console.log(forecast);
  return (
    <div className="container">
      <Search onSearchChange={handleSearchChange} />
      {currentWeather && <CurrentWeather currentWeather={currentWeather} />}
      {forecast && <Forecast forecast={forecast} />}
    </div>
  );
}

export default App;
