import React from 'react';


const Conditions = (props) => {
    return (
        <div>
{/* 
            {props.error && <small className="Small">Please enter a valid city.</small>}
                {props.loading && <div>Loading...</div>} */}

            {props.responseObj.cod === 200 ?
                <div>
                    <h3><strong>{props.responseObj.name}</strong></h3>
                    <h4>It is currently {Math.round(props.responseObj.main.temp)} degrees out with {props.responseObj.weather[0].description}.</h4>
                </div>
                : null
            }
        </div>
    )
}

export default Conditions;