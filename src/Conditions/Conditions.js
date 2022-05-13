import React from 'react';


const Conditions = (props) => {
    return (
        <div>
{/* 
            {props.error && <small className="Small">Please enter a valid city.</small>}
                {props.loading && <div>Loading...</div>} */}

            {props.responseObj.cod === 200 ?
                <div>
                    <div>
                        <h2><strong>{props.responseObj.name}</strong></h2>
                        <h4>It is currently <h3>{Math.round(props.responseObj.main.temp)} &#176;</h3> with {props.responseObj.weather[0].description}.</h4>
                    </div>
                    <div className="HighLow">
                        <p><strong>High: {Math.round(props.responseObj.main.temp_max)}</strong></p>
                        <p><strong>Low: {Math.floor(props.responseObj.main.temp_min)}</strong></p>
                    </div>
                </div>
                : null
            }
        </div>
    )
}

export default Conditions;

