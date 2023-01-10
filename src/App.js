// import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css';

import Navbar from './components/Navbar';

import Home_Italian from './components/Home_Italian'
import Home_English from './components/Home_English'
import Merchandising_Italian from './components/Merchandising_Italian'
import Merchandising_English from './components/Merchandising_English'

function App() {
  return (
    <>
    <div className="text-center">
    <Navbar />
    </div>
    <Routes>
      <Route path="/" element={ <Home_Italian /> } />
      <Route path="/english" element={ <Home_English /> } />
      <Route path="/merchandising" element={ <Merchandising_Italian /> } />
      <Route path="/merchandising/english" element={ <Merchandising_English /> } />
    </Routes>
    </>
  );
}

export default App;
