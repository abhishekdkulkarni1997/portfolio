import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { db } from '../firebase/config';
import './Testimonials.css';

const Testimonials = ({ fallbackTestimonials }) => {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                // Fetch approved testimonials, ordered by newest first
                const q = query(
                    collection(db, 'testimonials'),
                    // where('approved', '==', true), // Optional: uncomment if implementing a moderation panel later
                    orderBy('createdAt', 'desc')
                );

                const querySnapshot = await getDocs(q);
                const fetchedData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                // Fallback to dummy data if DB is completely empty (e.g. initial setup)
                if (fetchedData.length > 0) {
                    setTestimonials(fetchedData);
                } else if (fallbackTestimonials && fallbackTestimonials.length > 0) {
                    setTestimonials(fallbackTestimonials);
                }
            } catch (error) {
                console.error("Error fetching testimonials from Firebase:", error);
                // On error, fall back to hardcoded data
                if (fallbackTestimonials && fallbackTestimonials.length > 0) {
                    setTestimonials(fallbackTestimonials);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchTestimonials();
    }, [fallbackTestimonials]);

    if (loading || testimonials.length === 0) return null;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="testimonials" className="testimonials-section bg-light">
            <div className="container">
                <motion.h2
                    className="section-title text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    What Clients Say
                </motion.h2>

                <div className="marquee-container">
                    <div className="marquee-track">
                        {/* Render twice for continuous loop effect */}
                        {[...testimonials, ...testimonials].map((testimonial, index) => (
                            <div key={index} className="testimonial-card">
                                <Quote className="quote-icon" size={40} />

                                <div className="stars-container">
                                    {[...Array(testimonial.rating || 5)].map((_, i) => (
                                        <Star key={i} size={20} className="star-icon filled" />
                                    ))}
                                </div>

                                <p className="testimonial-content">"{testimonial.content}"</p>

                                <div className="testimonial-author">
                                    <div className="author-avatar">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div className="author-info">
                                        <h4>{testimonial.name}</h4>
                                        <span>{testimonial.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
