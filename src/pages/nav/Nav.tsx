import React, { useEffect, useState } from 'react';
import useCursorHandlers from '../../components/cursor/useCursorHandlers';
import { gsap } from 'gsap';
import './Nav.css';

const Nav: React.FC = () => {
    const cursorHandlers = useCursorHandlers();
    const [activeSection, setActiveSection] = useState<string>('Home');

    const sections = React.useMemo(() => ['Home', 'About', 'Projects', 'Contact'], []);

    useEffect(() => {
        const index = sections.indexOf(activeSection);
        gsap.to('.cube', { rotationX: index * 90, duration: 0.3, ease: 'power2.inOut' });
    }, [activeSection, sections]);

    return (
        <nav className='nav-container'>
            <h1 className='nav-title cube'>
                <div className='face front'>Ethan Logue</div>
                <div className='face bottom'>About</div>
                <div className='face back'>Projects</div>
                <div className='face top'>Contact</div>
            </h1>
            <ul className='nav-links'>
                {sections.map((section) => {
                    const handlers = section !== activeSection ? cursorHandlers : {};
                    return (
                        <li
                            key={section}
                            className={`nav-link ${section === activeSection ? 'active' : ''}`}
                            {...handlers}
                            onClick={() => setActiveSection(section)}
                        >
                            <a href={`#${section}`} data-section={section}><span>&#9679;</span></a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Nav;
