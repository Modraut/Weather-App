import React from 'react';

import './App.css';
import Header from './components/Header';
import TwitterFeed from './components/TwitterFeed';
import WeatherForecast from './components/WeatherForecast';
import CityWeather from './components/CityWeather';
import SignUpForm from './components/SignUpForm';

function App() {
  return (
    <div>
      <Header/>
      <div className="card">
        <CityWeather/>
        <div>
          <TwitterFeed/>
          <WeatherForecast/>
        </div>
      </div>
    <SignUpForm />
    </div>
    
  );
}

export default App;
