import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, Database } from 'lucide-react';
import './Education.css';

const Education = ({ education, projects }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95, y: 20 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="education" className="education-section">
            <div className="container">

                <div className="education-grid">
                    {/* Education Column */}
                    <div className="edu-col">
                        <motion.h2
                            className="section-title sub-title"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <GraduationCap className="title-icon" /> Education
                        </motion.h2>

                        <motion.div
                            className="cards-container"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            {education?.map((edu, index) => (
                                <motion.div key={index} className="edu-card" variants={itemVariants}>
                                    <div className="card-bg-icon">
                                        <GraduationCap size={120} />
                                    </div>
                                    <h3>{edu.degree}</h3>
                                    <h4 className="institution">{edu.institution}</h4>

                                    <div className="edu-meta">
                                        {edu.duration && <span className="meta-tag"><Calendar size={14} /> {edu.duration}</span>}
                                        {edu.location && <span className="meta-tag"><MapPin size={14} /> {edu.location}</span>}
                                        {edu.score && <span className="meta-tag highlight-tag"><Award size={14} /> {edu.score}</span>}
                                    </div>

                                    {edu.details && (
                                        <p className="edu-details">{edu.details}</p>
                                    )}
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Projects Column */}
                    <div className="proj-col">
                        <motion.h2
                            className="section-title sub-title"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Database className="title-icon" /> Clinical Projects & Internships
                        </motion.h2>

                        <motion.div
                            className="cards-container"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            {projects?.map((proj, index) => (
                                <motion.div key={index} className="proj-card" variants={itemVariants}>
                                    <div className="proj-header">
                                        <h3>{proj.title}</h3>
                                        <span className="proj-duration">{proj.duration}</span>
                                    </div>
                                    {Array.isArray(proj.details) ? (
                                        <ul className="proj-details-list" style={{ paddingLeft: '20px', margin: '10px 0', color: 'var(--text-color)' }}>
                                            {proj.details.map((detail, idx) => (
                                                <li key={idx} style={{ marginBottom: '8px' }}>{detail}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="proj-details">{proj.details}</p>
                                    )}
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Education;
