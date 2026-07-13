import React from 'react';
import classes from '../../assets/stylesheets/nav.module.css';
import widgets from '../../assets/widgets.svg';
import { Link } from 'react-router-dom';

export default function Navbar(props) {


  return (
    <>
      <nav className={`navbar navbar-expand-lg ${classes.navbar}`}>
        <div className={`container-fluid res-menu ${classes.container}`}>
          <Link className={`navbar-brand pt-3 ps-3 ${classes.brand}`} to="/">
            <img src={props.logo} alt="" className={`img-fluid logo `} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className={`toggler ${classes.toggler}`} >
            <div class="nav-container">
            <input class="checkbox" type="checkbox" name="" id="" />
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div> 
            </div>
            </span>
          </button>
          <div className={`collapse navbar-collapse ${classes.collapse}`} id="navbarSupportedContent">
            <ul className={`navbar-nav mx-auto mb-2 d-flex justify-content-center align-items-center mb-lg-0 ${classes.navbarNav}`}>
              <li className={`nav-item ${classes.navItem}`}>
                <Link className={`nav-link ${classes.items}`} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className={`nav-item ${classes.navItem}`}>
                <Link className={`nav-link ${classes.items}`} to="/what-we-do">
                  What We Do
                </Link>
              </li>
              <li className={`nav-item ${classes.navItem}`}>
                <Link className={`nav-link ${classes.items}`} to="/about">
                  About
                </Link>
              </li>
              <li className={`nav-item ${classes.navItem}`}>
                <Link className={`nav-link ${classes.items}`} to="/services">
                  Services
                </Link>
              </li>
            </ul>
            <div className='d-flex justify-content-center align-items-center'>
              <Link to='/get-in-touch'>
              <button className={`btn ${classes.btn}`} >Contact Us</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
    </>
  );
}
