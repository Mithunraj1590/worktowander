'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

const publicUsers = [
  { 
    id: 1, 
    name: 'Sarah Johnson', 
    email: 'sarah.j@email.com', 
    status: 'Active', 
    joinDate: '2024-01-15',
    lastLogin: '2 hours ago',
    avatar: '👩‍💼',
    bookings: 5,
    totalSpent: '$3,250'
  },
  { 
    id: 2, 
    name: 'Mike Chen', 
    email: 'mike.chen@email.com', 
    status: 'Active', 
    joinDate: '2024-02-03',
    lastLogin: '1 day ago',
    avatar: '👨‍💻',
    bookings: 2,
    totalSpent: '$1,899'
  },
  { 
    id: 3, 
    name: 'Emma Davis', 
    email: 'emma.d@email.com', 
    status: 'Active', 
    joinDate: '2024-01-28',
    lastLogin: '3 days ago',
    avatar: '👩‍🎨',
    bookings: 8,
    totalSpent: '$5,670'
  },
  { 
    id: 4, 
    name: 'Alex Rodriguez', 
    email: 'alex.r@email.com', 
    status: 'Inactive', 
    joinDate: '2023-12-10',
    lastLogin: '2 weeks ago',
    avatar: '👨‍🏫',
    bookings: 3,
    totalSpent: '$2,100'
  },
  { 
    id: 5, 
    name: 'Lisa Wang', 
    email: 'lisa.w@email.com', 
    status: 'Active', 
    joinDate: '2024-02-10',
    lastLogin: '5 hours ago',
    avatar: '👩‍⚕️',
    bookings: 1,
    totalSpent: '$899'
  },
  { 
    id: 6, 
    name: 'David Kim', 
    email: 'david.kim@email.com', 
    status: 'Active', 
    joinDate: '2024-01-20',
    lastLogin: '1 day ago',
    avatar: '👨‍🎤',
    bookings: 4,
    totalSpent: '$2,800'
  },
];

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [showUserModal, setShowUserModal] = useState(false);

  const filteredUsers = publicUsers.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'All' || user.status === selectedStatus;
    return matchesSearch && matchesStatus;
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
          <h1 className="text-3xl font-bold text-white mb-2">Public Users</h1>
          <p className="text-gray-300">Manage public website users and their accounts</p>
        </div>
      
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm font-medium">Total Users</p>
              <p className="text-2xl font-bold text-white mt-1">{publicUsers.length}</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-xl flex items-center justify-center">
              <span className="text-xl">👥</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm font-medium">Active Users</p>
              <p className="text-2xl font-bold text-white mt-1">{publicUsers.filter(u => u.status === 'Active').length}</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-green-400/20 to-emerald-600/20 rounded-xl flex items-center justify-center">
              <span className="text-xl">✅</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm font-medium">Total Bookings</p>
              <p className="text-2xl font-bold text-white mt-1">{publicUsers.reduce((sum, user) => sum + user.bookings, 0)}</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400/20 to-cyan-600/20 rounded-xl flex items-center justify-center">
              <span className="text-xl">📅</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm font-medium">Total Revenue</p>
              <p className="text-2xl font-bold text-white mt-1">$16,618</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400/20 to-orange-600/20 rounded-xl flex items-center justify-center">
              <span className="text-xl">💰</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Filters */}
      <motion.div
        className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <label className="text-sm font-medium text-gray-300 mb-2 block">Search Users</label>
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
            />
          </div>
          
          {/* Status Filter */}
          <div className="md:w-48">
            <label className="text-sm font-medium text-gray-300 mb-2 block">Filter by Status</label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
            >
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>
      </motion.div>

      {/* Users Table */}
      <motion.div
        className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-4 text-gray-300 font-medium">User</th>
                <th className="text-left py-4 px-4 text-gray-300 font-medium">Status</th>
                <th className="text-left py-4 px-4 text-gray-300 font-medium">Join Date</th>
                <th className="text-left py-4 px-4 text-gray-300 font-medium">Last Login</th>
                <th className="text-left py-4 px-4 text-gray-300 font-medium">Bookings</th>
                <th className="text-left py-4 px-4 text-gray-300 font-medium">Total Spent</th>
                <th className="text-left py-4 px-4 text-gray-300 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <motion.tr
                  key={user.id}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-xl flex items-center justify-center">
                        <span className="text-lg">{user.avatar}</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">{user.name}</p>
                        <p className="text-gray-400 text-sm">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      user.status === 'Active' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-red-500/20 text-red-400 border border-red-500/30'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-300 text-sm">
                    {new Date(user.joinDate).toLocaleDateString()}
                  </td>
                  <td className="py-4 px-4 text-gray-300 text-sm">
                    {user.lastLogin}
                  </td>
                  <td className="py-4 px-4">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full text-xs font-medium">
                      {user.bookings}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-cyan-400 font-medium">
                    {user.totalSpent}
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <Link href={`/admin/dashboard/users/${user.id}`}>
                        <button className=" cursor-pointer p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors">
                          👁️
                        </button>
                      </Link>
                    
                      <button className=" cursor-pointer p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors">
                        🗑️
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Add User Modal */}
      {showUserModal && (
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
            <h2 className="text-2xl font-bold text-white mb-6">Add New User</h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">Name</label>
                <input
                  type="text"
                  placeholder="User name"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">Email</label>
                <input
                  type="email"
                  placeholder="user@email.com"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">Status</label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm transition-all duration-300">
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>
            <div className="flex items-center justify-end space-x-4 mt-6">
              <button
                onClick={() => setShowUserModal(false)}
                className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-xl font-medium hover:shadow-lg transition-all duration-300">
                Create User
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
