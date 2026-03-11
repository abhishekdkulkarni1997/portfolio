import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Heart } from 'lucide-react';
import './Contact.css';

const Contact = ({ data }) => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <motion.div
                    className="contact-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="contact-content">
                        <h2 className="contact-title">Ready to optimize your performance?</h2>
                        <p className="contact-text">
                            Whether you need sports rehabilitation, injury prevention strategies, or specialized physiotherapy, I'm here to help you achieve your goals.
                        </p>

                        <div className="contact-info-wrap">
                            <a href={`mailto:${data?.email}`} className="contact-item">
                                <div className="icon-wrap"><Mail size={24} /></div>
                                <div className="info-text">
                                    <span>Chat with me</span>
                                    <strong>{data?.email}</strong>
                                </div>
                            </a>

                            <a href={`tel:${data?.contact}`} className="contact-item">
                                <div className="icon-wrap"><Phone size={24} /></div>
                                <div className="info-text">
                                    <span>Give me a ring</span>
                                    <strong>{data?.contact}</strong>
                                </div>
                            </a>

                            <div className="contact-item">
                                <div className="icon-wrap"><MapPin size={24} /></div>
                                <div className="info-text">
                                    <span>Based in</span>
                                    <strong>Bangalore, Karnataka</strong>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="contact-decor-1"></div>
                    <div className="contact-decor-2"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
