import './Header.css'
import logo from '../../../assets/img/argentBankLogo.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <nav className="main-nav">
        <Link to="/home" className="Header-Logo">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <Link to="/login" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
