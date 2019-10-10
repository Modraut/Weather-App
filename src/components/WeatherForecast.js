import React from 'react';

import './WeatherForecast.scss';
import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import  {faCloudRain,
         faSun,
         faCloud,
         faPooStorm,
         } from '@fortawesome/free-solid-svg-icons';


function WeatherForecast() {
  const weatherdata = 
    [
      {
          weekday: "MON",
          weatherPic:<FontAwesomeIcon icon={faCloudRain} size="4x" color="rgb(117, 177, 247)" />,
          temperature: "9°",
          weather: "RAINING"
      },{
          weekday: "TUE",
          weatherPic:<FontAwesomeIcon icon={faSun} size="4x" color="rgb(235, 220, 8)" />,
          temperature: "15°",
          weather: "SUNNY"
      },{
          weekday: "WED",
          weatherPic:<FontAwesomeIcon icon={faCloud} size="4x" color="rgb(52, 98, 150)" />,
          temperature: "11°",
          weather: "CLOUDY"
      },{
          weekday: "THU",
          weatherPic:<FontAwesomeIcon icon={faPooStorm} size="4x" />,
          temperature: "7°",
          weather: "STORM"
      },{
          weekday: "FRI",
          weatherPic:<FontAwesomeIcon icon={faSun} size="4x" color="rgb(235, 220, 8)" />,
          temperature: "18°",
          weather: "SUNNY"
      }
  ]
  
  return (
    <ul className="card-downRight">
      {weatherdata.map((item)=>{
        return (
          <li>
          <h1>{item.weekday}</h1>
          <div>{item.weatherPic}</div>
          <div>{item.temperature}</div>
          <small >{item.weather}</small>
          </li>
        )
      })}
    </ul>


    
  );
}
export default WeatherForecast;



