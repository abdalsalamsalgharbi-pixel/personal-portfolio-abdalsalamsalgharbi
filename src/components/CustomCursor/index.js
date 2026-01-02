import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import styled from 'styled-components';

const CursorDot = styled(motion.div)`
  width: 8px;
  height: 8px;
  background-color: var(--primary-color, #3b82f6);
  border-radius: 50%;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 10000;
  box-shadow: 0 0 10px var(--primary-color, #3b82f6);
`;

const CursorRing = styled(motion.div)`
  width: 40px;
  height: 40px;
  border: 1.5px solid var(--primary-color, #3b82f6);
  border-radius: 50%;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999;
  transition: border-color 0.3s ease;
`;

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Mouse position state
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Smooth springs for the ring
    const springConfig = { damping: 25, stiffness: 250 };
    const ringX = useSpring(mouseX, springConfig);
    const ringY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        const moveCursor = (e) => {
            mouseX.set(e.clientX - 4); // Center dot
            mouseY.set(e.clientY - 4);
        };

        const handleHoverStart = () => setIsHovering(true);
        const handleHoverEnd = () => setIsHovering(false);

        window.addEventListener('mousemove', moveCursor);

        // Add listeners to all clickable elements
        const updateListeners = () => {
            const interactiveElements = document.querySelectorAll('a, button, .clickable, .experience-card, .skill-card, .project-card');
            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', handleHoverStart);
                el.addEventListener('mouseleave', handleHoverEnd);
            });
            return interactiveElements;
        };

        const interactiveElements = updateListeners();

        return () => {
            window.removeEventListener('resize', checkMobile);
            window.removeEventListener('mousemove', moveCursor);
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleHoverStart);
                el.removeEventListener('mouseleave', handleHoverEnd);
            });
        };
    }, [mouseX, mouseY]);

    if (isMobile) return null;

    return (
        <>
            <CursorDot style={{ x: mouseX, y: mouseY }} />
            <CursorRing
                style={{
                    x: ringX,
                    y: ringY,
                    translateX: -16,
                    translateY: -16
                }}
                animate={{
                    scale: isHovering ? 1.4 : 1,
                    backgroundColor: isHovering ? 'rgba(59, 130, 246, 0.15)' : 'transparent',
                    borderColor: isHovering ? 'rgba(59, 130, 246, 0.5)' : '#3b82f6',
                    borderWidth: isHovering ? '1px' : '1.5px'
                }}
            />
        </>
    );
};

export default CustomCursor;
