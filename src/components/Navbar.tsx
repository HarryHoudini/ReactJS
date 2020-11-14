import React from 'react';

export default function Navbar() {
    return (
        <nav>
            <div className="nav-wrapper blue lighten-1 px1">
                <a href="/" className="brand-logo">
                    React + TS
                </a>
                <ul className="right hide-on-med-and-down">
                    <li>
                        <a href="/">Sass</a>
                    </li>
                    <li>
                        <a href="/">Components</a>
                    </li>
                    <li>
                        <a href="/">Information</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
