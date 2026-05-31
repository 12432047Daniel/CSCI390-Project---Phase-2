import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Gallery from './pages/Gallary';
import Menu from './pages/Menu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/about-us' Component={AboutUs} />
          <Route path='/contact' Component={Contact} />
          <Route path='/gallery' Component={Gallery} />
          <Route path='/menu' Component={Menu} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
