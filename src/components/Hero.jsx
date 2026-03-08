import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = ({ data }) => {
    const { personalInfo } = data;

    return (
        <section id="home" className="hero">
            <div className="hero-background">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
            </div>

            <div className="container hero-container">
                <div className="hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="hero-badge">
                            <Activity size={18} className="badge-icon" />
                            <span>Sports Rehabilitation Specialist</span>
                        </div>

                        <h1 className="hero-title">
                            Hi, I'm <span className="highlight">{personalInfo.name}</span>
                        </h1>

                        <h2 className="hero-subtitle">
                            {personalInfo.title}
                        </h2>

                        <p className="hero-description">
                            Dedicated to optimizing athletic performance, preventing injuries, and facilitating return to play through evidence-based, sports-specific physiotherapy.
                        </p>

                        <div className="hero-actions">
                            <a href="#contact" className="btn btn-primary">
                                Contact Me <ArrowRight size={20} />
                            </a>
                            <a href="#experience" className="btn btn-secondary">
                                View Experience
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
