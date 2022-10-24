import React from 'react';

function Header() {
    return (
        <header className="Header">
            <nav className="Nav">
                <a href="/">Home</a>
                <a href="/">Searh</a>
                <a href="/">About</a>
                <button>Login</button>
            </nav>
        </header>
    );
}

export default Header;