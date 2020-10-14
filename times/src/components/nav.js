import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";

const Nav = () => {

    let location = useLocation();

    const [activePage, setActivePage] = useState('');

    useEffect(() => {
        
        switch (location.pathname) {
            case '/':
                setActivePage('home');
            break;
            case '/availablespace':
                setActivePage('availablespace');
            break;
            case '/currenttenants':
                setActivePage('currenttenants');
            break;
            case '/history':
                setActivePage('history');
            break;
            case '/downtown':
                setActivePage('downtown');
            break;
            case '/contact':
                setActivePage('contact');
            break;
            default: 
                setActivePage('home');
            break;
    }
}, [location.pathname]);

return (
    <nav className="navbar navbar-expand-md">
        <button className="navbar-toggler navbar-light bg-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link onClick={() => setActivePage('home')} className={activePage === 'home' ? 'nav-link active' : 'nav-link'} to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link onClick={() => setActivePage('availablespace')} className={activePage === 'availablespace' ? 'nav-link active' : 'nav-link'} to="/availablespace">Available Space</Link>
                </li>
                <li className="nav-item">
                    <Link onClick={() => setActivePage('currenttenants')} className={activePage === 'currenttenants' ? 'nav-link active' : 'nav-link'} to="/currenttenants">Current Tenants</Link>
                </li>
                <li className="nav-item">
                    <Link onClick={() => setActivePage('history')} className={activePage === 'history' ? 'nav-link active' : 'nav-link'} to="/history">History</Link>
                </li>
                <li className="nav-item">
                    <Link onClick={() => setActivePage('downtown')} className={activePage === 'downtown' ? 'nav-link active' : 'nav-link'} to="/downtown">Downtown</Link>
                </li>
                <li className="nav-item">
                    <Link onClick={() => setActivePage('contact')} className={activePage === 'contact' ? 'nav-link active' : 'nav-link'} to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    </nav>
    );
}

export default Nav;