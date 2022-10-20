import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';

import Navbar from './components/Navbar';

import graziano from './img/graziano.jpg';
import riva from './img/riva.jpg';
import rota from './img/rota.png';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container my-5">
        <div class="card-group">
          <div class="card">
            <img class="card-img-top" src={ graziano } alt="Filippo Graziano" />
            <div class="card-body">
              <h5 class="card-title">Filippo Graziano</h5>
              <p class="card-text">It's not known what he does all the time but he is always busy</p>
            </div>
            <div class="card-footer" style={{ backgroundColor: "#5F9DF7" }}>
              <small style={{ color: "white" }}>CEO</small>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={ riva } alt="Manuel Riva" />
            <div class="card-body">
              <h5 class="card-title">Manuel Riva</h5>
              <p class="card-text">Does the 99% of the work. Btw he uses arch</p>
            </div>
            <div class="card-footer" style={{ backgroundColor: "#5F9DF7" }}>
              <small style={{ color: "white" }}>CTO</small>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={ rota } alt="Loris Rota" />
            <div class="card-body">
              <h5 class="card-title">Loris Rota</h5>
              <p class="card-text">If you have any issues, tell him... He'll do nothing</p>
            </div>
            <div class="card-footer" style={{ backgroundColor: "#5F9DF7" }}>
              <small style={{ color: "white" }}>PR - Public relationship</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
