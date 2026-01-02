import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FaUser, FaCode, FaProjectDiagram, FaEnvelope, FaHome } from 'react-icons/fa';
import './FloatingNav.css';

const FloatingNav = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const navItems = [
        { name: 'الرئيسية', icon: FaHome, path: '/', type: 'link' },
        { name: 'عنّي', icon: FaUser, path: 'about', type: 'scroll' },
        { name: 'المهارات', icon: FaCode, path: 'skills', type: 'scroll' },
        { name: 'المشاريع', icon: FaProjectDiagram, path: '/projects', type: 'link' },
        { name: 'تواصل معي', icon: FaEnvelope, path: '/#contact', type: 'scroll' },
    ];

    const handleScroll = (id) => {
        if (!isHomePage) {
            window.location.href = `/#${id}`;
            return;
        }
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.div
            className="floating-nav-container"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "circOut" }}
        >
            <div className="dock">
                {navItems.map((item, index) => (
                    <div key={index} className="nav-item-wrapper">
                        {item.type === 'scroll' ? (
                            <button
                                onClick={() => handleScroll(item.path)}
                                className="dock-item"
                                title={item.name}
                            >
                                <item.icon />
                                <span className="dock-tooltip">{item.name}</span>
                            </button>
                        ) : (
                            <Link
                                to={item.path}
                                onClick={(e) => {
                                    if (item.path === '/#contact') {
                                        if (isHomePage) {
                                            e.preventDefault();
                                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                        } else {
                                            navigate('/#contact');
                                        }
                                        return;
                                    }

                                    if (item.path === '/' && isHomePage) {
                                        e.preventDefault();
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }
                                }}
                                className={`dock-item ${location.pathname === item.path ? 'active' : ''}`}
                                title={item.name}
                            >
                                <item.icon />
                                <span className="dock-tooltip">{item.name}</span>
                            </Link>
                        )}
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default FloatingNav;
