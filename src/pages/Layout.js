import { Outlet, Link } from "react-router-dom";
import Navbar from '../components/Navbar';

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-dark" style={{ backgroundColor: "#06283D" }}>
            <a className="navbar-brand" style={{ paddingLeft: '15px' }}>
                <img src="https://avatars.githubusercontent.com/u/115826499?s=200&v=4" style={{ borderRadius: '8px', marginRight: '25px' }} width={ 50 } height={ 50 } />
            </a>
            <Link style={{ color: 'white', textDecoration: 'none' }} to="/">Home</Link>
            <Link style={{ color: 'white', textDecoration: 'none' }}to="/merchandising">Merchandising</Link>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;