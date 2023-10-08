import React from 'react';
import './CurrentWeather.css';

const CurrentWeather = ({ currentWeather }) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">
            {currentWeather.city}
          </p>
          <p className="weather-description">
            {currentWeather.weather[0].description}
          </p>
        </div>
        <img
          className="weather-icon"
          alt="weather"
          src={`icons/${currentWeather.weather[0].icon}.png`}
        />
      </div>
      <div className="bottom">
        <p className="temperature">
          {Math.round(currentWeather.main.temp)}°C
        </p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels Like</span>
            <span className="parameter-value">
              {Math.round(currentWeather.main.feels_like)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">
              {currentWeather.wind.speed} m/s
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">
              {Math.round(currentWeather.main.humidity)}%
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">
              {Math.round(currentWeather.main.pressure)} hPa
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
