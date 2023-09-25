import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';

function Header(props) {
  return(
    <header className="header">
      <img className="header__logo" src={logo} alt="логотип 'Место'"/>
      <div className="header__info">
        <p className="header__user-email">{props.email}</p>
        <Link className="header__link" to={props.route} onClick={props.onSignOut} >{props.linkName}</Link>
      </div>
    </header>
  );
}

export default Header;
