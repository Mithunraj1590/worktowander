'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

// Mock admin data - in real app this would come from API
const adminData = {
  id: 2,
  name: 'John Manager',
  email: 'john.manager@travelagency.com',
  phone: '+1 (555) 987-6543',
  role: 'Manager',
  status: 'Active',
  joinDate: '2024-01-10',
  lastLogin: '1 day ago',
  avatar: '👨‍💼',
  permissions: ['Trip Management', 'User Management', 'Analytics'],
  activityHistory: [
    {
      id: 1,
      action: 'Created new trip',
      details: 'Luxury Bali Adventure',
      timestamp: '2 hours ago',
      type: 'trip'
    },
    {
      id: 2,
      action: 'Updated user status',
      details: 'Sarah Johnson - Active',
      timestamp: '1 day ago',
      type: 'user'
    },
    {
      id: 3,
      action: 'Viewed analytics',
      details: 'Dashboard overview',
      timestamp: '2 days ago',
      type: 'analytics'
    },
    {
      id: 4,
      action: 'Approved booking',
      details: 'Booking #12345 confirmed',
      timestamp: '3 days ago',
      type: 'booking'
    }
  ],
  managedTrips: [
    {
      id: 1,
      name: 'Luxury Bali Adventure',
      status: 'Active',
      bookings: 15,
      revenue: '$37,485'
    },
    {
      id: 2,
      name: 'Swiss Alps Explorer',
      status: 'Active',
      bookings: 8,
      revenue: '$15,192'
    },
    {
      id: 3,
      name: 'Tokyo City Break',
      status: 'Draft',
      bookings: 0,
      revenue: '$0'
    }
  ],
  managedUsers: [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.j@email.com',
      status: 'Active',
      lastActivity: '2 hours ago'
    },
    {
      id: 2,
      name: 'Mike Chen',
      email: 'mike.chen@email.com',
      status: 'Active',
      lastActivity: '1 day ago'
    },
    {
      id: 3,
      name: 'Emma Davis',
      email: 'emma.d@email.com',
      status: 'Inactive',
      lastActivity: '1 week ago'
    }
  ]
};

const availablePermissions = [
  'Trip Management',
  'User Management', 
  'Analytics',
  'Content Management',
  'Booking Management',
  'Customer Support',
  'Financial Reports',
  'System Settings'
];

export default function AdminDetailsPage({ params }: { params: { id: string } }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(adminData);

  const handleSave = () => {
    // In real app, this would save to API
    console.log('Saving admin data:', editData);
    setIsEditing(false);
  };

  const togglePermission = (permission: string) => {
    if (isEditing) {
      const newPermissions = editData.permissions.includes(permission)
        ? editData.permissions.filter(p => p !== permission)
        : [...editData.permissions, permission];
      setEditData({...editData, permissions: newPermissions});
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        className="flex items-center justify-between"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex items-center space-x-4">
          <Link 
            href="/admin/dashboard/admins"
            className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            ←
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Admin Details</h1>
            <p className="text-gray-300">View and edit admin information and permissions</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center space-x-2"
          >
            <span className="text-lg">{isEditing ? '✏️' : '✏️'}</span>
            <span>{isEditing ? 'Cancel' : 'Edit Admin'}</span>
          </button>
          {isEditing && (
            <button
              onClick={handleSave}
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 flex items-center space-x-2"
            >
              <span className="text-lg">💾</span>
              <span>Save Changes</span>
            </button>
          )}
        </div>
      </motion.div>

      {/* Admin Info Card */}
      <motion.div
        className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-start space-x-6">
          <div className="w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-3xl flex items-center justify-center">
            <span className="text-4xl">{adminData.avatar}</span>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">Full Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editData.name}
                    onChange={(e) => setEditData({...editData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                  />
                ) : (
                  <p className="text-white text-lg font-medium">{adminData.name}</p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">Email</label>
                {isEditing ? (
                  <input
                    type="email"
                    value={editData.email}
                    onChange={(e) => setEditData({...editData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                  />
                ) : (
                  <p className="text-white text-lg">{adminData.email}</p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">Role</label>
                {isEditing ? (
                  <select
                    value={editData.role}
                    onChange={(e) => setEditData({...editData, role: e.target.value})}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                  >
                    <option value="Manager">Manager</option>
                    <option value="Content Editor">Content Editor</option>
                    <option value="Support">Support</option>
                  </select>
                ) : (
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full text-sm font-medium">
                    {adminData.role}
                  </span>
                )}
              </div>
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">Status</label>
                {isEditing ? (
                  <select
                    value={editData.status}
                    onChange={(e) => setEditData({...editData, status: e.target.value})}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                ) : (
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    adminData.status === 'Active' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-red-500/20 text-red-400 border border-red-500/30'
                  }`}>
                    {adminData.status}
                  </span>
                )}
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-2xl p-4">
                <p className="text-gray-400 text-sm">Managed Trips</p>
                <p className="text-2xl font-bold text-white">{adminData.managedTrips.length}</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-4">
                <p className="text-gray-400 text-sm">Managed Users</p>
                <p className="text-2xl font-bold text-white">{adminData.managedUsers.length}</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-4">
                <p className="text-gray-400 text-sm">Admin Since</p>
                <p className="text-lg font-medium text-white">{new Date(adminData.joinDate).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Permissions Section */}
      <motion.div
        className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Permissions</h2>
          <span className="text-cyan-400 font-medium">{editData.permissions.length} permissions</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {availablePermissions.map((permission) => (
            <motion.button
              key={permission}
              onClick={() => togglePermission(permission)}
              className={`p-4 rounded-2xl border transition-all duration-300 ${
                editData.permissions.includes(permission)
                  ? 'bg-cyan-500/20 border-cyan-500/30 text-cyan-400'
                  : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
              } ${isEditing ? 'cursor-pointer' : 'cursor-default'}`}
              whileHover={isEditing ? { scale: 1.02 } : {}}
              whileTap={isEditing ? { scale: 0.98 } : {}}
            >
              <div className="flex items-center space-x-2">
                <span className="text-lg">
                  {editData.permissions.includes(permission) ? '✅' : '⭕'}
                </span>
                <span className="text-sm font-medium">{permission}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Activity and Management Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Activity History */}
        <motion.div
          className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Recent Activity</h2>
            <span className="text-cyan-400 font-medium">{adminData.activityHistory.length} activities</span>
          </div>
          <div className="space-y-4">
            {adminData.activityHistory.map((activity, index) => (
              <motion.div
                key={activity.id}
                className="flex items-start space-x-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  activity.type === 'trip' ? 'bg-blue-500/20' :
                  activity.type === 'user' ? 'bg-green-500/20' :
                  activity.type === 'analytics' ? 'bg-purple-500/20' :
                  'bg-orange-500/20'
                }`}>
                  <span className="text-sm">
                    {activity.type === 'trip' ? '✈️' :
                     activity.type === 'user' ? '👤' :
                     activity.type === 'analytics' ? '📊' : '📅'}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium text-sm">{activity.action}</p>
                  <p className="text-gray-400 text-xs">{activity.details}</p>
                </div>
                <span className="text-gray-400 text-xs">{activity.timestamp}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Managed Trips */}
        <motion.div
          className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Managed Trips</h2>
            <span className="text-cyan-400 font-medium">{adminData.managedTrips.length} trips</span>
          </div>
          <div className="space-y-4">
            {adminData.managedTrips.map((trip, index) => (
              <motion.div
                key={trip.id}
                className="bg-white/5 rounded-2xl p-4 hover:bg-white/10 transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-white font-medium text-lg">{trip.name}</h3>
                    <p className="text-gray-400 text-sm">{trip.bookings} bookings</p>
                  </div>
                  <span className="text-cyan-400 font-bold">{trip.revenue}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    trip.status === 'Active' 
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {trip.status}
                  </span>
                  <div className="flex items-center space-x-2">
                    <button className="px-3 py-1 bg-white/10 text-white rounded-lg text-xs hover:bg-white/20 transition-colors">
                      View
                    </button>
                    <button className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-lg text-xs hover:bg-cyan-500/30 transition-colors">
                      Edit
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
