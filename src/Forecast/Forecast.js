import React, { useState } from 'react';
import {Button} from 'react-bootstrap';
import Conditions from '../Conditions/Conditions';


const Forecast = () => {
    let [city, setCity] = useState("");
    let [unit, setUnit] = useState("imperial");
    // let [error, setError] = useState(false);
    // let [loading, setLoading] = useState(false);
    let [responseObj, setResponseObj] = useState({});
    function getForecast(e) {
        e.preventDefault();

        // if (city.length === 0) {
        //     return setError(true);
        // }
        // setError(false);
        // setResponseObj({});

        // setLoading(true);
        
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
                // if (response.cod !== 200) {
                //     throw new Error()
                // }
                // setResponseObj(response);
                // setLoading(false);
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
                        
                            <Button type="submit" variant="info" className="Btn" >Get Forecast</Button>
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



// error={error} loading={loading}