import '../App.css'

function Navbar () {
    return (
        <nav class="navbar navbar-dark" style={{ backgroundColor: "#06283D", textAlign: "left" }}>
        <a class="navbar-brand" href="App.js" style={{ paddingLeft: "15px" }}>
            <img style={{ borderRadius: "8px", marginRight: "15px" }} src="https://avatars.githubusercontent.com/u/115826499?s=200&v=4" width="30" height="30" class="d-inline-block align-top" alt="" />
            Valtrighe Eagles
        </a>
        </nav>
    )
}

export default Navbar