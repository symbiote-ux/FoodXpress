import { useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { IoMdLogIn, IoMdLogOut } from 'react-icons/io';

export const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
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
