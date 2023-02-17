import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CustomNavbar from './Components/CustomNavbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShowWeather from './Components/ShowWeather';
import Home from './Components/Home';

function App() {
  return (
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/ShowWeather" element={<ShowWeather />}/>
        </Routes>
      </BrowserRouter>

  );
}

export default App;
