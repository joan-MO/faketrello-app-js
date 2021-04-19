import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
import Search from './Search'

const Header = ({handleChange}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" className="clean-styles" >
            <div className="header-logo">
                <h1>Home</h1>
            </div>
        </Link>
        <Search handleChange={handleChange}/>
      </nav>

    )
}


export default Header;