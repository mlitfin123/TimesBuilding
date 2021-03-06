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
            case '/admin':
                setActivePage('admin');
            break;
            default: 
                setActivePage('home');
            break;
    }
}, [location.pathname]);
    return (
        <footer>
                <div className="nav justify-content-center">
                    <Link id="navbarHome" onClick={() => setActivePage('home')} className={activePage === 'home' ? 'nav-link active' : 'nav-link'} to="/">Home</Link>
                    <Link id="navbarAvailable" onClick={() => setActivePage('availablespace')} className={activePage === 'availablespace' ? 'nav-link active' : 'nav-link'} to="/availablespace"> Available Space</Link>
                    <Link id="navbarCurrent" onClick={() => setActivePage('currenttenants')} className={activePage === 'currenttenants' ? 'nav-link active' : 'nav-link'} to="/currenttenants"> Current Tenants</Link>
                    <Link id="navbarHistory" onClick={() => setActivePage('history')} className={activePage === 'history' ? 'nav-link active' : 'nav-link'} to="/history"> History</Link>
                    <Link id="navbarDowntown" onClick={() => setActivePage('downtown')} className={activePage === 'downtown' ? 'nav-link active' : 'nav-link'} to="/downtown"> Downtown</Link>
                    <Link id="navbarContact" onClick={() => setActivePage('contact')} className={activePage === 'contact' ? 'nav-link active' : 'nav-link'} to="/contact"> Contact</Link>
                </div>
            <div className="footer-content">
            <a href="https://www.facebook.com/aquinoproperties" target="_blank" rel="noopener noreferrer"><img id="fbLogo" src="\images\Logos\facebookLogo.png" alt="facebook"></img></a>
            <p>Copyright � 2021 <b>Aquino Properties, LLC</b>&nbsp;&nbsp; All rights reserved.</p><br></br>
            Website courtesy of <a href="https://fittotech.net" target="_blank" rel="noopener noreferrer">Fit-to-Tech Technologies</a>
            </div>
        </footer>
    )
}

export default Footer