import T_Shirt from '../img/tshirt.jpg';
import Graziano from '../img/graziano.jpg';

function Merchandising_Italian () {
    return (
        <div className="app">
            <div className="container my-5">
            <h1>👕 Merchandising</h1><hr />
            Se vuoi comprare una delle nostre magliette, scrivi una mail a <a href="mailto:merchandising@valtrigheeagles.com" style={{ textDecoration: 'none' }}>merchandising@valtrigheeagles.com</a>
            <div class="card text-center my-5">
                <div class="card-header">
                <div className="alert alert-warning" style={{ border: "2px solid darkOrange" }}><b style={{ color: "darkYellow" }}>Novità</b></div>
                </div>
                <div class="card-body">
                <h5 class="card-title">OlProfesur T-Shirt</h5>
                <p class="card-text">Questa t-shirt ricorda sempre chi è il profesur</p>

                <center>
                <div id="carouselExampleControls" class="carousel slide my-3" data-ride="carousel">
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-50" src={ T_Shirt } alt="First slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-50" src={ T_Shirt } alt="Second slide" />
                    </div>
                    </div>
                    <a style={{ textDecoration: "none", backgroundColor: "grey", borderRadius: "18px", width: "20%" }} class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Prossimo</span>
                    </a>
                    <a style={{ textDecoration: "none", backgroundColor: "grey", borderRadius: "18px", width: "20%" }} class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Precedente</span>
                    </a>
                </div>
                </center>

                <a href="mailto:merchandising@valtrigheeagles.com" className="btn btn-success">Compra</a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Merchandising_Italian;