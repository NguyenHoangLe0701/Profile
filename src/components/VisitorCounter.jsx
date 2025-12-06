import React, { useState, useEffect } from 'react'
import { Eye, Users } from 'lucide-react'

const VisitorCounter = () => {
  const [visitCount, setVisitCount] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkAndCountVisitors = async () => {
      try {
        // Lấy IP address của người truy cập hiện tại
        const ipResponse = await fetch('https://api.ipify.org?format=json')
        const ipData = await ipResponse.json()
        const currentIP = ipData.ip

        // Lấy IP của admin (máy của bạn)
        const adminIP = localStorage.getItem('adminIP')
        
        // Kiểm tra nếu IP hiện tại là IP của admin
        if (adminIP && currentIP === adminIP) {
          setIsLoading(false)
          return // Không đếm lượt truy cập của admin
        }

        // Kiểm tra xem đã đếm lượt truy cập hôm nay chưa (dựa trên IP)
        const today = new Date().toDateString()
        const lastVisitIP = localStorage.getItem('lastVisitIP')
        const lastVisitDate = localStorage.getItem('lastVisitDate')

        // Tạo unique visitor ID nếu chưa có
        let visitorId = localStorage.getItem('visitorId')
        if (!visitorId) {
          visitorId = `visitor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
          localStorage.setItem('visitorId', visitorId)
        }

        // Chỉ đếm nếu là IP mới hoặc chưa đếm hôm nay
        const shouldCount = lastVisitIP !== currentIP || lastVisitDate !== today

        // Sử dụng CountAPI (free service) để đếm visitors
        if (shouldCount) {
          try {
            // Gọi API để tăng counter
            await fetch('https://api.countapi.xyz/hit/profile-nguyenhoangle.vercel.app/visits', {
              method: 'GET',
            })
            
            // Lưu thông tin visit
            localStorage.setItem('lastVisitIP', currentIP)
            localStorage.setItem('lastVisitDate', today)
          } catch (error) {
            console.error('Error incrementing counter:', error)
          }
        }

        // Lấy tổng số visitors
        try {
          const response = await fetch('https://api.countapi.xyz/get/profile-nguyenhoangle.vercel.app/visits')
          const data = await response.json()
          
          if (data.value !== undefined) {
            setVisitCount(data.value)
          }
        } catch (error) {
          console.error('Error fetching visitor count:', error)
          // Fallback: sử dụng localStorage counter
          const localCount = parseInt(localStorage.getItem('visitCount') || '0', 10)
          setVisitCount(localCount)
        }
      } catch (error) {
        console.error('Error getting IP:', error)
        // Nếu không lấy được IP, sử dụng fallback với admin flag
        const isAdmin = localStorage.getItem('isAdmin') === 'true'
        if (isAdmin) {
          setIsLoading(false)
          return
        }
        
        // Fallback counter
        const localCount = parseInt(localStorage.getItem('visitCount') || '1', 10)
        setVisitCount(localCount)
      } finally {
        setIsLoading(false)
      }
    }

    checkAndCountVisitors()
  }, [])

  // Ẩn component nếu đang loading hoặc là admin
  if (isLoading || visitCount === null) {
    return null
  }

  // Format số với dấu phẩy
  const formatCount = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 animate-fade-in">
      <div className="group relative">
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Main counter card */}
        <div className="relative glass-strong rounded-2xl px-4 py-3 shadow-xl backdrop-blur-xl border border-white/20 dark:border-slate-700/50 hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center gap-3">
            {/* Icon */}
            <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg">
              <Eye size={18} className="animate-pulse" />
            </div>
            
            {/* Counter */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <Users size={14} className="text-slate-500 dark:text-slate-400" />
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                  Visitors
                </span>
              </div>
              <span className="text-xl font-bold gradient-text leading-tight">
                {formatCount(visitCount)}
              </span>
            </div>
          </div>
          
          {/* Pulse indicator */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

export default VisitorCounter

