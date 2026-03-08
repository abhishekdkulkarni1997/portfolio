import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ data, onOpenResume }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Experience', href: '#experience' },
        { name: 'Education', href: '#education' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container container">
                <motion.div
                    className="nav-logo"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <a href="#home">Physio<span>.</span>{data?.name?.split(' ')[0]}</a>
                </motion.div>

                {/* Desktop Nav */}
                <div className="desktop-nav">
                    <a href="#home">Home</a>
                    <a href="#experience">Experience</a>
                    <a href="#education">Education</a>
                    <a href="#skills">Skills</a>
                    <a href="#resume" onClick={(e) => { e.preventDefault(); onOpenResume(); }}>Resume</a>
                    <a href="#contact">Contact</a>
                </div>
                {/* Mobile Menu Toggle */}
                <div className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </div>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <motion.div
                    className="mobile-nav"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                >
                    <ul className="mobile-nav-links">
                        <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                        <li><a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a></li>
                        <li><a href="#education" onClick={() => setIsMenuOpen(false)}>Education</a></li>
                        <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
                        <li><a href="#resume" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); onOpenResume(); }}>Resume</a></li>
                        <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
                    </ul>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
