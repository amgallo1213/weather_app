import React, { useState } from 'react';
import {Button} from 'react-bootstrap';
import Conditions from '../Conditions/Conditions';


const Forecast = () => {
    let [city, setCity] = useState("");
    let [unit, setUnit] = useState("imperial");

    let [responseObj, setResponseObj] = useState({});
    function getForecast(e) {
        e.preventDefault();
        
        let uriEncodedCity = encodeURIComponent(city);

        
        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_API_KEY
            }
        })
            .then(response => response.json())
            .then(response => {
                setResponseObj(response)
                if (response.cod !== 200) {
                    throw new Error()
                }
                setResponseObj(response);

            })
            .catch(err => console.error(err));
    }
    return ( 
        <div> 
            <div className="Top">
                <h2>Find Current Weather Conditions</h2>
                <form onSubmit={getForecast}>
                    <div className="Find">
                            <input type="text" placeholder="Enter City" maxLength="50"  value={city} 
                                onChange={(e) => setCity(e.target.value)} />
                            <Button type="submit" variant="info" className="Btn" >Get Weather!</Button>
                    </div>
                </form>
            </div>
            <div className="Current">
                <Conditions responseObj={responseObj}  />
            </div>
            
        </div>
    );
}
 
export default Forecast;



