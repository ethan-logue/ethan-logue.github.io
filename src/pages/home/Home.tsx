import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
// import useCursorHandlers from '../../components/cursor/useCursorHandlers';
import CodeWindow from '../../components/CodeWindow';
import codeData from './homeCodeString.json';
import FlowerScene from './FlowerScene';
import './Home.css';

const Home: React.FC = () => {
    gsap.registerPlugin(useGSAP);
    // const cursorHandlers = useCursorHandlers();
    const codeWindowRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const element = codeWindowRef.current;
            if (!element) return;
            
            const rect = element.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const tiltX = ((y / rect.height) - 0.5) * -3;
            const tiltY = ((x / rect.width) - 0.5) * 3;

            gsap.to(element, {
                rotationX: tiltX,
                rotationY: tiltY,
                transformPerspective: 500,
                duration: 1,
                ease: 'power2.out',
            });
        };

        const handleMouseLeave = () => {
            const element = codeWindowRef.current;
            if (!element) return;

            gsap.to(element, {
                rotationX: 0,
                rotationY: 0,
                duration: 1,
                ease: 'power2.out',
            });
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div className='home-container'>
            {/* <button className='test-btn' {...cursorHandlers}>Hover over me!!</button> */}
            <div className='home-content'>
                <div ref={codeWindowRef} className='home-code-container'>
                    <CodeWindow codeString={codeData.codeString} classes='home-code' />
                </div>
                <div className='home-three-container'>
                    {/* <FlowerScene /> */}
                </div>
            </div>
        </div>
    );
};

export default Home;
