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
            <h2>Find Current Weather Conditions</h2>
            
            <form onSubmit={getForecast}>
                <div className="Main">
                    <div>
                        <input
                            type="text"
                            placeholder="Enter City"
                            maxLength="50"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            />
                    </div>

                    <div>
                        <label >
                            <input className="Degree"
                                type="radio"
                                name="units"
                                checked={unit === "imperial"}
                                value="imperial"
                                onChange={(e) => setUnit(e.target.value)}
                                />
                            Fahrenheit
                        </label>
                        <label>
                            <input className="Degree"
                                type="radio"
                                name="units"
                                checked={unit === "metric"}
                                value="metric"
                                onChange={(e) => setUnit(e.target.value)}
                                />
                            Celsius
                        </label>
                    </div>
                    <div className="Btn">
                        <Button type="submit" variant="info" >Get Forecast</Button>
                    </div>
                </div>
            </form>

            <Conditions responseObj={responseObj}  />
            <img src="https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHN1bm55fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="flamingo float toy in a pool"/>
        </div>
    );
}
 
export default Forecast;



// error={error} loading={loading}