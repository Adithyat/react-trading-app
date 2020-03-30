import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
<header className="main-header">
            <nav>
                <ul className="menu">
                    <li className="menu__list-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="menu__list-item">
                        <Link to="/assets">Assets</Link>
                    </li>
                    <li className="menu__list-item">
                        <Link to="/details">Details</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;