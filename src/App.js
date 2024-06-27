import './styles/style.css';
import SkyCard from './components/SkyCard';
import Clock from './components/Clock';
import Root from './components/Root';
import Home from './components/Home'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Root/> }>
    <Route path='home' element={ <Home/> }/>
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
