import React, { Component } from 'react';
import { WeatherIconComponent } from './WeatherIconComponent';
import * as Icon from "weather-icons-react"; //TODO: Reduce bloat

class WeatherComponent extends Component {
    constructor(props) {
        super(props);
    }

    //Note: the ugly ternary below is best broken out into a new component, or at least a function
    render() {
        return [this.props.index === 0 || new Date(this.props.array[this.props.index-1].validTime).getDay() !== new Date(this.props.timeFrame.validTime).getDay() ? (<div className="h1div"><h1> {new Date(this.props.timeFrame.validTime).toString().substring(0, 10)} </h1></div>) : "",
        <div className="weatherComponent">
            <div>
                <div>
                <h2>{new Date(this.props.timeFrame.validTime).toString().substring(16, 21)}</h2>
                </div>
                <div>
                <p>{this.props.timeFrame.parameters.find(o => o.name === 't').values[0]} °C</p>
                </div>
                <div>
                    < WeatherIconComponent icon={this.props.timeFrame.parameters.find(o => o.name === 'Wsymb2').values[0]} />
                </div>
            </div>
        </div>];
    }
}

export default WeatherComponent;