'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: true,
    marketing: false,
  });
  const [privacy, setPrivacy] = useState({
    profileVisibility: 'public',
    dataSharing: true,
    analytics: true,
  });

  const tabs = [
    { id: 'profile', name: 'Profile Settings', icon: '👤' },
    { id: 'notifications', name: 'Notifications', icon: '🔔' },
    { id: 'security', name: 'Security', icon: '🔒' },
    { id: 'privacy', name: 'Privacy', icon: '🛡️' },
    { id: 'appearance', name: 'Appearance', icon: '🎨' },
    { id: 'integrations', name: 'Integrations', icon: '🔗' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-white">Settings</h1>
          <p className="text-gray-400 mt-2">Manage your account preferences and system settings</p>
        </div>
        <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
          Save Changes
        </button>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-1"
        >
          <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-400 border border-cyan-500/30'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="text-lg">{tab.icon}</span>
                  <span className="font-medium">{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-3"
        >
          <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            {/* Profile Settings */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Profile Settings</h2>
                
                {/* Profile Picture */}
                <div className="flex items-center space-x-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-3xl font-bold text-white">
                    JD
                  </div>
                  <div>
                    <button className="bg-white/10 text-white px-4 py-2 rounded-xl hover:bg-white/20 transition-colors">
                      Change Photo
                    </button>
                    <p className="text-gray-400 text-sm mt-1">JPG, PNG or GIF. Max size 2MB.</p>
                  </div>
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">First Name</label>
                    <input
                      type="text"
                      defaultValue="John"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Last Name</label>
                    <input
                      type="text"
                      defaultValue="Doe"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                    <input
                      type="email"
                      defaultValue="john.doe@travelagency.com"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Phone</label>
                    <input
                      type="tel"
                      defaultValue="+1 (555) 123-4567"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-400 mb-2">Bio</label>
                    <textarea
                      rows={4}
                      defaultValue="Senior Travel Consultant with 8+ years of experience in luxury travel planning and customer service."
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Notifications */}
            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Notification Preferences</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <div>
                      <h3 className="text-white font-medium">Email Notifications</h3>
                      <p className="text-gray-400 text-sm">Receive notifications via email</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notifications.email}
                        onChange={(e) => setNotifications({ ...notifications, email: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <div>
                      <h3 className="text-white font-medium">Push Notifications</h3>
                      <p className="text-gray-400 text-sm">Receive push notifications in browser</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notifications.push}
                        onChange={(e) => setNotifications({ ...notifications, push: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <div>
                      <h3 className="text-white font-medium">SMS Notifications</h3>
                      <p className="text-gray-400 text-sm">Receive notifications via SMS</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notifications.sms}
                        onChange={(e) => setNotifications({ ...notifications, sms: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <div>
                      <h3 className="text-white font-medium">Marketing Communications</h3>
                      <p className="text-gray-400 text-sm">Receive promotional emails and updates</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notifications.marketing}
                        onChange={(e) => setNotifications({ ...notifications, marketing: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Security */}
            {activeTab === 'security' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Security Settings</h2>
                
                <div className="space-y-6">
                  {/* Change Password */}
                  <div className="bg-white/5 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Change Password</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Current Password</label>
                        <input
                          type="password"
                          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">New Password</label>
                        <input
                          type="password"
                          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Confirm New Password</label>
                        <input
                          type="password"
                          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        />
                      </div>
                      <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                        Update Password
                      </button>
                    </div>
                  </div>

                  {/* Two-Factor Authentication */}
                  <div className="bg-white/5 rounded-xl p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-white">Two-Factor Authentication</h3>
                        <p className="text-gray-400 text-sm">Add an extra layer of security to your account</p>
                      </div>
                      <button className="bg-white/10 text-white px-4 py-2 rounded-xl hover:bg-white/20 transition-colors">
                        Enable 2FA
                      </button>
                    </div>
                  </div>

                  {/* Login Sessions */}
                  <div className="bg-white/5 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Active Sessions</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                        <div>
                          <p className="text-white font-medium">Chrome on Windows</p>
                          <p className="text-gray-400 text-sm">Last active: 2 hours ago</p>
                        </div>
                        <button className="text-red-400 hover:text-red-300 text-sm">Revoke</button>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                        <div>
                          <p className="text-white font-medium">Safari on iPhone</p>
                          <p className="text-gray-400 text-sm">Last active: 1 day ago</p>
                        </div>
                        <button className="text-red-400 hover:text-red-300 text-sm">Revoke</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Privacy */}
            {activeTab === 'privacy' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Privacy Settings</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <div>
                      <h3 className="text-white font-medium">Profile Visibility</h3>
                      <p className="text-gray-400 text-sm">Control who can see your profile information</p>
                    </div>
                    <select
                      value={privacy.profileVisibility}
                      onChange={(e) => setPrivacy({ ...privacy, profileVisibility: e.target.value })}
                      className="bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    >
                      <option value="public">Public</option>
                      <option value="private">Private</option>
                      <option value="friends">Friends Only</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <div>
                      <h3 className="text-white font-medium">Data Sharing</h3>
                      <p className="text-gray-400 text-sm">Allow sharing of analytics data for improvement</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={privacy.dataSharing}
                        onChange={(e) => setPrivacy({ ...privacy, dataSharing: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <div>
                      <h3 className="text-white font-medium">Analytics Tracking</h3>
                      <p className="text-gray-400 text-sm">Allow tracking for personalized experience</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={privacy.analytics}
                        onChange={(e) => setPrivacy({ ...privacy, analytics: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Appearance */}
            {activeTab === 'appearance' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Appearance Settings</h2>
                
                <div className="space-y-6">
                  {/* Theme Selection */}
                  <div className="bg-white/5 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Theme</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-cyan-500 rounded-xl p-4 cursor-pointer">
                        <div className="w-full h-8 bg-white/10 rounded mb-2"></div>
                        <div className="w-3/4 h-4 bg-white/10 rounded mb-2"></div>
                        <div className="w-1/2 h-4 bg-white/10 rounded"></div>
                        <p className="text-white text-sm mt-2 text-center">Dark</p>
                      </div>
                      <div className="bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-transparent rounded-xl p-4 cursor-pointer hover:border-gray-300">
                        <div className="w-full h-8 bg-gray-300 rounded mb-2"></div>
                        <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
                        <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
                        <p className="text-gray-700 text-sm mt-2 text-center">Light</p>
                      </div>
                      <div className="bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-transparent rounded-xl p-4 cursor-pointer hover:border-cyan-500">
                        <div className="w-full h-8 bg-white/10 rounded mb-2"></div>
                        <div className="w-3/4 h-4 bg-white/10 rounded mb-2"></div>
                        <div className="w-1/2 h-4 bg-white/10 rounded"></div>
                        <p className="text-white text-sm mt-2 text-center">Auto</p>
                      </div>
                    </div>
                  </div>

                  {/* Color Scheme */}
                  <div className="bg-white/5 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Color Scheme</h3>
                    <div className="grid grid-cols-6 gap-4">
                      {['cyan', 'blue', 'purple', 'pink', 'orange', 'green'].map((color) => (
                        <div
                          key={color}
                          className={`w-12 h-12 rounded-full bg-${color}-500 cursor-pointer border-2 ${
                            color === 'cyan' ? 'border-white' : 'border-transparent'
                          } hover:border-white transition-colors`}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Font Size */}
                  <div className="bg-white/5 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Font Size</h3>
                    <div className="flex items-center space-x-4">
                      <button className="px-4 py-2 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors">
                        Small
                      </button>
                      <button className="px-4 py-2 bg-cyan-500 text-white rounded-xl">
                        Medium
                      </button>
                      <button className="px-4 py-2 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors">
                        Large
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Integrations */}
            {activeTab === 'integrations' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Integrations</h2>
                
                <div className="space-y-4">
                  {[
                    { name: 'Google Calendar', description: 'Sync your travel bookings with Google Calendar', connected: true },
                    { name: 'Slack', description: 'Get notifications in your Slack workspace', connected: false },
                    { name: 'Microsoft Teams', description: 'Integrate with Microsoft Teams for team collaboration', connected: false },
                    { name: 'Zapier', description: 'Connect with 5000+ apps via Zapier', connected: true },
                    { name: 'Stripe', description: 'Payment processing integration', connected: true },
                  ].map((integration, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                      <div>
                        <h3 className="text-white font-medium">{integration.name}</h3>
                        <p className="text-gray-400 text-sm">{integration.description}</p>
                      </div>
                      <button
                        className={`px-4 py-2 rounded-xl font-medium transition-colors ${
                          integration.connected
                            ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
                            : 'bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30'
                        }`}
                      >
                        {integration.connected ? 'Disconnect' : 'Connect'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
