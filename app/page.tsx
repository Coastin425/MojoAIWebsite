"use client";

import React, { useState, useEffect, useCallback } from 'react';
/// <reference types="node" />
import Image from 'next/image';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('');
  const [contactLoading, setContactLoading] = useState(false);
  // Waitlist modal state
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistPhone, setWaitlistPhone] = useState('');
  const [waitlistLoading, setWaitlistLoading] = useState(false);
  const [waitlistSuccess, setWaitlistSuccess] = useState(false);
  const [waitlistError, setWaitlistError] = useState<string | null>(null);
  // Toast state
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastType, setToastType] = useState<'success' | 'error'>('success');

  const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL;
  const waitlistEndpoint = apiBase ? `${apiBase.replace(/\/$/, '')}/waitlist` : undefined;
  const contactEndpoint = apiBase ? `${apiBase.replace(/\/$/, '')}/contact` : undefined;

  const resetWaitlist = () => {
    setWaitlistEmail('');
    setWaitlistPhone('');
    setWaitlistLoading(false);
    setWaitlistSuccess(false);
    setWaitlistError(null);
  };

  const handleJoinClick = () => {
    resetWaitlist();
    setWaitlistOpen(true);
  };

  const closeWaitlist = useCallback(() => {
    setWaitlistOpen(false);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeWaitlist();
    };
    if (waitlistOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [waitlistOpen, closeWaitlist]);

  const submitWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    setWaitlistLoading(true);
    setWaitlistError(null);
    setWaitlistSuccess(false);
    
    console.log('🚀 Waitlist form: calling backend...');
    
    try {
      // Basic validation
      if (!waitlistEmail || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(waitlistEmail)) {
        throw new Error('Please enter a valid email address.');
      }
      // Optional phone normalization (simple digits only)
      const phoneNormalized = waitlistPhone.replace(/[^\d+]/g, '');
      if (phoneNormalized && phoneNormalized.length < 8) {
        throw new Error('Phone number seems too short.');
      }

      if (!waitlistEndpoint) {
        throw new Error('Backend unavailable. Try again later.');
      }
      
      console.log(`📤 POST ${waitlistEndpoint}`, { email: waitlistEmail, phone: phoneNormalized });
      
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 10000);
      const res = await fetch(waitlistEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: waitlistEmail, phone: phoneNormalized }),
        signal: controller.signal,
      });
      clearTimeout(timeout);
      
      if (!res.ok) {
        let msg = 'Failed to join waitlist.';
        try { msg = (await res.text()) || msg; } catch {}
        console.error('❌ Waitlist error:', msg);
        throw new Error(msg);
      }
      
      const data = await res.json().catch(() => ({}));
      console.log('✅ Waitlist success:', data);
      
      setWaitlistSuccess(true);
      setWaitlistLoading(false);
      // Show success toast
      setToastType('success');
      setToastMessage("You're on the waitlist! 🎉");
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 5000);
    } catch (err: any) {
      console.error('❌ Waitlist error:', err);
      
      if (err?.name === 'AbortError') {
        setWaitlistError('Request timed out. Please retry.');
      } else {
        setWaitlistError(err.message || 'Unexpected error');
      }
      setWaitlistLoading(false);
      // Error toast (only if backend reachable attempt was made)
      setToastType('error');
      setToastMessage(err?.name === 'AbortError' ? 'Waitlist request timed out.' : (err?.message || 'Waitlist error'));
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 6000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactLoading(true);
    setFormStatus('');
    
    console.log('🚀 Contact form: calling backend...');
    
    try {
      // Validation
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error('All fields are required.');
      }
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) {
        throw new Error('Please enter a valid email address.');
      }
      
      if (!contactEndpoint) {
        throw new Error('Backend unavailable. Try again later.');
      }
      
      console.log(`📤 POST ${contactEndpoint}`, formData);
      
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 10000);
      const res = await fetch(contactEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
        signal: controller.signal,
      });
      clearTimeout(timeout);
      
      if (!res.ok) {
        let msg = 'Failed to send message.';
        try { msg = (await res.text()) || msg; } catch {}
        console.error('❌ Contact form error:', msg);
        throw new Error(msg);
      }
      
      const data = await res.json().catch(() => ({}));
      console.log('✅ Contact form success:', data);
      
      setFormStatus('Thank you! We\'ll be in touch soon.');
      setFormData({ name: '', email: '', message: '' });
      setContactLoading(false);
      
      // Show success toast
      setToastType('success');
      setToastMessage('Message sent successfully! 📧');
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 5000);
    } catch (err: any) {
      console.error('❌ Contact form error:', err);
      
      setContactLoading(false);
      const errorMsg = err?.name === 'AbortError' 
        ? 'Request timed out. Please retry.' 
        : (err?.message || 'Failed to send message.');
      setFormStatus('');
      
      // Show error toast
      setToastType('error');
      setToastMessage(errorMsg);
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 6000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-cyan-900">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Logo Placeholder */}
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-cyan-400 rounded-2xl flex items-center justify-center text-white font-bold text-3xl shadow-2xl animate-glow">
              M
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6">
            AI You Can <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Text</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto font-light">
            MojoAI makes your thoughts actionable. Just send a text.
          </p>

          <button
            onClick={handleJoinClick}
            className="relative bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold py-4 px-10 rounded-full text-lg shadow-2xl hover:shadow-purple-500/50 transition hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300"
            aria-haspopup="dialog"
          >
            <span className="block leading-none tracking-wide">Join the Waitlist</span>
          </button>

        </div>
      </section>

      {/* Waitlist Modal */}
      {waitlistOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
        >
          <div
            className="absolute inset-0 bg-black/60"
            onClick={closeWaitlist}
            aria-hidden="true"
          />
          <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 animate-fade-in">
            <button
              onClick={closeWaitlist}
              className="absolute top-3 right-3 rounded-full px-2 py-1 text-sm text-gray-500 hover:text-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label="Close waitlist form"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold text-mojo-indigo mb-2">Join the Private Beta</h3>
            <p className="text-sm text-gray-600 mb-6">Enter your email{` `}and optional phone number to receive an invite when we expand access.</p>
            <form onSubmit={submitWaitlist} className="space-y-5">
              <div>
                <label htmlFor="waitlist-email" className="block text-sm font-medium text-mojo-indigo mb-1">Email</label>
                <input
                  id="waitlist-email"
                  type="email"
                  required
                  value={waitlistEmail}
                  onChange={e => setWaitlistEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="waitlist-phone" className="block text-sm font-medium text-mojo-indigo mb-1">Phone (optional)</label>
                <input
                  id="waitlist-phone"
                  type="tel"
                  value={waitlistPhone}
                  onChange={e => setWaitlistPhone(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                  placeholder="+1 555 123 4567"
                />
                <p className="mt-1 text-xs text-gray-400">Used for future SMS onboarding via Twilio.</p>
              </div>
              {waitlistError && <p className="text-sm text-red-600">{waitlistError}</p>}
              {waitlistSuccess && <p className="text-sm text-green-600">You're on the list! 🎉</p>}
              <button
                type="submit"
                disabled={waitlistLoading}
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300"
              >
                {waitlistLoading ? 'Submitting...' : (waitlistSuccess ? 'Done' : 'Join Waitlist')}
              </button>
              {!waitlistEndpoint && !waitlistSuccess && (
                <p className="text-xs text-red-600">Backend not configured (set NEXT_PUBLIC_API_BASE_URL). No data sent.</p>
              )}
            </form>
          </div>
        </div>
      )}

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-mojo-indigo mb-8">
            About <span className="gradient-text">MojoAI</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Built by a dedicated Georgia-based team, MojoAI is revolutionizing how you interact with AI. 
            We believe that powerful technology should be accessible, intuitive, and secure.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Currently in private beta, MojoAI leverages Twilio's robust messaging infrastructure and 
            Azure OpenAI's cutting edge language models to bring you a conversational assistant that 
            understands your needs and helps you stay organized.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Simply text your thoughts, and MojoAI transforms them into actionable reminders, organized notes, 
            and intelligent responses — making everyday AI as simple as sending a message to a friend.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-mojo-indigo mb-16">
            Why Choose <span className="gradient-text">MojoAI</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-mojo-indigo mb-3">Text Based AI</h3>
              <p className="text-gray-600 leading-relaxed">
                No apps to download. Just text like you normally would and get intelligent responses instantly.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-mojo-indigo mb-3">Instant Notes & Reminders</h3>
              <p className="text-gray-600 leading-relaxed">
                Transform your thoughts into organized notes and set reminders effortlessly through conversation.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-mojo-indigo mb-3">Privacy First</h3>
              <p className="text-gray-600 leading-relaxed">
                Your data is encrypted and secure. We prioritize your privacy with enterprise grade protection.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-mojo-indigo mb-3">Powered by Azure OpenAI</h3>
              <p className="text-gray-600 leading-relaxed">
                Leveraging cutting edge AI technology for intelligent, context aware conversations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-cyan-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-mojo-indigo mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Have questions? Want to learn more? We'd love to hear from you.
          </p>

          <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10">
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-semibold text-mojo-indigo mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                placeholder="Your name"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-semibold text-mojo-indigo mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-semibold text-mojo-indigo mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Tell us what's on your mind..."
              />
            </div>

            <button
              type="submit"
              disabled={contactLoading}
              className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              {contactLoading ? 'Sending...' : 'Send Message'}
            </button>

            {formStatus && (
              <p className="mt-4 text-center text-green-600 font-medium">{formStatus}</p>
            )}
            
            {!contactEndpoint && (
              <p className="mt-2 text-center text-xs text-red-600">Backend not configured (set NEXT_PUBLIC_API_BASE_URL).</p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-mojo-indigo text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-cyan-400 rounded-lg flex items-center justify-center text-white font-bold mr-3">
                  M
                </div>
                <span className="text-xl font-bold">MojoAI</span>
              </div>
              <p className="text-gray-300 text-sm">
                Making everyday AI accessible through the simplicity of text.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Features</a></li>
                <li><a href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>Atlanta, Georgia</li>
                <li>
                  <a href="mailto:hello@mojoai.work" className="hover:text-cyan-400 transition-colors">
                    hello@mojoai.work
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-indigo-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 MojoAI LLC | Atlanta, Georgia | <a href="mailto:hello@mojoai.work" className="hover:text-cyan-400 transition-colors">hello@mojoai.work</a></p>
          </div>
        </div>
      </footer>
      {/* Toast Notification */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="pointer-events-none fixed inset-0 flex flex-col items-center justify-end p-4 sm:p-6 z-[60]"
      >
        {toastVisible && toastMessage && (
          <div
            role="status"
            className={`pointer-events-auto mb-2 w-full max-w-sm rounded-xl shadow-2xl border backdrop-blur-sm px-5 py-4 animate-fade-in
              ${toastType === 'success' ? 'bg-white/90 border-green-300' : 'bg-white/95 border-red-300'}`}
          >
            <div className="flex items-start gap-3">
              <span className={`mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full text-sm font-semibold
                ${toastType === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}
              >
                {toastType === 'success' ? '✓' : '!'}
              </span>
              <div className="flex-1 text-sm text-gray-800">{toastMessage}</div>
              <button
                onClick={() => setToastVisible(false)}
                className="text-gray-500 hover:text-gray-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
                aria-label="Close notification"
              >
                ✕
              </button>
            </div>
            {toastType === 'success' && (
              <div className="mt-3 h-1 overflow-hidden rounded-full bg-green-100">
                <div className="h-full w-full origin-left animate-[shrink_5s_linear_forwards] bg-green-500" />
              </div>
            )}
            {toastType === 'error' && (
              <div className="mt-3 h-1 overflow-hidden rounded-full bg-red-100">
                <div className="h-full w-full origin-left animate-[shrink_6s_linear_forwards] bg-red-500" />
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
