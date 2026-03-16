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
                                    href="/portfolio/Abresume.pdf"
                                    className="btn btn-primary"
                                    download
                                >
                                    <Download size={18} />
                                    Download Resume
                                </a>
                                <button className="close-btn" onClick={onClose} aria-label="Close">
                                    <X size={28} />
                                </button>
                            </div>
                        </div>

                        <div className="pdf-wrapper">
                            {/* Object is the standard way to embed PDF */}
                            <object 
                                data="/portfolio/Abresume.pdf" 
                                type="application/pdf" 
                                width="100%"
                                height="100%"
                                className="pdf-viewer"
                            >
                                <div className="pdf-fallback">
                                    <FileText size={48} className="fallback-icon" />
                                    <p>Your browser doesn't support built-in PDF viewing.</p>
                                    <a href="/portfolio/Abresume.pdf" className="btn btn-secondary">
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
