import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" className="clean-styles" >
            <div className="header-logo">
                <h1>Home</h1>
            </div>
        </Link>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        </form>
      </nav>

    )
}


export default Header;