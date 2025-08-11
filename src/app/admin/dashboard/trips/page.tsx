'use client';

import { motion } from 'framer-motion';

const trips = [
  {
    id: 1,
    name: 'Paris Adventure',
    destination: 'Paris, France',
    duration: '7 days',
    price: '$1,299',
    status: 'Active',
    bookings: 45,
    image: '🗼'
  },
  {
    id: 2,
    name: 'Tokyo Explorer',
    destination: 'Tokyo, Japan',
    duration: '10 days',
    price: '$2,199',
    status: 'Active',
    bookings: 32,
    image: '🗾'
  },
  {
    id: 3,
    name: 'New York City',
    destination: 'New York, USA',
    duration: '5 days',
    price: '$899',
    status: 'Draft',
    bookings: 0,
    image: '🗽'
  },
  {
    id: 4,
    name: 'Bali Paradise',
    destination: 'Bali, Indonesia',
    duration: '8 days',
    price: '$1,599',
    status: 'Active',
    bookings: 28,
    image: '🏝️'
  }
];

export default function TripsPage() {
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
          <h1 className="text-2xl font-bold text-white">Trip Management</h1>
          <p className="text-gray-300">Manage all your travel packages and destinations</p>
        </div>
        <motion.button
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>✈️</span>
          <span>Create New Trip</span>
        </motion.button>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { name: 'Total Trips', value: '24', icon: '✈️' },
          { name: 'Active Trips', value: '18', icon: '✅' },
          { name: 'Draft Trips', value: '6', icon: '📝' },
          { name: 'Total Bookings', value: '1,234', icon: '📅' },
        ].map((stat, index) => (
          <motion.div
            key={stat.name}
            className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-xl flex items-center justify-center">
                <span className="text-xl">{stat.icon}</span>
              </div>
              <div>
                <p className="text-gray-400 text-sm">{stat.name}</p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Trips Grid */}
      <motion.div
        className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">All Trips</h2>
          <div className="flex items-center space-x-4">
            <select className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white">
              <option>All Status</option>
              <option>Active</option>
              <option>Draft</option>
            </select>
            <input
              type="text"
              placeholder="Search trips..."
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trips.map((trip, index) => (
            <motion.div
              key={trip.id}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">{trip.image}</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  trip.status === 'Active' 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {trip.status}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">{trip.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{trip.destination}</p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Duration:</span>
                  <span className="text-white">{trip.duration}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Price:</span>
                  <span className="text-white font-medium">{trip.price}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Bookings:</span>
                  <span className="text-white">{trip.bookings}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <motion.button
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Edit
                </motion.button>
                <motion.button
                  className="flex-1 bg-white/10 border border-white/20 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
