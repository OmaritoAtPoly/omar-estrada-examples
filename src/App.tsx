import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routerElements } from './pages/routes';

function App() {
  return (
    <div>
      <header className="App-header">
        <RouterProvider router={routerElements} />
      </header>
    </div>
  );
}

export default App;
