import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useNotificationStore } from "../../lib/notificationStore";

function Navbar() {
  const [open, setOpen] = useState(false);
  const {currentUser}=useContext(AuthContext) 

  const fetch = useNotificationStore(state=>state.fetch)
  const number = useNotificationStore(state=>state.number)

  if(currentUser) fetch();

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Services</a>
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            <img src={currentUser.avatar||"/noavatar.jpg"} alt="" />
            <span>{currentUser.username}</span>
            <Link to='/profile' className="profile">
              {number > 0 && <div className="notification">{number}</div>}
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/login" className="signUp">Login</a>
            <a href="/register" className="signUp">
              SignUp
            </a>
          </>
        )}
        <div className="menuIcon">
          <img
            src="https://img.icons8.com/?size=100&id=120374&format=png&color=FFFFFF"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>

        {currentUser?(<div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About Us</a>
          <a href="/">Contact</a>
          <a href="/">Services</a>
          <a href="/profile">Profile</a>
        </div>):(<div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About Us</a>
          <a href="/">Contact</a>
          <a href="/">Services</a>
          <a href="/login">Login</a>
          <a href="/register">Sign Up</a>
        </div>)}
      </div>
    </nav>
  );
}

export default Navbar;

