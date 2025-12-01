import React from 'react'
import { Mail, Github, Linkedin, Download, Sparkles } from 'lucide-react'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-40"></div>

      <div className="relative max-w-5xl mx-auto text-center animate-fade-in z-10">
        {/* Floating Sparkles */}
        <div className="absolute -top-10 left-1/4 animate-bounce-slow opacity-60">
          <Sparkles className="text-blue-400 w-6 h-6" />
        </div>
        <div className="absolute top-20 right-1/4 animate-bounce-slow opacity-60" style={{ animationDelay: '1s' }}>
          <Sparkles className="text-purple-400 w-5 h-5" />
        </div>
        <div className="absolute bottom-20 left-1/3 animate-bounce-slow opacity-60" style={{ animationDelay: '2s' }}>
          <Sparkles className="text-indigo-400 w-4 h-4" />
        </div>

        {/* Avatar/Profile Picture with Glow */}
        <div className="mb-10 flex justify-center">
          <div className="relative group">
            {/* Outer glow ring */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-full opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-300 animate-pulse-glow"></div>
            
            {/* Avatar */}
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 flex items-center justify-center text-white text-5xl sm:text-6xl font-bold shadow-2xl ring-4 ring-white/50 dark:ring-slate-800/50 transform group-hover:scale-110 transition-transform duration-300">
              <span className="relative z-10">N</span>
              {/* Shimmer effect */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
              </div>
            </div>
            
            {/* Flag badge with animation */}
            <div className="absolute -bottom-2 -right-2 text-5xl sm:text-6xl animate-bounce-slow filter drop-shadow-lg">
              🇻🇳
            </div>
          </div>
        </div>

        {/* Greeting with enhanced typography */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 animate-slide-up">
          <span className="inline-block">Hi</span>{' '}
          <span className="inline-block animate-bounce-slow">👋</span>
          <span className="inline-block">,</span>
          <br className="sm:hidden" />
          <span className="inline-block"> I'm </span>
          <span className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-rotate-gradient">
            Nguyễn Hoàng Lê
          </span>
        </h1>

        {/* Title with glass effect */}
        <div className="glass-card rounded-2xl px-8 py-4 mb-6 inline-block animate-slide-up">
          <p className="text-xl sm:text-2xl md:text-3xl text-slate-700 dark:text-slate-300">
            A passionate{' '}
            <span className="font-bold gradient-text">
              Fullstack Developer
            </span>
            <br className="sm:hidden" />
            {' '}from{' '}
            <span className="font-bold gradient-text">
              Viet Nam
            </span>{' '}
            <span className="inline-block animate-bounce-slow">🇻🇳</span>
          </p>
        </div>

        {/* Description with enhanced styling */}
        <p className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-10 max-w-3xl mx-auto animate-slide-up leading-relaxed">
          Building{' '}
          <span className="font-semibold text-blue-600 dark:text-blue-400">smart</span>
          ,{' '}
          <span className="font-semibold text-purple-600 dark:text-purple-400">interactive</span>
          {' '}and{' '}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">AI-powered</span>
          {' '}applications with modern technologies
        </p>

        {/* Social Links with glassmorphism */}
        <div className="flex justify-center space-x-6 mb-10 animate-slide-up">
          <a
            href="mailto:nguyenhoangle070105@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-4 rounded-2xl glass shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 glow-hover"
            aria-label="Email"
          >
            <Mail size={28} className="relative z-10" />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/20 group-hover:to-indigo-500/20 transition-all duration-300"></div>
          </a>
          <a
            href="https://github.com/NguyenHoangLe0701"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-4 rounded-2xl glass shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 glow-hover"
            aria-label="GitHub"
          >
            <Github size={28} className="relative z-10" />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all duration-300"></div>
          </a>
          <a
            href="https://linkedin.com/in/nguyenhoangle0701"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-4 rounded-2xl glass shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 glow-hover"
            aria-label="LinkedIn"
          >
            <Linkedin size={28} className="relative z-10" />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/0 to-blue-500/0 group-hover:from-indigo-500/20 group-hover:to-blue-500/20 transition-all duration-300"></div>
          </a>
        </div>

        {/* CTA Buttons with enhanced design */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-slide-up">
          <a
            href="#projects"
            className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-110 overflow-hidden shine-effect"
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
          <a
            href="#contact"
            className="group relative px-10 py-4 glass-strong text-slate-700 dark:text-slate-300 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 border-2 border-transparent hover:border-blue-500/50"
          >
            <span className="relative z-10">Get In Touch</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

