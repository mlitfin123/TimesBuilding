import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
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
        <footer>
            <p>_________________________________________________________________________________________________________________________________________________________________________________________</p><br></br>
            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-footer">
                    <Link onClick={() => setActivePage('home')} className={activePage === 'home' ? 'nav-link active' : 'nav-link'} to="/">Home</Link> |
                    <Link onClick={() => setActivePage('availablespace')} className={activePage === 'availablespace' ? 'nav-link active' : 'nav-link'} to="/availablespace"> Available Space</Link> |
                    <Link onClick={() => setActivePage('currenttenants')} className={activePage === 'currenttenants' ? 'nav-link active' : 'nav-link'} to="/currenttenants"> Current Tenants</Link> |
                    <Link onClick={() => setActivePage('history')} className={activePage === 'history' ? 'nav-link active' : 'nav-link'} to="/history"> History</Link> |
                    <Link onClick={() => setActivePage('downtown')} className={activePage === 'downtown' ? 'nav-link active' : 'nav-link'} to="/downtown"> Downtown</Link> |
                    <Link onClick={() => setActivePage('contact')} className={activePage === 'contact' ? 'nav-link active' : 'nav-link'} to="/contact"> Contact</Link>
                </div>
            </div>
            <div className="footer-content">
            <p>Copyright � 2008 <b>Red Maple Properties, LLC</b>&nbsp;&nbsp; All rights reserved.</p>
            Website courtesy of <a href="http://www.christianparentsforum.com/forums">GrowthByDesignConsulting</a><br></br>
            Website updated by <a href="https://marksfolio.herokuapp.com/">Mark Litfin</a>
            </div>
        </footer>
    )
}

export default Footer