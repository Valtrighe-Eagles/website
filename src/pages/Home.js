// import logo from './logo.svg';
import '../App.css';

import 'bootstrap/dist/css/bootstrap.css';

import Navbar from '../components/Navbar';

import graziano from '../img/graziano.jpg';
import riva from '../img/riva.jpg';
import rota from '../img/rota.png';

function Home() {
  return (
    <div className="App">
      <Navbar />
      <div className="container my-5">
        <h1>Welcome to Valtrighe Eagles!</h1><hr />
        <h2>Who are we?</h2>        
        We are 3 guys with big business aspirations
        <div class="card-group my-4">
          <div class="card">
            <img class="card-img-top" src={ graziano } alt="" />
            <div class="card-body">
              <h5 class="card-title">Filippo Graziano</h5>
              <p class="card-text">CEO</p>
              <div className="card-footer">
                <small>It's not known what he does all the time but he is always busy</small>
              </div>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={ riva } alt="" />
            <div class="card-body">
              <h5 class="card-title">Manuel Riva</h5>
              <p class="card-text">CTO</p>
              <div className="card-footer">
                <small>Does the 99% of the work. Btw he uses arch</small>
              </div>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={ rota } alt="" />
            <div class="card-body">
              <h5 class="card-title">Loris Rota</h5>
              <p class="card-text">PR</p>
              <div className="card-footer">
                <small>If you have any issues, tell him... He'll do nothing.</small>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="my-4">
          <h2>What do we do?</h2>
          <div class="alert alert-info" role="alert">
            🚀 <b>Sorint Hackersgen Event</b> (22/10/2022) Arduino challenge (coming soon)
          </div>
          <div class="alert alert-success" role="alert">
            🏆 <b>IT Olympics</b> (?) Informatcs competition for high school
          </div>
          <div class="alert alert-success" role="alert">
            ⚙️ <b>Sorint Hackathon</b> (2021) 48 hours to make a project in group
          </div>
        </div>
    </div>

    <footer class="text-center text-lg-start bg-light text-muted">
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    <div>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-google"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-github"></i>
      </a>
    </div>
  </section>
  <section class="">
    <div class="container text-center text-md-start mt-5">
      <div class="row mt-3">
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>Valtrighe Eagles
          </h6>
          <p>
            We are a team of 3 guys from Bergamo
          </p>
        </div>
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 class="text-uppercase fw-bold mb-4">Contatti</h6>
          <p>Bergamo, BG, IT</p>
          <p>Email: info@valtrigheeagles.com</p>
          <p>GitHub: <a href="https://www.github.com/Valtrighe-Eagles">@Valtrighe-Eagles</a></p>
          <p></p>
        </div>
      </div>
    </div>
  </section>
</footer>

    </div>
  );
}

export default Home;