import './App.css';
import SkyCard from './components/SkyCard';

function App() {
  return (
    <div className="App">
      <SkyCard baseURL="https://cam01.sci.ucalgary.ca/AllSkyCam/AllSkyCurrentImage.JPG" />
      <SkyCard baseURL="https://cam01.sci.ucalgary.ca/AllSkyCam/SQMMpsasGraph.jpg" />
      <SkyCard baseURL="https://cam01.sci.ucalgary.ca/netcam/152/1.jpg" />
    </div>
  );
}

export default App;
