import React from 'react'
import {
  Code,
  Database,
  Globe,
  Smartphone,
  Layers,
  Cloud,
  Zap,
  Settings,
} from 'lucide-react'

const Technologies = () => {
  const techCategories = [
    {
      icon: Code,
      title: 'Backend',
      technologies: [
        'Java',
        'Spring Boot',
        'Python',
        'Django',
        'Node.js',
        'RESTful API',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Globe,
      title: 'Frontend',
      technologies: [
        'React',
        'Tailwind CSS',
        'TypeScript',
        'Next.js',
        'HTML/CSS',
        'JavaScript',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Database,
      title: 'Database',
      technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'SQL'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile',
      technologies: ['Kotlin', 'Flutter', 'Android', 'React Native'],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      technologies: ['Docker', 'Docker Compose', 'CI/CD', 'GitHub Actions'],
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Layers,
      title: 'Architecture',
      technologies: ['Microservices', 'REST API', 'WebSocket', 'JWT'],
      color: 'from-teal-500 to-cyan-500',
    },
    {
      icon: Zap,
      title: 'Tools & Others',
      technologies: [
        'Git',
        'Jira',
        'Confluence',
        'Google Maps API',
        'VNPay/MoMo',
      ],
      color: 'from-yellow-500 to-orange-500',
    },
  ]

  return (
    <section
      id="technologies"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="relative max-w-7xl mx-auto z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-6">
            <span className="gradient-text">Technologies I Use</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl glass-card hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] overflow-hidden"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </div>
              
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div
                    className={`relative p-4 rounded-2xl bg-gradient-to-br ${category.color} text-white shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 glow`}
                  >
                    <category.icon size={28} />
                    <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                  </div>
                  <h3 className="text-xl font-bold ml-4 text-slate-800 dark:text-slate-200 group-hover:gradient-text transition-all">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {category.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 rounded-xl bg-slate-100/80 dark:bg-slate-700/80 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:scale-110 hover:shadow-lg transition-all duration-300 border border-slate-200/50 dark:border-slate-600/50 group-hover:border-blue-400/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies

