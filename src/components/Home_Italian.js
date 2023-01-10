import graziano from '../img/graziano.jpg';
import riva from '../img/riva.jpg';
import rota from '../img/rota.png';
import ranica from '../img/ranica.jpg';

import { Link } from 'react-router-dom'

function Home_Italian () {
    return (
        <div className="App">
            <div className="container">
                <div className="text-center">
                    <Link to="/english" className="btn my-1">English</Link>
                </div>
                <h1>🦅 Benvenuto nel sito di Valtrighe Eagles!</h1><hr />
                <h2>Chi siamo?</h2>        
                Siamo tre ragazzi di Bergamo. Ci definiamo come <i>businessmen</i>.
                <div class="card-group my-4">
                <div class="card">
                    <img class="card-img-top" src={ graziano } alt="" />
                    <div class="card-body">
                    <a href="https://www.linkedin.com/in/filippogiovannigraziano" style={{ color: "black" }}><h5 class="card-title">Filippo Graziano</h5></a>
                    <p class="card-text">CEO</p>
                    <div className="card-footer">
                        <small>Non si sa cosa faccia tutto il tempo, ma è sempre occupato</small>
                    </div>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src={ riva } alt="" />
                    <div class="card-body">
                    <a href="https://www.linkedin.com/in/manuel-carlo-riva-043234251" style={{ color: "black" }}><h5 class="card-title">Manuel Riva</h5></a>
                    <p class="card-text">CTO</p>
                    <div className="card-footer">
                        <small>Fa il 99% del lavoro. Btw he uses arch</small>
                    </div>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src={ rota } alt="" />
                    <div class="card-body">
                    <a href="https://www.linkedin.com/in/loris-rota-40063a252" style={{ color: "black" }}><h5 class="card-title">Loris Rota</h5></a>
                    <p class="card-text">PR</p>
                    <div className="card-footer">
                        <small>Se hai qualche problema avvisalo... Non farà niente</small>
                    </div>
                    </div>
                </div>
                </div><hr />
                <h3>Membri</h3>
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src={ ranica }class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title"><a href="https://www.linkedin.com/in/andrearanica/" style={{ color: "black" }}>Andrea Ranica</a></h5>
                            <p class="card-text">Programmatore</p><hr />
                            <small>In teoria è un dipendente, ma in pratica lo licenziamo per sport</small>
                        </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="my-4">
                    <h2>Cosa facciamo?</h2>
                    <div class="alert alert-success" role="alert">
                        🚀 <b>Sorint Hackersgen Event</b> (22/10/2022) Sfida con Arduino
                    </div>
                    <div class="alert alert-success" role="alert">
                        🏆 <b>Olimpiadi di informatica</b> (2021) Competizioni di informatica per le scuole di secondo grado
                    </div>
                    <div class="alert alert-success" role="alert">
                        ⚙️ <b>Sorint Hackathon</b> (2021) Competizione a gruppi di 48 ore in cui si crea un progetto
                    </div>
                </div><hr />
                <div className="my-4">
                    <h2>Contattaci</h2>
                    <center>
                    <a href="mailto:info@valtrigheeagles.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" /></a>
                    <a href="https://www.github.com/valtrighe-eagles"><img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" /></a>
                    </center>
                </div>
            </div>

            <footer class="text-center text-lg-start bg-light text-muted">
                <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div class="me-5 d-none d-lg-block">
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
                        Siamo tre ragazzi di Bergamo
                    </p>
                    </div>
                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <h6 class="text-uppercase fw-bold mb-4">Contatti</h6>
                    <p>Bergamo, BG, IT</p>
                    <p>Email: <a href="mailto:info@valtrigheeagles.com">info@valtrigheeagles.com</a></p>
                    <p>GitHub: <a href="https://www.github.com/Valtrighe-Eagles">@Valtrighe-Eagles</a></p>
                    <p></p>
                    </div>
                </div>
                </div>
            </section>
            </footer>
        </div>
    )
}

export default Home_Italian;