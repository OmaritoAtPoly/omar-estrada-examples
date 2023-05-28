import './App.css';
import ImageSlider from './components/container/ImageSlider';
import {SliderData} from './utils/SliderData';

function App() {
  return <div className='App-header'>
    <ImageSlider slides={SliderData} />
  </div>
}

export default App;