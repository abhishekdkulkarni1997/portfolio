import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, CheckCircle2 } from 'lucide-react';
import './Skills.css';

const Skills = ({ skills, certifications }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
    };

    const certVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
    };

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Expertise & Certifications
                </motion.h2>

                <div className="skills-container">
                    {/* Core Skills */}
                    <div className="skills-block">
                        <h3 className="block-title"><Star className="block-icon" /> Core Competencies</h3>
                        <motion.div
                            className="skills-grid"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            {skills?.map((skill, index) => (
                                <motion.div key={index} className="skill-pill" variants={itemVariants}>
                                    <span className="skill-text">{skill}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Certifications */}
                    <div className="cert-block">
                        <h3 className="block-title"><Award className="block-icon" /> Certifications & Training</h3>
                        <motion.div
                            className="cert-list"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            {certifications?.map((cert, index) => (
                                <motion.div key={index} className="cert-item" variants={certVariants}>
                                    <CheckCircle2 className="cert-check" size={20} />
                                    <span>{cert}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
