import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Star, AlertCircle, CheckCircle2 } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';
import './TestimonialForm.css';

const TestimonialForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        role: '',
        content: '',
        rating: 5
    });

    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const handleRatingClick = (rating) => {
        setFormData({ ...formData, rating });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.content) {
            setErrorMessage('Name and review content are required.');
            setStatus('error');
            return;
        }

        setStatus('loading');
        setErrorMessage('');

        try {
            await addDoc(collection(db, 'testimonials'), {
                name: formData.name,
                role: formData.role || 'Client',
                content: formData.content,
                rating: formData.rating,
                approved: true, // Auto-approve for portfolio demo purposes
                createdAt: serverTimestamp()
            });

            setStatus('success');
            setFormData({ name: '', role: '', content: '', rating: 5 });

            // Reset success message after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('Error adding testimonial: ', error);
            setStatus('error');
            setErrorMessage('Could not submit your review. Please try again later.');
        }
    };

    return (
        <section id="leave-review" className="testimonial-form-section bg-light">
            <div className="container form-container text-center">
                <motion.div
                    className="form-wrapper"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">Leave a Review</h2>
                    <p className="form-subtitle">Worked with me? I'd love to hear your feedback!</p>

                    <form onSubmit={handleSubmit} className="testimonial-form">

                        <div className="rating-selector">
                            <span>Rating:</span>
                            <div className="stars">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                        key={star}
                                        size={28}
                                        onClick={() => handleRatingClick(star)}
                                        className={`star-select ${star <= formData.rating ? 'filled' : ''}`}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="input-group-row">
                            <div className="input-group">
                                <label htmlFor="name">Your Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="e.g. Rahul M."
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="role">Your Role</label>
                                <input
                                    type="text"
                                    id="role"
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    placeholder="e.g. Professional Athlete"
                                />
                            </div>
                        </div>

                        <div className="input-group">
                            <label htmlFor="content">Your Review *</label>
                            <textarea
                                id="content"
                                name="content"
                                rows="4"
                                value={formData.content}
                                onChange={handleChange}
                                placeholder="Share your experience working with me..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary submit-review-btn"
                            disabled={status === 'loading'}
                        >
                            {status === 'loading' ? (
                                <span>Submitting...</span>
                            ) : (
                                <>Submit Review <Send size={18} /></>
                            )}
                        </button>
                    </form>

                    <AnimatePresence>
                        {status === 'success' && (
                            <motion.div
                                className="status-message success"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                            >
                                <CheckCircle2 size={24} />
                                <span>Thank you! Your review has been submitted successfully and added to the rotating carousel.</span>
                            </motion.div>
                        )}

                        {status === 'error' && (
                            <motion.div
                                className="status-message error"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                            >
                                <AlertCircle size={24} />
                                <span>{errorMessage}</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default TestimonialForm;
