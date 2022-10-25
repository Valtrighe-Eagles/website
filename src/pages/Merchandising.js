import T_Shirt from '../img/tshirt.jpg';
import Graziano from '../img/graziano.jpg';

const Home = () => {
    return ( 
    <div className="app">
        <div className="container my-5">
          <h1>👕 Merchandising</h1><hr />
          If you want to buy merchandising, please write an email to <a href="mailto:merchandising@valtrigheeagles.com" style={{ textDecoration: 'none' }}>merchandising@valtrigheeagles.com</a>
          <div class="card text-center my-5">
            <div class="card-header">
              <div className="alert alert-warning" style={{ border: "2px solid darkOrange" }}><b style={{ color: "darkYellow" }}>Novità</b></div>
            </div>
            <div class="card-body">
              <h5 class="card-title">OlProfesur T-Shirt</h5>
              <p class="card-text">This t-shirt always reminds who is the real profesur</p>

              <center>
              <div id="carouselExampleControls" class="carousel slide my-3" data-ride="carousel">
                <div class="carousel-inner" style={{ backgroundColor: 'grey', width: "50%" }}>
                  <div class="carousel-item active">
                    <img class="d-block w-50" src={ T_Shirt } alt="First slide" />
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-50" src={ Graziano } alt="Second slide" />
                  </div>
                </div>
                <a style={{ textDecoration: "none" }} class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a style={{ textDecoration: "none" }} class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
              </center>

              <a href="mailto:merchandising@valtrigheeagles.com" className="btn btn-success">Buy</a>
            </div>
          </div>
        </div>
    </div>
    )
  };
  
export default Home;