'use client';

import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: '#1A2B5B' }}
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-56 h-56 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div 
          data-aos="fade-up"
          className="max-w-6xl mx-auto rounded-3xl overflow-hidden backdrop-blur-md"
          style={{
            background: 'rgba(30, 45, 90, 0.7)',
            backdropFilter: 'blur(1px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(100, 150, 255, 0.2)',
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-10 text-white">
              <h2 
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{
                  background: 'linear-gradient(95.65deg, #E04A00 29.81%, #FF915C 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                Let's Talk
              </h2>
              <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
                Reach out to us with your queries, suggestions and applications. We'd be happy to explore the next
                growth opportunity!
              </p>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-orange-500 mt-1 shrink-0 text-xl" />
                <p className="text-gray-200">
                  4074 Ebert Summit Suite 375 Lake Leonardchester
                </p>
              </div>
            </div>

            <div className="p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name *"
                    className={`w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 border-0 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                      errors.name ? 'ring-2 ring-red-500' : ''
                    }`}
                    style={{
                      background: 'rgba(20, 30, 60, 0.8)',
                    }}
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email *"
                    className={`w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 border-0 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                      errors.email ? 'ring-2 ring-red-500' : ''
                    }`}
                    style={{
                      background: 'rgba(20, 30, 60, 0.8)',
                    }}
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number *"
                    className={`w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 border-0 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                      errors.phone ? 'ring-2 ring-red-500' : ''
                    }`}
                    style={{
                      background: 'rgba(20, 30, 60, 0.8)',
                    }}
                  />
                  {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name *"
                    className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 border-0 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    style={{
                      background: 'rgba(20, 30, 60, 0.8)',
                    }}
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message *"
                    rows="5"
                    className={`w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 border-0 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none ${
                      errors.message ? 'ring-2 ring-red-500' : ''
                    }`}
                    style={{
                      background: 'rgba(20, 30, 60, 0.8)',
                    }}
                  ></textarea>
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-white py-3 rounded-lg font-bold text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    background: 'linear-gradient(90deg, #FF6B35 0%, #F7931E 100%)',
                  }}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>

                {submitStatus === 'success' && (
                  <div className="bg-green-500 text-white px-4 py-3 rounded-lg">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="bg-red-500 text-white px-4 py-3 rounded-lg">
                    Something went wrong. Please try again later.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
