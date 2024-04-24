import { useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { IoMdLogIn, IoMdLogOut } from 'react-icons/io';
import logo from '../../assests/images/main-logo.png';

export const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
        <p className="food-xpress">FoodXpress</p>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => setToggle((prev) => !prev)}
          >
            {toggle ? (
              <IoMdLogOut className="logout" />
            ) : (
              <IoMdLogIn className="login" />
            )}
          </button>
        </ul>
      </div>
    </div>
  );
};
