import React from 'react';
import * as Icon from "weather-icons-react"; //TODO: Reduce bloat

/*
1 	Clear sky
2 	Nearly clear sky
3 	Variable cloudiness
4 	Halfclear sky
5 	Cloudy sky
6 	Overcast
7 	Fog
8 	Light rain showers
9 	Moderate rain showers
10 	Heavy rain showers
11 	Thunderstorm
12 	Light sleet showers
13 	Moderate sleet showers
14 	Heavy sleet showers
15 	Light snow showers
16 	Moderate snow showers
17 	Heavy snow showers
18 	Light rain
19 	Moderate rain
20 	Heavy rain
21 	Thunder
22 	Light sleet
23 	Moderate sleet
24 	Heavy sleet
25 	Light snowfall
26 	Moderate snowfall
27 	Heavy snowfall
 */

export function WeatherIconComponent(props) {
    //TODO: add support for nighttime icons
    let array = [
        "You should never see this message.",
        < Icon.WiDaySunny/>,
        < Icon.WiDaySunny/>,
        < Icon.WiDaySunnyOvercast/>,
        < Icon.WiDayCloudy/>,
        < Icon.WiCloud/>,
        < Icon.WiCloudy/>,
        < Icon.WiDayFog/>,
        < Icon.WiRainMix/>,
        < Icon.WiRainWind/>,
        < Icon.WiDayRain/>,
        < Icon.WiThunderstorm/>,
        < Icon.WiDaySleet/>,//Light TODO: Distinguish between these!
        < Icon.WiDaySleet/>,//Moderate
        < Icon.WiDaySleet/>,//Heavy
        < Icon.WiDaySnow/>,//Light TODO: Distinguish between these!
        < Icon.WiDaySnow/>,//Moderate
        < Icon.WiDaySnow/>,//Heavy
        < Icon.WiRainMix/>,
        < Icon.WiRainWind/>,
        < Icon.WiRain/>,
        < Icon.WiDayLightning/>,
        < Icon.WiSleet/>,//Light TODO: Distinguish between these!
        < Icon.WiSleet/>,//Moderate
        < Icon.WiSleet/>,//Heavy
        < Icon.WiSnow/>,
        < Icon.WiSnow/>,
        < Icon.WiSnow/>
    ];
    let returnValue = array[props.icon];
    return (React.cloneElement(returnValue, {size: "36pt", className: "marginAuto"})); //TODO: Take the size as a prop, somehow make it responsive?
}

export default WeatherIconComponent;
