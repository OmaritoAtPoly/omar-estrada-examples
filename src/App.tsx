import {RouterProvider} from 'react-router-dom';
import './App.css';
import {routerElements} from './pages/routes';

function App(){
  return <RouterProvider router={routerElements} />
}

export default App;
