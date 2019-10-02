import React from 'react';

import './WeatherForecast.css';
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
          weatherPic:<FontAwesomeIcon icon={faCloudRain}/>,
          temperature: "9",
          weather: "RAINING"
      },{
          weekday: "TUE",
          weatherPic:<FontAwesomeIcon icon={faSun}/>,
          temperature: "15",
          weather: "SUNNY"
      },{
          weekday: "WED",
          weatherPic:<FontAwesomeIcon icon={faCloud}/>,
          temperature: "11",
          weather: "CLOUDY"
      },{
          weekday: "THU",
          weatherPic:<FontAwesomeIcon icon={faPooStorm}/>,
          temperature: "7",
          weather: "STORM"
      },{
          weekday: "FRI",
          weatherPic:<FontAwesomeIcon icon={faSun}/>,
          temperature: "18",
          weather: "SUNNY"
      }
  ]
  
  return (
    <ul>
      {weatherdata.map((item)=>{
        return (
          <div>
          <div className="haha">{item.weekday}</div>
          <div className="haha">{item.weatherPic}</div>
          <div className="haha">{item.temperature}</div>
          <div className="haha">{item.weather}</div>
          </div>

        )
      })}
    </ul>


    
  );
}
export default WeatherForecast;