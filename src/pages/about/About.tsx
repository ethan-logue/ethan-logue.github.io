import React from 'react';
import './About.css';
import Page from '../../components/Page';
import SkillStack from './SkillStack';

const About: React.FC = () => {
    return (
        <Page page={'about'} >
            <h1 className='page-title'>About Me</h1>
            <p className='about-bio'>Hello there! I'm a third-year web and mobile undergraduate at RIT.</p>
            <p className='about-bio'>I'm currently seeking summer co-op opportunities that allow me to apply my passion for front-end development. While I initially pursued a Computing and Information Technologies major, my journey led me to realize my true passion lies in creating seamless user experiences through web development. Blending my tech affinity with a creative edge, transitioning to Web & Mobile Computing was a natural fit. I'm committed to perfecting front-end development to create immersive, comfortable, and intuitive user interfaces.</p>

            <SkillStack />
        </Page>
    );
};

export default About;
