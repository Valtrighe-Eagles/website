import '../App.css'

import { Link } from 'react-router-dom'

function Navbar () {
    return (
        <nav class="navbar navbar-dark" style={{ backgroundColor: "#06283D", textAlign: "left" }}>
        <Link class="navbar-brand" to="/" style={{ paddingLeft: "15px" }}>
            <img style={{ borderRadius: "8px", marginRight: "15px" }} src="https://avatars.githubusercontent.com/u/115826499?s=200&v=4" width="30" height="30" class="d-inline-block align-top" alt="" />
            Valtrighe Eagles
        </Link>
        <Link to="/merchandising" style={{ backgroundColor: "#06283D", textAlign: "left", color: "white", textDecoration: "none", marginRight: "580px" }}>
            Merchandising
        </Link>
        </nav>
    )
}

export default Navbar