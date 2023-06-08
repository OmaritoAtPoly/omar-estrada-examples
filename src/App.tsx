import {RouterProvider} from 'react-router-dom';
import './App.css';
import {routerElements} from './pages/routes';
import {ThemeProvider} from '@mui/material';
import CssBaseline from "@mui/material/CssBaseline";
import theme from './utils/theme';


function App() {
  return <ThemeProvider theme={theme}>
    <CssBaseline />
    <RouterProvider router={routerElements} />
  </ThemeProvider>
}

export default App;
