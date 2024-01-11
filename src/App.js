import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './screens/Home/Home';
import WeatherForeCast from './screens/WeatherForeCast/WeatherForeCast';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:lat/:lon" element={<WeatherForeCast />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
