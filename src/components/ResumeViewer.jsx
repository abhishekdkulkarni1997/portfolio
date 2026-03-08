import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, X } from 'lucide-react';
import './ResumeViewer.css';

const ResumeViewer = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="resume-modal-overlay">
                    <motion.div
                        className="resume-modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />
                    <motion.div
                        className="resume-modal-content"
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 50 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    >
                        <div className="resume-modal-header">
                            <div className="resume-title-group">
                                <FileText className="title-icon" size={24} />
                                <h3>Abhishek Kulkarni - Resume</h3>
                            </div>
                            <div className="resume-actions">
                                <a
                                    href="/portfolio/resumeabhi.pdf"
                                    download="Abhishek_Kulkarni_Resume.pdf"
                                    className="btn btn-primary download-btn"
                                >
                                    <Download size={18} /> Download
                                </a>
                                <button className="close-btn" onClick={onClose} aria-label="Close">
                                    <X size={28} />
                                </button>
                            </div>
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
            )}
        </AnimatePresence>
    );
};

export default ResumeViewer;
