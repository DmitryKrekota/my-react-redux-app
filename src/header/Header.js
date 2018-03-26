import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => (
    <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-nav mra-navbar-nav">
                <Link className="nav-item nav-link" to="/">
                    Home
                </Link>
                <Link className="nav-item nav-link" to="/example-1">
                    Example 1
                </Link>
                <Link className="nav-item nav-link" to="/example-2">
                    Example 2
                </Link>
            </div>
        </nav>
    </header>
)

export default Header