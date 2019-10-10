import React from 'react';
import './CityWeather.scss';
import axios from 'axios';

//upper part of the card
class CityWeather extends React.Component {
  constructor(){
    super();
    this.state = {
      isLoading: true,
      city: "Paris",
    }
    this.api= 'https://api.apixu.com/v1/current.json?key=1eb8b1de06614af3a3423418171609&q=Paris';
  }
  componentDidMount(){
    axios.get(this.api).
    then(res => {
      console.log(res.data);
      const {current: {condition: {text}, temp_c },location:{name}} = res.data;
      this.setState({
        isLoading: false,
        weather: text,
        temperature: temp_c,
        city: name
      })
    }).catch(error => console.log(`The error is ${error}`));
  } 
  render(){
    return (
      <div className="card-top">
        <h1>{this.state.city}</h1>
        <main>
          <div className="celsius">{this.state.temperature}</div>
          <p>{this.state.weather}</p>
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
}
export default CityWeather;
