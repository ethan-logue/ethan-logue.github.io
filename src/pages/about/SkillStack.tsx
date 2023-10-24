import React from 'react';
import Skill, { SkillProps } from './Skill';
import { SiAdobeillustrator, SiAdobephotoshop, SiAdobepremierepro, SiCss3, SiFilezilla, SiGit, SiHtml5, SiJavascript, SiMysql, SiPhp, SiPython, SiTypescript, SiVisualstudiocode } from 'react-icons/si';
import { FaFigma, FaJava, FaReact } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillStack: React.FC = () => {

    const skills: SkillProps[] = [
        {
            skill: 'CSS3',
            logo: <SiCss3 />,
            fillColor: '#0277BD'
        },
        {
            skill: 'HTML5',
            logo: <SiHtml5 />,
            fillColor: '#E65100'
        },
        {
            skill: 'React',
            logo: <FaReact />,
            fillColor: '#61DBFB'
        },
        {
            skill: 'TypeScript',
            logo: <SiTypescript />,
            fillColor: '#007ACC'
        },
        {
            skill: 'JavaScript',
            logo: <SiJavascript />,
            fillColor: '#F7DF1E'
        },
        {
            skill: 'PHP',
            logo: <SiPhp />,
            fillColor: '#5664A1'
        },
        {
            skill: 'Python',
            logo: <SiPython />,
            fillColor: '#FED655'
        },
        {
            skill: 'Java',
            logo: <FaJava />,
            fillColor: '#E76F00'
        },
        {
            skill: 'SQL',
            logo: <SiMysql />,
            fillColor: '#E48E00'
        },
        {
            skill: 'Premiere',
            logo: <SiAdobepremierepro />,
            fillColor: '#9A9AFF'
        },
        {
            skill: 'Photoshop',
            logo: <SiAdobephotoshop />,
            fillColor: '#2DA9FF'
        },
        {
            skill: 'Illustrator',
            logo: <SiAdobeillustrator />,
            fillColor: '#FF9B00'
        },
        {
            skill: 'VSCode',
            logo: <SiVisualstudiocode />,
            fillColor: '#1C8DD4'
        },
        {
            skill: 'Figma',
            logo: <FaFigma />,
            fillColor: '#FF7362'
        },
        {
            skill: 'Git',
            logo: <SiGit />,
            fillColor: '#F05030'
        },     
        {
            skill: 'FileZilla',
            logo: <SiFilezilla />,
            fillColor: '#C00000'
        },     
    ];

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    const skillContainer = {
        hidden: {
            opacity: 0,
            y: 100,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delayChildren: 0.2,
            },
        },
    };

    return (
        <motion.div
            className='skill-container'
            ref={ref}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            variants={skillContainer}
        >
            {skills.map((skill, index) => (
                <Skill key={index} {...skill} />
            ))}
        </motion.div>
    );
};

export default SkillStack;
