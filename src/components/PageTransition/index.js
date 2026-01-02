import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const TransitionContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99999; /* Top level */
  pointer-events: none;
  display: flex;
`;

const Shutter = styled(motion.div)`
  height: 100%;
  width: 33.333%;
  background: var(--primary-color);
  transform-origin: top;
`;

const PageTransition = () => {
    return (
        <TransitionContainer>
            <Shutter
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ background: '#0f172a' }} // Dark Slate
            />
            <Shutter
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{ background: '#1e293b' }} // Lighter Slate
            />
            <Shutter
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                style={{ background: '#3b82f6' }} // Primary Blue
            />
        </TransitionContainer>
    );
};

export const SlideIn = () => (
    <TransitionContainer
        initial={{ display: 'flex' }}
        animate={{
            transitionEnd: { display: 'none' }
        }}
    >
        <Shutter
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ background: '#0f172a' }}
        />
        <Shutter
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ background: '#1e293b' }}
        />
        <Shutter
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ background: '#3b82f6' }}
        />
    </TransitionContainer>
);

export default PageTransition;
