import { TextField, Button } from '@mui/material';
import React, {useState} from 'react';
import axios from 'axios';
import './WeatherApi.css';


function WeatherApi() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f071247bc505d4b2dd16efee2d5c3918&units=metric`;

  const searchLocation = (event) => {
    axios.get(url).then((response) => {
    setData(response.data);
    console.log(response.data);
    })
    setLocation('');
  }

  return (
    <div>
        <div className="app">
          <div className="container">
            {data !== {} ? <h1>WEATHER</h1> : ""}
            <div className="search">
                <TextField id="outlined-basic" label="Location" color="warning" placeholder='Enter the location' value={location} 
                        onChange={event => setLocation(event.target.value)} />
                <Button variant="contained" color='warning' onClick={searchLocation}>Search</Button>
            </div>
          <div className="top">
            <div className="location">
            {data.main ?<p>{data.name.toUpperCase()}</p> : null}
            </div>
            <div className="detail">
                <div className="temp">
                    {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null} 
                </div>
                <div className="description">
                {data.main ?<p>{data.weather[0].main}</p> : null}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherApi;
