import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
    };

    return (
        <motion.header
            className="minimal-header"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "circOut" }}
        >
            <div className="header-content">
                <div className="brand-side">
                    <span className="brand-name">عبدالسلام الغربي</span>
                    <div className="status-badge">
                        <span className="status-dot"></span>
                        <span className="status-text">متاح للمشاريع</span>
                    </div>
                </div>

                <div className="info-side">
                    <div className="location-info">
                        <span className="label">الموقع</span>
                        <span className="value">صنعاء، اليمن</span>
                    </div>
                    <div className="time-info">
                        <span className="label">الوقت المحلي</span>
                        <span className="value">{formatTime(currentTime)}</span>
                    </div>
                </div>
            </div>
        </motion.header>
    );
};

export default Header;
