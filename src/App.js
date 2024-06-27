import './styles/style.css';
import Root from './components/Root';
import Home from './components/Home';
import AllSky from './components/AllSky';
import SQM from './components/SQM';
import WeatherCam from './components/WeatherCam';

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Root/> }>
    <Route path='home' element={ <Home/> }/>
    <Route path='allsky' element={ <AllSky/> }/>
    <Route path='sqm' element={ <SQM/> }/>
    <Route path='weather-cam' element={ <WeatherCam/> }/>
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
