import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import './Experience.css';

const Experience = ({ data, currentRole }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="experience" className="bg-light">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Professional Experience
                </motion.h2>

                <motion.div
                    className="experience-content"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Current Role Highlight */}
                    {currentRole && (
                        <motion.div className="experience-card current-role" variants={itemVariants}>
                            <div className="card-header">
                                <div className="role-icon-wrapper current">
                                    <Briefcase size={24} color="#fff" />
                                </div>
                                <div className="role-header-text">
                                    <h3>{currentRole.title}</h3>
                                    <div className="role-meta">
                                        <span className="meta-item"><Calendar size={16} /> {currentRole.duration}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="current-badge">Current Role</div>
                        </motion.div>
                    )}

                    {/* Past Experiences Timeline */}
                    <div className="timeline">
                        {data?.map((exp, index) => (
                            <motion.div key={index} className="timeline-item" variants={itemVariants}>
                                <div className="timeline-dot"></div>
                                <div className="experience-card">
                                    <div className="card-header">
                                        <div className="role-icon-wrapper">
                                            <Briefcase size={24} color="var(--primary-color)" />
                                        </div>
                                        <div className="role-header-text">
                                            <h3>{exp.title}</h3>
                                            <div className="role-meta">
                                                <span className="meta-item"><Calendar size={16} /> {exp.duration}</span>
                                                <span className="meta-item"><MapPin size={16} /> {exp.location}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-body">
                                        <h4 className="org-title">Organizations / Venues:</h4>
                                        <ul className="org-list">
                                            {exp.organizations?.map((org, idx) => (
                                                <li key={idx}>{org}</li>
                                            ))}
                                        </ul>

                                        {exp.responsibilities && exp.responsibilities.length > 0 && (
                                            <>
                                                <h4 className="resp-title">Key Responsibilities:</h4>
                                                <ul className="resp-list">
                                                    {exp.responsibilities.map((resp, idx) => (
                                                        <li key={idx}>
                                                            <CheckCircle size={16} className="check-icon" />
                                                            <span>{resp}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
