'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Type definitions
interface Booking {
  id: string;
  tripName: string;
  customer: {
    name: string;
    email: string;
    phone: string;
  };
  bookingDate: string;
  travelDate: string;
  returnDate: string;
  guests: number;
  totalAmount: number;
  status: 'Confirmed' | 'Pending' | 'Cancelled';
  paymentStatus: 'Paid' | 'Pending' | 'Partial' | 'Refunded';
  specialRequests?: string;
}

// Mock booking data
const mockBookings = [
  {
    id: 'BK001',
    tripName: 'Luxury Bali Adventure',
    customer: {
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '+1 (555) 123-4567'
    },
    bookingDate: '2024-01-15',
    travelDate: '2024-03-20',
    returnDate: '2024-03-27',
    guests: 2,
    totalAmount: 4998,
    status: 'Confirmed',
    paymentStatus: 'Paid',
    specialRequests: 'Vegetarian meals preferred'
  },
  {
    id: 'BK002',
    tripName: 'Swiss Alps Explorer',
    customer: {
      name: 'Maria Garcia',
      email: 'maria.garcia@email.com',
      phone: '+1 (555) 234-5678'
    },
    bookingDate: '2024-01-14',
    travelDate: '2024-04-10',
    returnDate: '2024-04-17',
    guests: 1,
    totalAmount: 1899,
    status: 'Pending',
    paymentStatus: 'Pending',
    specialRequests: 'Window seat preferred'
  },
  {
    id: 'BK003',
    tripName: 'Tokyo City Break',
    customer: {
      name: 'David Kim',
      email: 'david.kim@email.com',
      phone: '+1 (555) 345-6789'
    },
    bookingDate: '2024-01-13',
    travelDate: '2024-02-15',
    returnDate: '2024-02-22',
    guests: 3,
    totalAmount: 3897,
    status: 'Confirmed',
    paymentStatus: 'Paid',
    specialRequests: 'Family room with connecting doors'
  },
  {
    id: 'BK004',
    tripName: 'Santorini Sunset',
    customer: {
      name: 'Anna Wilson',
      email: 'anna.wilson@email.com',
      phone: '+1 (555) 456-7890'
    },
    bookingDate: '2024-01-12',
    travelDate: '2024-05-05',
    returnDate: '2024-05-12',
    guests: 2,
    totalAmount: 4398,
    status: 'Cancelled',
    paymentStatus: 'Refunded',
    specialRequests: 'Honeymoon suite upgrade'
  },
  {
    id: 'BK005',
    tripName: 'Paris Explorer',
    customer: {
      name: 'Tom Brown',
      email: 'tom.brown@email.com',
      phone: '+1 (555) 567-8901'
    },
    bookingDate: '2024-01-11',
    travelDate: '2024-06-10',
    returnDate: '2024-06-17',
    guests: 1,
    totalAmount: 1599,
    status: 'Confirmed',
    paymentStatus: 'Paid',
    specialRequests: 'Photography tour included'
  },
  {
    id: 'BK006',
    tripName: 'New York City Adventure',
    customer: {
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      phone: '+1 (555) 678-9012'
    },
    bookingDate: '2024-01-10',
    travelDate: '2024-07-15',
    returnDate: '2024-07-22',
    guests: 4,
    totalAmount: 6396,
    status: 'Pending',
    paymentStatus: 'Partial',
    specialRequests: 'Broadway show tickets included'
  }
];

const statusColors = {
  Confirmed: 'bg-green-500/20 text-green-400 border-green-500/30',
  Pending: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  Cancelled: 'bg-red-500/20 text-red-400 border-red-500/30'
};

const paymentStatusColors = {
  Paid: 'bg-green-500/20 text-green-400 border-green-500/30',
  Pending: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  Partial: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  Refunded: 'bg-gray-500/20 text-gray-400 border-gray-500/30'
};

export default function BookingsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [paymentFilter, setPaymentFilter] = useState('All');
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const filteredBookings = mockBookings.filter(booking => {
    const matchesSearch =
      booking.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.tripName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.customer.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'All' || booking.status === statusFilter;
    const matchesPayment = paymentFilter === 'All' || booking.paymentStatus === paymentFilter;

    return matchesSearch && matchesStatus && matchesPayment;
  });

  const totalRevenue = mockBookings
    .filter(booking => booking.status === 'Confirmed' && booking.paymentStatus === 'Paid')
    .reduce((sum, booking) => sum + booking.totalAmount, 0);

  const confirmedBookings = mockBookings.filter(booking => booking.status === 'Confirmed').length;
  const pendingBookings = mockBookings.filter(booking => booking.status === 'Pending').length;

  const handleViewDetails = (booking: Booking) => {
    setSelectedBooking(booking);
    setShowDetailsModal(true);
  };

  const handleStatusChange = (bookingId: string, newStatus: string) => {
    // In a real app, this would update the backend
    console.log(`Updating booking ${bookingId} status to ${newStatus}`);
  };

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
          <h1 className="text-3xl font-bold text-white">Bookings Management</h1>
          <p className="text-gray-400 mt-2">Manage all trip bookings and reservations</p>
        </div>
        <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
          Export Bookings
        </button>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Bookings</p>
              <p className="text-2xl font-bold text-white">{mockBookings.length}</p>
            </div>
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
              <span className="text-2xl">📅</span>
            </div>
          </div>
        </div>

        <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Confirmed</p>
              <p className="text-2xl font-bold text-green-400">{confirmedBookings}</p>
            </div>
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
              <span className="text-2xl">✅</span>
            </div>
          </div>
        </div>

        <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Pending</p>
              <p className="text-2xl font-bold text-yellow-400">{pendingBookings}</p>
            </div>
            <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center">
              <span className="text-2xl">⏳</span>
            </div>
          </div>
        </div>

        <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Revenue</p>
              <p className="text-2xl font-bold text-cyan-400">${totalRevenue.toLocaleString()}</p>
            </div>
            <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
              <span className="text-2xl">💰</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Filters and Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Search</label>
            <input
              type="text"
              placeholder="Search bookings..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Status</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            >
              <option value="All">All Statuses</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Pending">Pending</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Payment</label>
            <select
              value={paymentFilter}
              onChange={(e) => setPaymentFilter(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            >
              <option value="All">All Payments</option>
              <option value="Paid">Paid</option>
              <option value="Pending">Pending</option>
              <option value="Partial">Partial</option>
              <option value="Refunded">Refunded</option>
            </select>
          </div>

          <div className="flex items-end">
            <button
              onClick={() => {
                setSearchTerm('');
                setStatusFilter('All');
                setPaymentFilter('All');
              }}
              className="w-full bg-white/10 text-white px-4 py-3 rounded-xl font-medium hover:bg-white/20 transition-colors duration-300"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </motion.div>

      {/* Bookings Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Booking ID</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Trip</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Travel Dates</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Guests</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Payment</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {filteredBookings.map((booking, index) => (
                <motion.tr
                  key={booking.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  className="hover:bg-white/5 transition-colors duration-300"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-cyan-400">{booking.id}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-white">{booking.tripName}</div>
                      <div className="text-sm text-gray-400">Booked: {new Date(booking.bookingDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-white">{booking.customer.name}</div>
                      <div className="text-sm text-gray-400">{booking.customer.email}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm text-white">
                        {new Date(booking.travelDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })} - {new Date(booking.returnDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                      </div>
                      <div className="text-sm text-gray-400">
                        {Math.ceil((new Date(booking.returnDate).getTime() - new Date(booking.travelDate).getTime()) / (1000 * 60 * 60 * 24))} days
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-white">{booking.guests} {booking.guests === 1 ? 'guest' : 'guests'}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-bold text-cyan-400">${booking.totalAmount.toLocaleString()}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full border ${statusColors[booking.status as keyof typeof statusColors]}`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full border ${paymentStatusColors[booking.paymentStatus as keyof typeof paymentStatusColors]}`}>
                      {booking.paymentStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleViewDetails(booking)}
                        className="cursor-pointer p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                        title="View Details"
                      >
                        👁️
                      </button>
                      <button
                        onClick={() => handleStatusChange(booking.id, 'Confirmed')}
                        className="cursor-pointer p-2 rounded-lg bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-colors"
                        title="Confirm"
                      >
                        ✅
                      </button>
                      <button
                        onClick={() => handleStatusChange(booking.id, 'Cancelled')}
                        className="cursor-pointer p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors"
                        title="Cancel"
                      >
                        ❌
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Booking Details Modal */}
      {showDetailsModal && selectedBooking && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowDetailsModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-slate-900 border border-white/10 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Booking Details</h2>
              <button
                onClick={() => setShowDetailsModal(false)}
                className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6">
              {/* Booking Info */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Booking ID</label>
                  <p className="text-white font-medium">{selectedBooking.id}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Trip Name</label>
                  <p className="text-white font-medium">{selectedBooking.tripName}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Booking Date</label>
                  <p className="text-white">{new Date(selectedBooking.bookingDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Total Amount</label>
                  <p className="text-cyan-400 font-bold">${selectedBooking.totalAmount.toLocaleString()}</p>
                </div>
              </div>

              {/* Customer Info */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Customer Information</h3>
                <div className="bg-white/5 rounded-2xl p-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Name:</span>
                    <span className="text-white">{selectedBooking.customer.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Email:</span>
                    <span className="text-white">{selectedBooking.customer.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Phone:</span>
                    <span className="text-white">{selectedBooking.customer.phone}</span>
                  </div>
                </div>
              </div>

              {/* Travel Details */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Travel Details</h3>
                <div className="bg-white/5 rounded-2xl p-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Travel Date:</span>
                    <span className="text-white">{new Date(selectedBooking.travelDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Return Date:</span>
                    <span className="text-white">{new Date(selectedBooking.returnDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-white">
                      {Math.ceil((new Date(selectedBooking.returnDate) - new Date(selectedBooking.travelDate)) / (1000 * 60 * 60 * 24))} days
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Number of Guests:</span>
                    <span className="text-white">{selectedBooking.guests}</span>
                  </div>
                </div>
              </div>

              {/* Status and Payment */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Booking Status</label>
                  <select
                    value={selectedBooking.status}
                    onChange={(e) => handleStatusChange(selectedBooking.id, e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    <option value="Confirmed">Confirmed</option>
                    <option value="Pending">Pending</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Payment Status</label>
                  <span className={`inline-flex px-3 py-3 text-sm font-medium rounded-xl border ${paymentStatusColors[selectedBooking.paymentStatus]}`}>
                    {selectedBooking.paymentStatus}
                  </span>
                </div>
              </div>

              {/* Special Requests */}
              {selectedBooking.specialRequests && (
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Special Requests</label>
                  <div className="bg-white/5 rounded-2xl p-4">
                    <p className="text-white">{selectedBooking.specialRequests}</p>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex items-center justify-end space-x-4 pt-4 border-t border-white/10">
                <button
                  onClick={() => setShowDetailsModal(false)}
                  className="px-6 py-3 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-colors"
                >
                  Close
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                  Send Confirmation Email
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
