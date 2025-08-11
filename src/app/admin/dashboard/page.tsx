'use client';

import { motion } from 'framer-motion';
import StatsCard from '@/components/StatsCard';
import TripCard from '@/components/TripCard';
import ChartSection from '@/components/ChartSection';

const stats = [
  { name: 'Total Trips', value: '1,234', change: '+12%', icon: '✈️' },
  { name: 'Active Users', value: '5,678', change: '+8%', icon: '👥' },
  { name: 'Bookings', value: '9,876', change: '+15%', icon: '📅' },
  { name: 'Revenue', value: '$45,678', change: '+23%', icon: '💰' },
];

const recentTrips = [
  {
    id: '1',
    title: 'Luxury Bali Adventure',
    location: 'Bali, Indonesia',
    price: 2499,
    image: '/hero-img.png',
    tags: ['Luxury', 'Beach', 'Adventurous']
  },
  {
    id: '2',
    title: 'Swiss Alps Explorer',
    location: 'Zermatt, Switzerland',
    price: 1899,
    image: '/hero-img.png',
    tags: ['Mountains', 'Sports', 'Luxury']
  },
  {
    id: '3',
    title: 'Tokyo City Break',
    location: 'Tokyo, Japan',
    price: 1299,
    image: '/hero-img.png',
    tags: ['City', 'Budget', 'Solo Travel']
  },
  {
    id: '4',
    title: 'Santorini Sunset',
    location: 'Santorini, Greece',
    price: 2199,
    image: '/hero-img.png',
    tags: ['Luxury', 'Beach', 'Romantic']
  }
];

const latestUserSignups = [
  { id: 1, name: 'Sarah Johnson', email: 'sarah.j@email.com', time: '2 minutes ago', avatar: '👩‍💼', status: 'Verified' },
  { id: 2, name: 'Mike Chen', email: 'mike.chen@email.com', time: '5 minutes ago', avatar: '👨‍💻', status: 'Pending' },
  { id: 3, name: 'Emma Davis', email: 'emma.d@email.com', time: '12 minutes ago', avatar: '👩‍🎨', status: 'Verified' },
  { id: 4, name: 'Alex Rodriguez', email: 'alex.r@email.com', time: '18 minutes ago', avatar: '👨‍🏫', status: 'Verified' },
  { id: 5, name: 'Lisa Wang', email: 'lisa.w@email.com', time: '25 minutes ago', avatar: '👩‍⚕️', status: 'Pending' },
];

const latestTripBookings = [
  { id: 1, trip: 'Luxury Bali Adventure', customer: 'John Smith', amount: '$2,499', status: 'Confirmed', time: '3 minutes ago' },
  { id: 2, trip: 'Swiss Alps Explorer', customer: 'Maria Garcia', amount: '$1,899', status: 'Pending', time: '8 minutes ago' },
  { id: 3, trip: 'Tokyo City Break', customer: 'David Kim', amount: '$1,299', status: 'Confirmed', time: '15 minutes ago' },
  { id: 4, trip: 'Santorini Sunset', customer: 'Anna Wilson', amount: '$2,199', status: 'Confirmed', time: '22 minutes ago' },
  { id: 5, trip: 'Paris Explorer', customer: 'Tom Brown', amount: '$1,599', status: 'Pending', time: '30 minutes ago' },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard
            key={stat.name}
            name={stat.name}
            value={stat.value}
            change={stat.change}
            icon={stat.icon}
            index={index}
          />
        ))}
      </div>

      {/* Trip Grid */}
      <motion.div
        className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Recent Trips</h2>
          <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium">
            View All Trips →
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentTrips.map((trip, index) => (
            <motion.div
              key={trip.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <TripCard {...trip} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Charts Section */}
      <ChartSection />

      {/* Quick Actions */}
      <motion.div
        className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <h2 className="text-2xl font-bold text-white mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Create Trip', icon: '✈️', color: 'from-blue-500 to-cyan-500' },
            { name: 'Add User', icon: '👤', color: 'from-green-500 to-emerald-500' },
            { name: 'View Analytics', icon: '📊', color: 'from-purple-500 to-pink-500' },
          ].map((action, index) => (
            <motion.button
              key={action.name}
              className={`bg-gradient-to-r ${action.color} text-white p-6 rounded-2xl font-medium hover:shadow-2xl transition-all duration-300 flex items-center space-x-4 text-lg`}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <span className="text-2xl">{action.icon}</span>
              <span>{action.name}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Latest User Signups and Trip Bookings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Latest User Signups */}
        <motion.div
          className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Latest User Signups</h2>
            <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium">
              View All Users →
            </button>
          </div>
          <div className="space-y-4">
            {latestUserSignups.map((user, index) => (
              <motion.div
                key={user.id}
                className="flex items-center space-x-4 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 + index * 0.1 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-2xl flex items-center justify-center">
                  <span className="text-xl">{user.avatar}</span>
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium text-lg">{user.name}</p>
                  <p className="text-gray-400 text-sm">{user.email}</p>
                </div>
                <div className="text-right">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    user.status === 'Verified' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {user.status}
                  </span>
                  <p className="text-gray-400 text-xs mt-1">{user.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Latest Trip Bookings */}
        <motion.div
          className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Latest Trip Bookings</h2>
            <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium">
              View All Bookings →
            </button>
          </div>
          <div className="space-y-4">
            {latestTripBookings.map((booking, index) => (
              <motion.div
                key={booking.id}
                className="flex items-center space-x-4 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 + index * 0.1 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-400/20 to-emerald-600/20 rounded-2xl flex items-center justify-center">
                  <span className="text-xl">✈️</span>
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium text-lg">{booking.trip}</p>
                  <p className="text-gray-400 text-sm">{booking.customer}</p>
                </div>
                <div className="text-right">
                  <p className="text-cyan-400 font-bold">{booking.amount}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    booking.status === 'Confirmed' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {booking.status}
                  </span>
                  <p className="text-gray-400 text-xs mt-1">{booking.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
