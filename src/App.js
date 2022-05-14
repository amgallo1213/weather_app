import './App.css';
// import Conditions from './Conditions/Conditions';
import Forecast from './Forecast/Forecast';
import {Card} from 'react-bootstrap';
import FiveDay from './FiveDayForecast/FiveDay';

function App() {
  return (
    <div className="App">
      <div >
        <h1>Mom's Weather App</h1>
      </div>
      <div className="Main">
        <div className="Left">
          <div>
            <img src="https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHN1bm55fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="flamingo float toy in a pool"/>
          </div>
          
        </div>
        <div className="Right">
        <div>
            <Forecast />
          </div>
          <div>
            <FiveDay />
          </div>
        </div>
      </div>
      <div  className="Creator">
        <h2>&#x1F63B; created by Your Youngest &#x1F63B;</h2>
      </div>
        
    </div>
  );
}

export default App;
