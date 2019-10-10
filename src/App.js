import React from 'react';

import './App.css';
import Header from './components/Header';
import TwitterFeed from './components/TwitterFeed';
import WeatherForecast from './components/WeatherForecast';
import CityWeather from './components/CityWeather';
import SignUpForm from './components/SignUpForm';



class App extends React.Component{
  render(){
    return (
      <div>
        <Header/>
        <div className="card">
          <CityWeather />
          <div className="card-down">
            <TwitterFeed/>
            <WeatherForecast/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
