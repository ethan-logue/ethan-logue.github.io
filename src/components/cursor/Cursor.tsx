import { useCursor } from './useCursor';
import { useEffect, useRef, useState } from 'react';
import './Cursor.css';

const Cursor = () => {
    const { cursor } = useCursor();
    const svgRef = useRef<SVGSVGElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            const isSmallScreen = window.innerWidth <= 768;
            setIsMobile(isTouchDevice && isSmallScreen);
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    useEffect(() => {
        if (isMobile) return;

        const updatePosition = (event: MouseEvent) => {
            if (svgRef.current) {
                svgRef.current.style.left = `${event.clientX}px`;
                svgRef.current.style.top = `${event.clientY}px`;
            }
        };

        const handleMouseEnter = () => {
            if (svgRef.current) {
                svgRef.current.style.display = 'block';
            }
        };

        const handleMouseLeave = () => {
            if (svgRef.current) {
                svgRef.current.style.display = 'none';
            }
        };

        const options = { capture: false, passive: true };

        document.addEventListener('mousemove', updatePosition, options);
        document.addEventListener('mouseenter', updatePosition, options);
        document.addEventListener('mouseenter', handleMouseEnter, options);
        document.addEventListener('mouseleave', handleMouseLeave, options);

        return () => {
            document.removeEventListener('mousemove', updatePosition, options);
            document.removeEventListener('mouseenter', updatePosition, options);
            document.removeEventListener('mouseenter', handleMouseEnter, options);
            document.removeEventListener('mouseleave', handleMouseLeave, options);
        };
    }, [isMobile]);

    // Disable cursor on mobile
    if (isMobile) return null; 
  
    return (
        <div className='cursor-container'>
            <svg
                ref={svgRef}
                className={`cursor ${cursor.hover ? 'hover' : ''}`}
                width='50'
                height='50'
                viewBox='0 0 50 50'
            >
                <circle
                    className='cursor-circle'
                    cx='25'
                    cy='25'
                    r='5'
                />
            </svg>
        </div>
    );
};

export default Cursor;
