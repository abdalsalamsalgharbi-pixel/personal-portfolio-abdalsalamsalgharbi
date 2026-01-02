import React from 'react';
import { motion } from 'framer-motion';
import { SlideIn } from '../PageTransition';

const animations = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
};

const AnimatedPage = ({ children }) => {
    return (
        <>
            <SlideIn />
            <motion.div
                variants={animations}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ width: '100%', position: 'absolute' }}
            >
                {children}
            </motion.div>
        </>
    );
};

export default AnimatedPage;
