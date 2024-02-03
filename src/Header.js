import './header.css';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import userContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Title = () => {
  return (
    <a href="/">
      <img
        className="w-56"
        src="https://lh3.googleusercontent.com/p/AF1QipMf9w4RomHXrUkQKvrxtPdjp3SLadP05HDzXlH2=w1080-h608-p-no-v0"
        alt="logo"
      ></img>
    </a>
  );
};

const Header = () => {
  const { loggedInUser } = useContext(userContext);
  const cart = useSelector((store) => store.cart.items);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex flex-col md:flex-row justify-between bg-pink-100 shadow-lg p-4">
      <div className="flex items-center mb-4 md:mb-0">
        <Title />
      </div>
      <div className="flex items-center">
        <ul className="flex p-2 md:p-0">
          <li className="px-2 md:px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 md:px-4">
            <Link to="/About">About</Link>
          </li>
          <li className="px-2 md:px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <Link to="/Cart">
            <li className="px-2 md:px-4 font-bold">Cart-({cart.length} items)</li>
          </Link>
        </ul>
      </div>
      <div className="flex items-center">
        {isLoggedIn ? (
          <button
            className="px-2 md:px-4"
            onClick={() => {
              setIsLoggedIn(false);
            }}
          >
            Logout
          </button>
        ) : (
          <button
            className="px-2 md:px-4"
            onClick={() => {
              setIsLoggedIn(true);
            }}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
