import React from 'react'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-300 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* About */}
          <div className="group">
            <h3 className="text-2xl font-extrabold mb-4 text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Nguyễn Hoàng Lê
            </h3>
            <p className="text-slate-400 leading-relaxed">
              A passionate Fullstack Developer from Viet Nam, building smart,
              interactive and AI-powered applications with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-5 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Technologies', href: '#technologies' },
                { name: 'Projects', href: '#projects' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      const element = document.querySelector(link.href)
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className="group relative text-slate-400 hover:text-white transition-colors inline-block"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      {link.name}
                    </span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-5 text-white">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/NguyenHoangLe0701"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 rounded-2xl bg-slate-800/50 backdrop-blur-sm hover:bg-gradient-to-br hover:from-blue-600 hover:to-indigo-600 text-slate-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 border border-slate-700/50 hover:border-blue-500/50"
                aria-label="GitHub"
              >
                <Github size={24} className="relative z-10" />
                <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
              </a>
              <a
                href="https://linkedin.com/in/nguyenhoangle0701"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 rounded-2xl bg-slate-800/50 backdrop-blur-sm hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-700 text-slate-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 border border-slate-700/50 hover:border-blue-500/50"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} className="relative z-10" />
                <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
              </a>
              <a
                href="mailto:nguyenhoangle070105@gmail.com"
                className="group relative p-4 rounded-2xl bg-slate-800/50 backdrop-blur-sm hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 text-slate-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50 border border-slate-700/50 hover:border-purple-500/50"
                aria-label="Email"
              >
                <Mail size={24} className="relative z-10" />
                <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-700/50 pt-8 text-center">
          <p className="text-slate-400 flex items-center justify-center gap-2 flex-wrap">
            <span>© {currentYear} Nguyễn Hoàng Lê.</span>
            <span className="flex items-center gap-1">
              Made with
              <Heart
                size={18}
                className="text-red-500 animate-pulse inline-block"
                fill="currentColor"
              />
            </span>
            <span>using React & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

