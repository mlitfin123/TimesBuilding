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
    <nav className="collapsible-menu">
        <div className="collapse navbar-collapse" id="navbarNav">
            <div>
                <p className="nav-item">
                    <Link onClick={() => setActivePage('home')} className={activePage === 'home' ? 'nav-link active' : 'nav-link'} to="/"><img className="navIMG" src="/images/Logos/home.jpg" alt="Home" height="100px"></img><span className="text">Home</span></Link>
                </p>
                <p className="nav-item">
                    <Link onClick={() => setActivePage('availablespace')} className={activePage === 'availablespace' ? 'nav-link active' : 'nav-link'} to="/availablespace"><img className="navIMG" src="/images/Logos/availablespace.jpg" alt="Available Space" height="100px"></img><span className="text">Available Space</span></Link>
                </p>
                <p className="nav-item">
                    <Link onClick={() => setActivePage('currenttenants')} className={activePage === 'currenttenants' ? 'nav-link active' : 'nav-link'} to="/currenttenants"><img className="navIMG" src="/images/Logos/currenttenants.jpg" alt="Current Tenants" height="100px"></img><span className="text">Current Tenants</span></Link>
                </p>
                <p className="nav-item">
                    <Link onClick={() => setActivePage('history')} className={activePage === 'history' ? 'nav-link active' : 'nav-link'} to="/history"><img className="navIMG" src="/images/Logos/history.jpg" alt="History" height="100px"></img><span className="text">History</span></Link>
                </p>
                <p className="nav-item">
                    <Link onClick={() => setActivePage('downtown')} className={activePage === 'downtown' ? 'nav-link active' : 'nav-link'} to="/downtown"><img className="navIMG" src="/images/Logos/downtown.jpg" alt="Downtown" height="100px"></img><span className="text">Downtown</span></Link>
                </p>
                <p className="nav-item">
                    <Link onClick={() => setActivePage('contact')} className={activePage === 'contact' ? 'nav-link active' : 'nav-link'} to="/contact"><img className="navIMG" src="/images/Logos/contact.jpg" alt="Contact" height="100px"></img><span className="text">Contact</span></Link>
                </p>
            </div>
        </div>
    </nav>
    );
}

export default Nav;