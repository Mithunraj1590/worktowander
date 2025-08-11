'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

// Mock user data - in real app this would come from API
const userData = {
  id: 1,
  name: 'Sarah Johnson',
  email: 'sarah.j@email.com',
  phone: '+1 (555) 123-4567',
  status: 'Active',
  joinDate: '2024-01-15',
  lastLogin: '2 hours ago',
  avatar: '👩‍💼',
  totalSpent: '$3,250',
  totalBookings: 5,
  address: '123 Main St, New York, NY 10001',
  preferences: ['Beach Destinations', 'Luxury Hotels', 'Adventure Tours'],
  completedTrips: [
    {
      id: 1,
      tripName: 'Luxury Bali Adventure',
      destination: 'Bali, Indonesia',
      startDate: '2024-01-20',
      endDate: '2024-01-27',
      amount: '$2,499',
      status: 'Completed',
      rating: 5,
      review: 'Amazing experience! The resort was perfect and the activities were incredible.'
    },
    {
      id: 2,
      tripName: 'Tokyo City Break',
      destination: 'Tokyo, Japan',
      startDate: '2024-02-10',
      endDate: '2024-02-15',
      amount: '$1,299',
      status: 'Completed',
      rating: 4,
      review: 'Great city tour, loved the food and culture!'
    }
  ],
  pendingTrips: [
    {
      id: 3,
      tripName: 'Swiss Alps Explorer',
      destination: 'Zermatt, Switzerland',
      startDate: '2024-03-15',
      endDate: '2024-03-22',
      amount: '$1,899',
      status: 'Confirmed',
      bookingDate: '2024-02-01'
    },
    {
      id: 4,
      tripName: 'Santorini Sunset',
      destination: 'Santorini, Greece',
      startDate: '2024-04-10',
      endDate: '2024-04-17',
      amount: '$2,199',
      status: 'Pending',
      bookingDate: '2024-02-15'
    }
  ]
};

export default function UserDetailsPage({ params }: { params: Promise<{ id: string }> }) {

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
            href="/admin/dashboard/users"
            className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            ←
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">User Details</h1>
            <p className="text-gray-300">View user information</p>
          </div>
        </div>
      </motion.div>

      {/* User Info Card */}
      <motion.div
        className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-start space-x-6">
          <div className="w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-3xl flex items-center justify-center">
            <span className="text-4xl">{userData.avatar}</span>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">Full Name</label>
                <p className="text-white text-lg font-medium">{userData.name}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">Email</label>
                <p className="text-white text-lg">{userData.email}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">Phone</label>
                <p className="text-white text-lg">{userData.phone}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">Status</label>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  userData.status === 'Active' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-red-500/20 text-red-400 border border-red-500/30'
                }`}>
                  {userData.status}
                </span>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-2xl p-4">
                <p className="text-gray-400 text-sm">Total Spent</p>
                <p className="text-2xl font-bold text-cyan-400">{userData.totalSpent}</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-4">
                <p className="text-gray-400 text-sm">Total Bookings</p>
                <p className="text-2xl font-bold text-white">{userData.totalBookings}</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-4">
                <p className="text-gray-400 text-sm">Member Since</p>
                <p className="text-lg font-medium text-white">{new Date(userData.joinDate).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Trips Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Completed Trips */}
        <motion.div
          className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Completed Trips</h2>
            <span className="text-cyan-400 font-medium">{userData.completedTrips.length} trips</span>
          </div>
          <div className="space-y-4">
            {userData.completedTrips.map((trip, index) => (
              <motion.div
                key={trip.id}
                className="bg-white/5 rounded-2xl p-4 hover:bg-white/10 transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-white font-medium text-lg">{trip.tripName}</h3>
                    <p className="text-gray-400 text-sm">{trip.destination}</p>
                  </div>
                  <span className="text-green-400 font-bold">{trip.amount}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-400">{trip.startDate} - {trip.endDate}</span>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < trip.rating ? 'text-yellow-400' : 'text-gray-600'}>
                          ⭐
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs">
                    {trip.status}
                  </span>
                </div>
                {trip.review && (
                  <p className="text-gray-300 text-sm mt-3 italic">"{trip.review}"</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pending Trips */}
        <motion.div
          className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Pending Trips</h2>
            <span className="text-yellow-400 font-medium">{userData.pendingTrips.length} trips</span>
          </div>
          <div className="space-y-4">
            {userData.pendingTrips.map((trip, index) => (
              <motion.div
                key={trip.id}
                className="bg-white/5 rounded-2xl p-4 hover:bg-white/10 transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-white font-medium text-lg">{trip.tripName}</h3>
                    <p className="text-gray-400 text-sm">{trip.destination}</p>
                  </div>
                  <span className="text-cyan-400 font-bold">{trip.amount}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-400">{trip.startDate} - {trip.endDate}</span>
                    <span className="text-gray-400">Booked: {trip.bookingDate}</span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    trip.status === 'Confirmed' 
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {trip.status}
                  </span>
                </div>

              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
