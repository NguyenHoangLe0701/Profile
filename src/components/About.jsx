import React from 'react'
import { Code2, MessageCircle, Target, Mail, Sprout } from 'lucide-react'

const About = () => {
  const aboutPoints = [
    {
      icon: Sprout,
      title: 'Currently Learning',
      description: 'Fullstack Development',
    },
    {
      icon: MessageCircle,
      title: 'Ask Me About',
      description: 'Spring Boot, React, Tailwind, Django, Kotlin, Flutter',
    },
    {
      icon: Target,
      title: 'Goal',
      description: 'Build smart, interactive and AI-powered apps',
    },
    {
      icon: Mail,
      title: 'Contact',
      description: 'nguyenhoangle070105@gmail.com',
    },
  ]

  return (
    <section
      id="about"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-blue-50/50 to-indigo-50/50 dark:from-slate-800/50 dark:via-slate-800/50 dark:to-slate-900/50"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-6xl mx-auto z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Passionate developer crafting exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aboutPoints.map((point, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl glass-card hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </div>
              
              <div className="relative flex items-start space-x-5">
                <div className="flex-shrink-0 p-4 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 glow">
                  <point.icon size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
              
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

