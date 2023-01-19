import logo from '../../../assets/img/argentBankLogo.png'
import { Link } from 'react-router-dom'
import { accountService } from '../../../_services/account.service';
import { useNavigate } from 'react-router-dom';
import "./UserHeader.css"

function UserHeader() {
  let navigate = useNavigate()
  const logout = () => {
    accountService.logout()
    navigate("/")
  }

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
        <div className="main-nav-right">
          <div>
            <Link to="/user/profile" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              Profile
            </Link>
          </div>
          <div className="logout">
          <i className="fa fa-sign-out"></i>
            <button onClick={logout}>Sign Out</button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default UserHeader;
