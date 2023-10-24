import React from 'react';
import './Nav.css';
import NavLink, { NavLinkProps } from './NavLink';

interface NavProps {
    activeSection: string;
}

const Nav: React.FC<NavProps> = ({ activeSection }) => {

    const navLinks: NavLinkProps[] = [
        {activeSection, page: 'home', d: .8},
        {activeSection, page: 'about', d: .9},
        {activeSection, page: 'projects', d: 1.0},
        // {activeSection, page: 'contact', d: 1.1},
    ];

    return (
        <nav>
            <ul className='nav-list'>
                {navLinks.map((link, i) => (
                    <NavLink 
                        key={i}
                        activeSection={link.activeSection}
                        page={link.page}
                        d={link.d}
                    />
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
