import './App.css';
import SkyCard from './components/SkyCard';
import Clock from './components/Clock'

function App() {
  return (
    <div className="App">
      <div className="desktop">
        <Clock/>
        <div className='skycard-container'>
          <SkyCard baseURL="https://cam01.sci.ucalgary.ca/AllSkyCam/AllSkyCurrentImage.JPG" />
          <SkyCard baseURL="https://cam01.sci.ucalgary.ca/AllSkyCam/SQMMpsasGraph.jpg" />
          <SkyCard baseURL="https://cam01.sci.ucalgary.ca/netcam/152/1.jpg" />
        </div>
      </div>
    </div>
  );
}

export default App;
