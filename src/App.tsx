import './App.css';
import ImageSlider from './components/ImageSlider';
import {SliderData} from './components/SliderData';

function App() {
  return <div className='App-header'>
    <ImageSlider slides={SliderData} />
  </div>
}

export default App;