import React from "react";
import logo from "../images/Logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import "../Styles/main.css";

const Header = () => {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <img src={logo} alt="logo" />
      <nav ref={navRef} className="nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#reservations">Reservations</a>
        <a href="#orderonline">Order Online</a>
        <a href="#login">Login</a>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn " onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Header;
