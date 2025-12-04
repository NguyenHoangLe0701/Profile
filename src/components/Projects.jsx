import React from 'react'
import {
  Video,
  Apple,
  Heart,
  Bike,
  Gamepad2,
  Zap,
  Users,
  Calendar,
  TrendingUp,
} from 'lucide-react'

const Projects = () => {
  const featuredProjects = [
    {
      icon: Video,
      title: 'Simple-WebRTC',
      description:
        'Chat & FaceTime & Code Thông Minh - Real-time chat, video call và code editor với AI Assistant cho lập trình viên',
      technologies: ['React', 'Spring Boot', 'WebSocket', 'WebRTC', 'AI Assistant', 'Tailwind CSS'],
      color: 'from-blue-500 to-cyan-500',
      status: 'completed',
    },
    {
      icon: Apple,
      title: 'NutriCook',
      description:
        'Hệ thống quản lý dinh dưỡng toàn diện với AI tính calories tự động, công thức nấu ăn và theo dõi tập thể dục',
      technologies: ['Kotlin', 'Spring Boot', 'Firebase', 'Google Gemini AI', 'Cloudinary'],
      color: 'from-green-500 to-emerald-500',
      status: 'completed',
    },
    {
      icon: Heart,
      title: 'Healthmate-Care-System',
      description:
        'Hệ thống quản lý & chăm sóc sức khỏe sinh sản với đặt khám online, hỏi đáp bác sĩ và chatbot tư vấn 24/7',
      technologies: ['Spring Boot', 'MySQL', 'Docker', 'Chatbot', 'WebSocket'],
      color: 'from-red-500 to-pink-500',
      status: 'completed',
    },
    {
      icon: Bike,
      title: 'DjangoWebBikeRental',
      description:
        'Hệ thống quản lý cho thuê xe đạp trực tuyến với đầy đủ tính năng: đặt xe, thanh toán VNPay/MoMo, RESTful API, dashboard admin và calendar booking',
      technologies: ['Django 5.1', 'Django REST Framework', 'PostgreSQL', 'Redis', 'VNPay', 'Docker', 'JWT', 'Chart.js'],
      color: 'from-orange-500 to-yellow-500',
      status: 'completed',
    },
    {
      icon: Gamepad2,
      title: 'PickleCoach-AI',
      description:
        'Nền tảng học Pickleball với AI phân tích kỹ thuật, video call với huấn luyện viên và theo dõi tiến độ học tập',
      technologies: ['React', 'Spring Boot', 'WebRTC', 'OpenCV', 'TensorFlow', 'Python'],
      color: 'from-teal-500 to-cyan-500',
      status: 'completed',
    },
  ]

  const evChargingProject = {
    icon: Zap,
    title: 'EV-Charging-Station-Management-System',
    description: 'Hệ Thống Quản Lý Trạm Sạc Xe Điện - Kiến trúc microservices với hỗ trợ đa mô hình kinh doanh B2B và B2C',
    highlights: [
      {
        icon: Users,
        text: 'Đa mô hình: B2C (Tài xế, Khách hàng) & B2B (Chủ trạm, Nhà đầu tư)',
      },
      {
        icon: Calendar,
        text: 'Lộ trình phát triển: MVP (8 tuần) → B2B (12-16 tuần) → AI (16-20 tuần)',
      },
      {
        icon: TrendingUp,
        text: 'Tích hợp: VNPay/MoMo, Google Maps API, AI dự báo nhu cầu',
      },
    ],
    technologies: [
      'Java 17+',
      'Spring Boot 3.0+',
      'React 18',
      'Microservices',
      'Docker',
      'MySQL',
      'Redis',
      'Kubernetes (tương lai)',
    ],
    color: 'from-yellow-500 via-orange-500 to-red-500',
    status: 'in-progress',
  }

  return (
    <section
      id="projects"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-purple-50/50 to-indigo-50/50 dark:from-slate-800/50 dark:via-slate-800/50 dark:to-slate-900/50"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Showcasing my work and passion for building innovative solutions
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl glass-card hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] overflow-hidden"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </div>
              
              <div className="relative">
                <div className="flex items-start mb-5">
                  <div
                    className={`relative p-4 rounded-2xl bg-gradient-to-br ${project.color} text-white shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 glow`}
                  >
                    <project.icon size={28} />
                    <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl"></div>
                  </div>
                  <div className="flex-1 ml-4">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2 group-hover:gradient-text transition-all">
                      {project.title}
                    </h3>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                        project.status === 'completed'
                          ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white shadow-lg'
                          : 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg'
                      }`}
                    >
                      {project.status === 'completed' ? '✓ Completed' : '🚀 In Progress'}
                    </span>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1.5 rounded-lg bg-slate-100/80 dark:bg-slate-700/80 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:scale-110 transition-transform border border-slate-200/50 dark:border-slate-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* EV Charging Project - Featured Large Card */}
        <div className="max-w-6xl mx-auto">
          <div className="group relative p-10 rounded-3xl glass-strong shadow-2xl border-2 border-transparent hover:border-gradient-to-r hover:from-yellow-500 hover:via-orange-500 hover:to-red-500 overflow-hidden">
            {/* Animated gradient border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-400/20 via-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"></div>
            
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-start md:items-center mb-8">
                <div className={`relative p-6 rounded-3xl bg-gradient-to-br ${evChargingProject.color} text-white mb-6 md:mb-0 md:mr-8 shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 glow`}>
                  <evChargingProject.icon size={40} />
                  <div className="absolute inset-0 bg-white/30 rounded-3xl blur-2xl animate-pulse-glow"></div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <h3 className="text-3xl md:text-4xl font-extrabold gradient-text">
                      {evChargingProject.title}
                    </h3>
                    <span className="px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-bold shadow-lg animate-pulse-glow">
                      🚀 In Development
                    </span>
                  </div>
                  <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                    {evChargingProject.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {evChargingProject.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="group flex items-start space-x-4 p-5 rounded-2xl glass-card hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg group-hover:scale-110 transition-transform">
                      <highlight.icon size={24} />
                    </div>
                    <span className="text-slate-700 dark:text-slate-300 font-medium flex-1 pt-1">
                      {highlight.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mb-8">
                <h4 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-5 flex items-center gap-2">
                  <span className="text-3xl">🛠️</span> Technologies
                </h4>
                <div className="flex flex-wrap gap-3">
                  {evChargingProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-xl glass-card text-slate-700 dark:text-slate-300 text-sm font-semibold shadow-md hover:scale-110 hover:shadow-xl transition-all duration-300 border border-slate-200/50 dark:border-slate-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects

