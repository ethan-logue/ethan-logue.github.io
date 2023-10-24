import './App.css';
import React, { useEffect, useState } from 'react';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Nav from './pages/nav/Nav';
import Projects from './pages/projects/Projects';

const App: React.FC = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const sections = ['home', 'about', 'projects', 'contact'];
    
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-50% 0px -50% 0px' }
        );
    
        sections.forEach((section) => {
            const target = document.getElementById(section);
            if (target) {
                observer.observe(target);
            }
        });
    
        return () => {
            sections.forEach((section) => {
                const target = document.getElementById(section);
                if (target) {
                    observer.unobserve(target);
                }
            });
        };
    }, []);
    
    return (
        <main className='app'>
            <Nav activeSection={activeSection} />
            <Home />
            <About />
            <Projects />
        </main>
    );
};

export default App;