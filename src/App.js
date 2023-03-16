import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import About from './components/About/About';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Rentcar from './components/Rentcar/Rentcar';

function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      <Rentcar />
      <About />
    </div>
    </BrowserRouter>
  );
}

export default App;
