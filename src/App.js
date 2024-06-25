import './styles/style.css';
import SkyCard from './components/SkyCard';
import Clock from './components/Clock'

function App() {
  return (
    <div className="App">
      <div className="desktop">
        <section className='clock-section'>
          <Clock/>
        </section>

        <section>
          <div className='skycard-container'>
            <SkyCard baseURL="https://cam01.sci.ucalgary.ca/AllSkyCam/AllSkyCurrentImage.JPG" />
            <SkyCard baseURL="https://cam01.sci.ucalgary.ca/AllSkyCam/SQMMpsasGraph.jpg" />
            <SkyCard baseURL="https://cam01.sci.ucalgary.ca/netcam/152/1.jpg" />
          </div>
        </section>
      </div>

      <footer>
        <div className='signature-container'>
          <p className='signature'>Made by <a href='#'>Eric Hess</a></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
