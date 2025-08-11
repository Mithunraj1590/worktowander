'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

const adminUsers = [
  { 
    id: 1, 
    name: 'Super Admin', 
    email: 'superadmin@travelagency.com', 
    role: 'Super Admin', 
    status: 'Active', 
    lastLogin: '2 hours ago',
    avatar: '👑',
    permissions: ['All Access']
  },
  { 
    id: 2, 
    name: 'John Manager', 
    email: 'john.manager@travelagency.com', 
    role: 'Manager', 
    status: 'Active', 
    lastLogin: '1 day ago',
    avatar: '👨‍💼',
    permissions: ['Trip Management', 'User Management', 'Analytics']
  },
  { 
    id: 3, 
    name: 'Sarah Editor', 
    email: 'sarah.editor@travelagency.com', 
    role: 'Content Editor', 
    status: 'Active', 
    lastLogin: '3 days ago',
    avatar: '👩‍💻',
    permissions: ['Content Management', 'Trip Editing']
  },
  { 
    id: 4, 
    name: 'Mike Support', 
    email: 'mike.support@travelagency.com', 
    role: 'Support', 
    status: 'Inactive', 
    lastLogin: '1 week ago',
    avatar: '👨‍🔧',
    permissions: ['Customer Support', 'Booking Management']
  },
];

const roles = ['Super Admin', 'Manager', 'Content Editor', 'Support'];

export default function AdminsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('All');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const filteredAdmins = adminUsers.filter(admin => {
    const matchesSearch = admin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         admin.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole === 'All' || admin.role === selectedRole;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        className="flex items-center justify-between"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Admin Management</h1>
          <p className="text-gray-300">Manage admin users and their permissions</p>
        </div>
        <button 
          onClick={() => setShowCreateModal(true)}
          className="cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center space-x-2"
        >
          <span className="text-lg">➕</span>
          <span>Add Admin</span>
        </button>
      </motion.div>

      {/* Filters */}
      <motion.div
        className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <label className="text-sm font-medium text-gray-300 mb-2 block">Search Admins</label>
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
            />
          </div>
          
          {/* Role Filter */}
          <div className="md:w-48">
            <label className="text-sm font-medium text-gray-300 mb-2 block">Filter by Role</label>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
            >
              <option value="All">All Roles</option>
              {roles.map(role => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
          </div>
        </div>
      </motion.div>

      {/* Admins Table */}
      <motion.div
        className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-4 text-gray-300 font-medium">Admin</th>
                <th className="text-left py-4 px-4 text-gray-300 font-medium">Role</th>
                <th className="text-left py-4 px-4 text-gray-300 font-medium">Status</th>
                <th className="text-left py-4 px-4 text-gray-300 font-medium">Last Login</th>
                <th className="text-left py-4 px-4 text-gray-300 font-medium">Permissions</th>
                <th className="text-left py-4 px-4 text-gray-300 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredAdmins.map((admin, index) => (
                <motion.tr
                  key={admin.id}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-xl flex items-center justify-center">
                        <span className="text-lg">{admin.avatar}</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">{admin.name}</p>
                        <p className="text-gray-400 text-sm">{admin.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      admin.role === 'Super Admin' 
                        ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                        : admin.role === 'Manager'
                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        : admin.role === 'Content Editor'
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                    }`}>
                      {admin.role}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      admin.status === 'Active' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-red-500/20 text-red-400 border border-red-500/30'
                    }`}>
                      {admin.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-300 text-sm">
                    {admin.lastLogin}
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex flex-wrap gap-1">
                      {admin.permissions.map((permission, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">
                          {permission}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <button className=" cursor-pointer p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors">
                        ✏️
                      </button>
                      <Link href={`/admin/dashboard/admins/${admin.id}`}>
                        <button className=" cursor-pointer p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors">
                          👁️
                        </button>
                      </Link>
                      {admin.role !== 'Super Admin' && (
                        <button className=" cursor-pointer p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors">
                          🗑️
                        </button>
                      )}
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Create Admin Modal */}
      {showCreateModal && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 w-full max-w-md mx-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Add New Admin</h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">Name</label>
                <input
                  type="text"
                  placeholder="Admin name"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">Email</label>
                <input
                  type="email"
                  placeholder="admin@travelagency.com"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">Role</label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm transition-all duration-300">
                  {roles.filter(role => role !== 'Super Admin').map(role => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex items-center justify-end space-x-4 mt-6">
              <button
                onClick={() => setShowCreateModal(false)}
                className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-xl font-medium hover:shadow-lg transition-all duration-300">
                Create Admin
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
