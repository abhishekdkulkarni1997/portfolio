import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ArrowRight } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import heroImage from '../assets/hero-image.png';
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
                <div className="hero-content-wrapper">
                    {/* Left side: Text Content */}
                    <motion.div
                        className="hero-text-content"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="hero-badge">
                            <Activity size={18} className="badge-icon" />
                            <span>Sports Rehabilitation Specialist</span>
                        </div>

                        <h1 className="hero-title">
                            <TypeAnimation
                                sequence={[
                                    `Hi, I'm ${personalInfo.name}`,
                                    1000,
                                ]}
                                wrapper="span"
                                cursor={true}
                                repeat={0}
                                className="highlight"
                            />
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

                    {/* Right side: Image Content */}
                    <motion.div
                        className="hero-image-wrapper"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="hero-image-container">
                            <div className="image-glow"></div>
                            <img
                                src={heroImage}
                                alt="Futuristic Physiotherapy"
                                className="hero-profile-img floating-interactive"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
