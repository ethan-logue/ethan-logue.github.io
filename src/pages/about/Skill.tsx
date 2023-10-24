import React, { ReactElement } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export interface SkillProps {
    skill: string;
    logo: ReactElement;
    fillColor: string;
}

const Skill: React.FC<SkillProps> = ({ skill, logo, fillColor }) => {

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    const motionSkill = {
        hidden: {
            opacity: 0,
            y: 50,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.2,
            },
        },
    };

    return (
        <motion.div
            className='skill-item'
            ref={ref}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            variants={motionSkill}
            whileHover={{
                    scale: 1.3, 
                    transition: {type: 'tween', duration: 0.3}, 
                    color: fillColor
                }}
        >
            {logo}
            <p className='skill-title'>{skill}</p>
        </motion.div>
    );
};

export default Skill;
