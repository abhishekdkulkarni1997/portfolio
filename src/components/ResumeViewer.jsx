import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';
import './ResumeViewer.css';

const ResumeViewer = () => {
    return (
        <section id="resume" className="resume-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="title-with-icon">
                        <FileText className="title-icon" size={32} />
                        Resume
                    </div>
                </motion.h2>

                <motion.div
                    className="resume-container"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="resume-header">
                        <h3>Abhishek Kulkarni - Physiotherapist Resume</h3>
                        <a
                            href="/portfolio/resumeabhi.pdf"
                            download="Abhishek_Kulkarni_Resume.pdf"
                            className="btn btn-primary download-btn"
                        >
                            <Download size={18} /> Download PDF
                        </a>
                    </div>

                    <div className="pdf-wrapper">
                        <object
                            data="/portfolio/resumeabhi.pdf"
                            type="application/pdf"
                            width="100%"
                            height="100%"
                            className="pdf-viewer"
                        >
                            <div className="pdf-fallback">
                                <p>It appears you don't have a PDF plugin for this browser.</p>
                                <a href="/portfolio/resumeabhi.pdf" className="btn btn-secondary">
                                    Click here to download the PDF file.
                                </a>
                            </div>
                        </object>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ResumeViewer;
