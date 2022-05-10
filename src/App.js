import './App.css';
import Forecast from './Forecast/Forecast';

function App() {
  return (
    <div className="App">
      <h1>Mom's Weather App</h1>
      <p>created by Your Youngest</p>
      <main>
        <Forecast />
      </main>
      {/* <footer>created by Your Youngest</footer> */}
    </div>
  );
}

export default App;
