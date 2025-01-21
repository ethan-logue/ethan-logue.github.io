import React, { useState } from 'react';
import useCursorHandlers from '../../components/cursor/useCursorHandlers';
import './Nav.css';

const Nav: React.FC = () => {
    const cursorHandlers = useCursorHandlers();
    const [activeSection, setActiveSection] = useState<string>('Ethan Logue');

    return (
        <nav className='nav-container'>
            <h1 className='nav-title'>{activeSection}</h1>
            <ul className='nav-links'>
                <li className='nav-link' {...cursorHandlers}><a href='#home'>Home</a></li>
                <li className='nav-link' {...cursorHandlers}><a href='#about'>About</a></li>
                <li className='nav-link' {...cursorHandlers}><a href='#projects'>Projects</a></li>
                <li className='nav-link' {...cursorHandlers}><a href='#contact'>Contact</a></li>
            </ul>
        </nav>
    );
};

export default Nav;
