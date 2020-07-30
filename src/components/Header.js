
import React from 'react'; // note at {useState} and what not later
import {logoutUser, getUser} from '../ducks/userReducer'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from "axios";


// import { ReactComponent as BellIcon } from '../icons/bell.svg';
// import { ReactComponent as MessengerIcon } from '../icons/messenger.svg';
// import { ReactComponent as CaretIcon } from '../icons/caret.svg';
// // import { ReactComponent as PlusIcon } from '../icons/plus.svg';
// import { ReactComponent as CogIcon } from '../icons/cog.svg';
// import { ReactComponent as ChevronIcon } from '../icons/chevron.svg';
// import { ReactComponent as ArrowIcon } from '../icons/arrow.svg';
// import { ReactComponent as BoltIcon } from '../icons/bolt.svg';
// import { CSSTransition } from 'react-transition-group';


function Header(props) {
  const pathname = props.location.pathname

  function handleLogout(){
    axios.delete("/auth/logout").then(() => {
      props.logoutUser();
      props.history.push("/");
    });
  }

  if (pathname === '/' || pathname === '/Register') {

    return (
        <div></div>
    )
    }

    if (pathname === '/welcome' || pathname === '/project/1' || pathname === '/project/2') {

    return (
      <div>
        <div className="nav-container">
          <div className="nav">
            <div className="logo">
              <Link style={{ textDecoration: "none" }} to="/welcome">
                <svg width="43" height="37" viewBox="0 0 43 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.0092552 18.8209L21.5205 0.814322L21.5373 36.8083L0.0092552 18.8209Z" fill="#484A4D"/>
                  <path d="M42.9655 18.828L21.4161 36.7899L21.4758 0.795934L42.9655 18.828Z" fill="#1E90FF"/>
                  <rect x="12" y="13" width="9" height="2" fill="#1E90FF"/>
                  <rect x="13" y="22" width="6" height="2" fill="#1E90FF"/>
                  <path d="M25.633 24.0259L25.5637 14.3342L27.6163 14.3174L27.6855 24.0091L25.633 24.0259Z" fill="#484A4D"/>
                  <path d="M16.7795 22.8818L16.7315 14.5192L18.9559 14.5037L19.0039 22.8663L16.7795 22.8818Z" fill="#1E90FF"/>
                  <path d="M12.7668 24.0083L12.7385 20.0335L14.8885 20.0159L14.9169 23.9907L12.7668 24.0083Z" fill="#1E90FF"/>
                  <path d="M21 13H32V15H21V13Z" fill="#484A4D"/>
                </svg>
              </Link>
            </div>
            <button className="logout-btn" onClick={() => handleLogout()}>Logout</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (reduxState) => reduxState;
export default withRouter(
  connect(mapStateToProps, { logoutUser, getUser })(Header)
);