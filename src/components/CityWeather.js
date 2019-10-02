import React from 'react';
import './CityWeather.css';

//upper part of the card
function CityWeather() {
  return (
    <div className="cityweather">
      <h1 className="location">France</h1>
      <main>
        <div>12</div>
        <div>CLOUDY</div>
        <ul>
          <li>
            <div>HUMIDITY</div>
            <div>64%</div>
          </li>
          <li>
            <div>WIND</div>
            <div>12 K/M</div>
          </li>
        </ul>
      </main>
    </div>
    
  );
}
export default CityWeather;
