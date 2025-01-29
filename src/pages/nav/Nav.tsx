import React, { useEffect, useState } from 'react';
import useCursorHandlers from '../../components/cursor/useCursorHandlers';
import { gsap } from 'gsap';
import './Nav.css';

const Nav: React.FC = () => {
    const cursorHandlers = useCursorHandlers();
    const [activeSection, setActiveSection] = useState<string>('Ethan Logue');

    const sections = ['Home', 'About', 'Projects', 'Contact'];

    useEffect(() => {
        const index = sections.indexOf(activeSection === 'Ethan Logue' ? 'Home' : activeSection);
        gsap.to('.cube', { rotationX: index * 90, duration: 0.3 });
    }, [activeSection]);

    return (
        <nav className='nav-container'>
            <h1 className='nav-title cube'>
                <div className='face front'>Ethan Logue</div>
                <div className='face bottom'>About</div>
                <div className='face back'>Projects</div>
                <div className='face top'>Contact</div>
            </h1>
            <ul className='nav-links'>
                {sections.map((section) => (
                    <li
                        key={section}
                        className={`nav-link ${section === activeSection ? 'active' : ''}`}
                        {...cursorHandlers}
                        onClick={() => setActiveSection(section === 'Home' ? 'Ethan Logue' : section)}
                    >
                        <a href={`#${section}`}>{section}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
