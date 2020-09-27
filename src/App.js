import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './'
import WeatherComponent from './WeatherComponent.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {data: {timeSeries: []}};
  }

  componentDidMount() {
    let thisComponent = this;
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude.toFixed(6));
      console.log("Longitude is :", position.coords.longitude.toFixed(6));
      console.log("https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/" + position.coords.longitude.toFixed(6) + "/lat/" + position.coords.latitude.toFixed(6) + "/data.json")
      fetch("https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/" + position.coords.longitude.toFixed(6) + "/lat/" + position.coords.latitude.toFixed(6) + "/data.json")
          .then(response => response.json())
          .then(data => thisComponent.setState({data: data}))
    });
  }

  render() {
    return (
        [
            this.state.data.timeSeries.map((object, index, array) => <WeatherComponent timeFrame={object} index={index} array={array} />), //HACK: poor separation of concerns, I don't feel it should be the responsibility of the component that displays weather info to display the date and time, even if the weather info is inherenty tied to a time and date
          this.state.data.timeSeries.length === 0 ? <h1 style={{ marginTop: "auto", marginBottom: "auto"}}>Please allow location access for accurate weather data through SMHIs API</h1> : ""
        ]
    );
  }

  createComponent
}

export default App;
