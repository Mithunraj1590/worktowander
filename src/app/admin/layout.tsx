'use client';

import DashboardSidebar from '@/widgets/DashboardSidebar';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isSignInPage = pathname === '/admin';
  
  // If it's the sign-in page, render without dashboard layout
  if (isSignInPage) {
    return <>{children}</>;
  }

  const [showNotifications, setShowNotifications] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showChatDropdown, setShowChatDropdown] = useState(false);
  const [showAllAdmins, setShowAllAdmins] = useState(false);

  const notifications = [
    {
      id: 1,
      type: 'booking',
      title: 'New Booking Received',
      message: 'Luxury Bali Adventure booked by John Smith',
      time: '2 minutes ago',
      unread: true,
    },
    {
      id: 2,
      type: 'payment',
      title: 'Payment Confirmed',
      message: '$2,499 received for Tokyo City Break',
      time: '15 minutes ago',
      unread: true,
    },
    {
      id: 3,
      type: 'review',
      title: 'New Review Posted',
      message: '5-star review for Swiss Alps Explorer',
      time: '1 hour ago',
      unread: false,
    },
    {
      id: 4,
      type: 'system',
      title: 'System Update',
      message: 'Dashboard analytics have been updated',
      time: '2 hours ago',
      unread: false,
    },
  ];

  const chatMessages = [
    {
      id: 1,
      sender: 'Sarah Johnson',
      message: 'Hey, have you reviewed the new booking requests?',
      time: '2 min ago',
      unread: true,
      status: 'online',
    },
    {
      id: 2,
      sender: 'Mike Chen',
      message: 'The analytics report is ready for review',
      time: '5 min ago',
      unread: true,
      status: 'online',
    },
    {
      id: 3,
      sender: 'Emma Davis',
      message: 'Customer support tickets are piling up',
      time: '15 min ago',
      unread: false,
      status: 'away',
    },
    {
      id: 4,
      sender: 'Alex Thompson',
      message: 'Great work on the new trip packages!',
      time: '1 hour ago',
      unread: false,
      status: 'offline',
    },
  ];

  const allAdmins = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Super Admin',
      status: 'online',
      lastActive: '2 min ago',
      avatar: 'SJ',
      department: 'Operations',
    },
    {
      id: 2,
      name: 'Mike Chen',
      role: 'Admin',
      status: 'online',
      lastActive: '5 min ago',
      avatar: 'MC',
      department: 'Analytics',
    },
    {
      id: 3,
      name: 'Emma Davis',
      role: 'Admin',
      status: 'away',
      lastActive: '15 min ago',
      avatar: 'ED',
      department: 'Customer Support',
    },
    {
      id: 4,
      name: 'Alex Thompson',
      role: 'Admin',
      status: 'offline',
      lastActive: '1 hour ago',
      avatar: 'AT',
      department: 'Marketing',
    },
    {
      id: 5,
      name: 'Lisa Wang',
      role: 'Admin',
      status: 'online',
      lastActive: 'Just now',
      avatar: 'LW',
      department: 'Finance',
    },
    {
      id: 6,
      name: 'David Kim',
      role: 'Admin',
      status: 'away',
      lastActive: '30 min ago',
      avatar: 'DK',
      department: 'IT',
    },
  ];

  const unreadCount = notifications.filter(n => n.unread).length;
  const unreadChatCount = chatMessages.filter(m => m.unread).length;
  const onlineAdmins = chatMessages.filter(m => m.status === 'online').length;

  return (
    <div className="h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex">
      {/* Sidebar - Fixed */}
      <div className="w-64 flex-shrink-0">
        <DashboardSidebar />
      </div>
      
      {/* Main Content - Scrollable */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar - Fixed */}
        <div className="bg-black/30 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex-shrink-0 z-10">
          <div className="flex items-center justify-between">
            {/* Page Title */}
            <div className="space-x-3">
              <h1 className="text-xl font-bold text-white">Welcome back, Admin!</h1>
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Notification Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors relative"
                >
                  🔔
                  {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {unreadCount}
                    </span>
                  )}
                </button>

                <AnimatePresence>
                  {showNotifications && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-80 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-50"
                    >
                      {/* Header */}
                      <div className="p-4 border-b border-white/10">
                        <div className="flex items-center justify-between">
                          <h3 className="text-white font-semibold">Notifications</h3>
                          <button 
                            onClick={() => {
                              // Mark all as read functionality
                              console.log('Mark all as read');
                            }}
                            className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors"
                          >
                            Mark all read
                          </button>
                        </div>
                      </div>

                      {/* Notifications List */}
                      <div className="max-h-96 overflow-y-auto">
                        {notifications.length > 0 ? (
                          notifications.map((notification) => (
                            <div
                              key={notification.id}
                              className={`p-4 border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer ${
                                notification.unread ? 'bg-white/5' : ''
                              }`}
                              onClick={() => {
                                // Handle notification click
                                console.log('Notification clicked:', notification.id);
                              }}
                            >
                              <div className="flex items-start space-x-3">
                                <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                                  notification.type === 'booking' ? 'bg-green-400' :
                                  notification.type === 'payment' ? 'bg-blue-400' :
                                  notification.type === 'review' ? 'bg-yellow-400' :
                                  'bg-gray-400'
                                }`}></div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between">
                                    <p className={`text-sm font-medium ${
                                      notification.unread ? 'text-white' : 'text-gray-300'
                                    }`}>
                                      {notification.title}
                                    </p>
                                    <span className="text-xs text-gray-500">{notification.time}</span>
                                  </div>
                                  <p className="text-sm text-gray-400 mt-1 truncate">
                                    {notification.message}
                                  </p>
                                  {notification.unread && (
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="p-8 text-center">
                            <p className="text-gray-400 text-sm">No notifications</p>
                          </div>
                        )}
                      </div>

                      {/* Footer */}
                      <div className="p-4 border-t border-white/10">
                        <Link 
                          href="/admin/dashboard/notifications"
                          className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors block text-center"
                        >
                          View all notifications
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/admin/dashboard/settings" className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors">
                ⚙️
              </Link>
            </div>
          </div>
        </div>

        {/* Page Content - Scrollable */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="px-5 mx-auto">
            {children}
          </div>
        </main>
      </div>

      {/* Floating Chat Icon */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* All Admins Modal */}
        <AnimatePresence>
          {showAllAdmins && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-16 right-0 w-96 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl mb-4"
            >
              {/* Header */}
              <div className="p-4 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-white font-semibold">All Admins</h3>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-green-400 text-xs">{allAdmins.filter(a => a.status === 'online').length} online</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setShowAllAdmins(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* All Admins List */}
              <div className="max-h-96 overflow-y-auto">
                {allAdmins.length > 0 ? (
                  allAdmins.map((admin) => (
                    <div
                      key={admin.id}
                      className="p-4 border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer"
                      onClick={() => {
                        setShowChat(true);
                        setShowAllAdmins(false);
                        console.log('Open chat with:', admin.name);
                      }}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="relative">
                          <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                            {admin.avatar}
                          </div>
                          <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-black/90 ${
                            admin.status === 'online' ? 'bg-green-400' :
                            admin.status === 'away' ? 'bg-yellow-400' :
                            'bg-gray-400'
                          }`}></div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium text-white">
                                {admin.name}
                              </p>
                              <p className="text-xs text-gray-400">{admin.role} • {admin.department}</p>
                            </div>
                            <span className="text-xs text-gray-500">{admin.lastActive}</span>
                          </div>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              admin.status === 'online' ? 'bg-green-500/20 text-green-400' :
                              admin.status === 'away' ? 'bg-yellow-500/20 text-yellow-400' :
                              'bg-gray-500/20 text-gray-400'
                            }`}>
                              {admin.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-8 text-center">
                    <p className="text-gray-400 text-sm">No admins found</p>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-white/10">
                <button 
                  onClick={() => {
                    setShowChatDropdown(true);
                    setShowAllAdmins(false);
                  }}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-xl font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  View Recent Messages
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chat Dropdown */}
        <AnimatePresence>
          {showChatDropdown && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-16 right-0 w-80 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl mb-4"
            >
              {/* Header */}
              <div className="p-4 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-white font-semibold">Recent Messages</h3>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-green-400 text-xs">{onlineAdmins} online</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setShowChatDropdown(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="max-h-96 overflow-y-auto">
                {chatMessages.length > 0 ? (
                  chatMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`p-4 border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer ${
                        message.unread ? 'bg-white/5' : ''
                      }`}
                      onClick={() => {
                        setShowChat(true);
                        setShowChatDropdown(false);
                        console.log('Open chat with:', message.sender);
                      }}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="relative">
                          <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                            {message.sender.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-black/90 ${
                            message.status === 'online' ? 'bg-green-400' :
                            message.status === 'away' ? 'bg-yellow-400' :
                            'bg-gray-400'
                          }`}></div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className={`text-sm font-medium ${
                              message.unread ? 'text-white' : 'text-gray-300'
                            }`}>
                              {message.sender}
                            </p>
                            <span className="text-xs text-gray-500">{message.time}</span>
                          </div>
                          <p className="text-sm text-gray-400 mt-1 truncate">
                            {message.message}
                          </p>
                          {message.unread && (
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-8 text-center">
                    <p className="text-gray-400 text-sm">No messages</p>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-white/10">
                <button 
                  onClick={() => {
                    setShowAllAdmins(true);
                    setShowChatDropdown(false);
                  }}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-xl font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  View All Admins
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Chat Button */}
        <button 
          onClick={() => {
            setShowAllAdmins(true);
            setShowChatDropdown(false);
          }}
          className="relative w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center text-white text-xl group"
        >
          💬
          {unreadChatCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
              {unreadChatCount}
            </span>
          )}
          {/* Pulse animation for online status */}
          <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-20"></div>
        </button>
      </div>

      {/* Full Chat Modal */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowChat(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-900 border border-white/10 rounded-3xl w-full max-w-2xl h-96 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Chat Header */}
              <div className="p-4 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={() => {
                      setShowChat(false);
                      setShowAllAdmins(true);
                    }}
                    className="text-gray-400 hover:text-white transition-colors mr-2"
                  >
                    ←
                  </button>
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                    SJ
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Sarah Johnson</h3>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-green-400 text-xs">Online</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setShowChat(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4">
                <div className="flex justify-start">
                  <div className="bg-white/10 rounded-2xl px-4 py-2 max-w-xs">
                    <p className="text-white text-sm">Hey, have you reviewed the new booking requests?</p>
                    <p className="text-gray-400 text-xs mt-1">2 min ago</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl px-4 py-2 max-w-xs">
                    <p className="text-white text-sm">Yes, I'm working on them now. Should be done in an hour.</p>
                    <p className="text-cyan-200 text-xs mt-1">1 min ago</p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-white/10 rounded-2xl px-4 py-2 max-w-xs">
                    <p className="text-white text-sm">Perfect! Let me know when you're ready to discuss.</p>
                    <p className="text-gray-400 text-xs mt-1">Just now</p>
                  </div>
                </div>
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t border-white/10">
                <div className="flex items-center space-x-3">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-3 rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                    Send
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
