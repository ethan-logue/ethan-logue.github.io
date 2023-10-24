import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export interface NavLinkProps {
    activeSection: string;
    page: string;
    d: number;
}

const NavLink: React.FC<NavLinkProps> = ({ activeSection, page, d }) => {

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    const navLink = {
        hidden: {
            opacity: 0,
            x: -50,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                delay: d,
            },
        },
    };

    return (
        <motion.li 
            className={`nav-item ${activeSection === `${page}` ? 'active' : ''}`}
        >
            <motion.a
                href={`#${page}`}
                ref={ref}
                initial='hidden'
                animate={inView ? 'visible' : 'hidden'}
                variants={navLink}
            >
                {page}
            </motion.a>
        </motion.li>
    );
};

export default NavLink;
