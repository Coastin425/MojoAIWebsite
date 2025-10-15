'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('Thank you! We\'ll be in touch soon.');
    setFormData({ name: '', email: '', message: '' });
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

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 animate-float">
            AI You Can <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Text</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto font-light">
            MojoAI makes your thoughts actionable — just send a text.
          </p>

          <button className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold py-4 px-10 rounded-full text-lg shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 animate-glow">
            Join the Waitlist
          </button>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-white opacity-75" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

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
            Azure OpenAI's cutting-edge language models to bring you a conversational assistant that 
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
              <h3 className="text-xl font-bold text-mojo-indigo mb-3">Text-Based AI</h3>
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
                Your data is encrypted and secure. We prioritize your privacy with enterprise-grade protection.
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
                Leveraging cutting-edge AI technology for intelligent, context-aware conversations.
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
              className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              Send Message
            </button>

            {formStatus && (
              <p className="mt-4 text-center text-green-600 font-medium">{formStatus}</p>
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
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a></li>
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
    </main>
  );
}
