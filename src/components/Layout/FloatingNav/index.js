import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaUser, FaCode, FaProjectDiagram, FaEnvelope, FaHome, FaGraduationCap } from 'react-icons/fa';
import './FloatingNav.css';

const FloatingNav = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isHomePage = location.pathname === '/';
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        if (!isHomePage) {
            setActiveSection('');
            return;
        }

        const handleScrollSpy = () => {
            const sections = ['about', 'skills', 'certificates', 'contact'];
            const scrollPosition = window.scrollY + 200;

            if (window.scrollY < 300) {
                setActiveSection('home');
                return;
            }

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScrollSpy);
        return () => window.removeEventListener('scroll', handleScrollSpy);
    }, [isHomePage]);

    const navItems = [
        { name: 'الرئيسية', icon: FaHome, path: '/', type: 'link' },
        { name: 'عنّي', icon: FaUser, path: 'about', type: 'scroll' },
        { name: 'المهارات', icon: FaCode, path: 'skills', type: 'scroll' },
        { name: 'الشهادات', icon: FaGraduationCap, path: 'certificates', type: 'scroll' },
        { name: 'المشاريع', icon: FaProjectDiagram, path: '/projects', type: 'link' },
        { name: 'تواصل معي', icon: FaEnvelope, path: '/#contact', type: 'scroll' },
    ];

    const handleScroll = (targetPath) => {
        // If it's a cross-page link (starts with /)
        if (targetPath.startsWith('/')) {
            if (isHomePage) {
                const id = targetPath.split('#')[1];
                if (id) {
                    const element = document.getElementById(id);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            } else {
                navigate(targetPath);
            }
            return;
        }

        // Standard in-page scroll
        if (!isHomePage) {
            navigate(`/${targetPath.startsWith('#') ? '' : '#'}${targetPath}`);
            return;
        }

        const id = targetPath.replace('#', '');
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
                                className={`dock-item ${activeSection === item.path ? 'active' : ''}`}
                                title={item.name}
                            >
                                <item.icon />
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
                                className={`dock-item ${location.pathname === item.path || (isHomePage && item.path === '/' && activeSection === 'home') ? 'active' : ''}`}
                                title={item.name}
                            >
                                <item.icon />
                            </Link>
                        )}
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default FloatingNav;
