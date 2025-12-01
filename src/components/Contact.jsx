import React, { useState } from 'react'
import { Mail, Send, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:nguyenhoangle070105@gmail.com?subject=${subject}&body=${body}`
    
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      id="contact"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-blue-50/50 to-indigo-50/50 dark:from-slate-800/50 dark:via-slate-800/50 dark:to-slate-900/50"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-5xl mx-auto z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-6">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="group relative p-8 rounded-3xl glass-card hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/10 group-hover:to-indigo-500/10 transition-all duration-500 rounded-3xl"></div>
              <div className="relative flex items-center mb-5">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 glow">
                  <Mail size={28} />
                </div>
                <div className="ml-5">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                    Email
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Send me a message
                  </p>
                </div>
              </div>
              <a
                href="mailto:nguyenhoangle070105@gmail.com"
                className="relative text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold break-all transition-colors inline-block"
              >
                nguyenhoangle070105@gmail.com
              </a>
            </div>

            <div className="group relative p-8 rounded-3xl glass-card hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500 rounded-3xl"></div>
              <h3 className="relative text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6">
                Quick Links
              </h3>
              <div className="relative space-y-4">
                <a
                  href="https://github.com/NguyenHoangLe0701"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-xl glass-card hover:shadow-lg hover:scale-105 transition-all duration-300 text-blue-600 dark:text-blue-400 font-semibold"
                >
                  → GitHub Profile
                </a>
                <a
                  href="#projects"
                  className="block p-4 rounded-xl glass-card hover:shadow-lg hover:scale-105 transition-all duration-300 text-purple-600 dark:text-purple-400 font-semibold"
                >
                  → View My Projects
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="group relative p-8 rounded-3xl glass-card hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
            {/* Shine effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </div>
            
            <form onSubmit={handleSubmit} className="relative space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 dark:border-slate-600 bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm text-slate-900 dark:text-slate-100 focus:ring-4 focus:ring-blue-500/50 focus:border-blue-500 transition-all shadow-sm hover:shadow-md"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 dark:border-slate-600 bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm text-slate-900 dark:text-slate-100 focus:ring-4 focus:ring-blue-500/50 focus:border-blue-500 transition-all shadow-sm hover:shadow-md"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 dark:border-slate-600 bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm text-slate-900 dark:text-slate-100 focus:ring-4 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none shadow-sm hover:shadow-md"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className={`w-full px-8 py-4 rounded-xl font-bold text-lg text-white transition-all duration-300 transform hover:scale-105 overflow-hidden relative group ${
                  isSubmitted
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700'
                } shadow-2xl hover:shadow-blue-500/50 flex items-center justify-center space-x-2 shine-effect`}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle size={24} className="relative z-10" />
                    <span className="relative z-10">Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send size={24} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                    <span className="relative z-10">Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

