'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

// Mock data for analytics
const monthlyRevenue = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Revenue',
      data: [45000, 52000, 48000, 61000, 55000, 67000, 72000, 68000, 75000, 82000, 78000, 89000],
      borderColor: 'rgb(34, 211, 238)',
      backgroundColor: 'rgba(34, 211, 238, 0.1)',
      tension: 0.4,
    },
  ],
};

const bookingTrends = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Bookings',
      data: [45, 52, 48, 61, 55, 67, 72, 68, 75, 82, 78, 89],
      backgroundColor: 'rgba(59, 130, 246, 0.8)',
      borderRadius: 8,
    },
  ],
};

const tripCategoryDistribution = {
  labels: ['Adventure', 'Luxury', 'Cultural', 'Beach', 'City Break', 'Nature'],
  datasets: [
    {
      data: [25, 20, 18, 15, 12, 10],
      backgroundColor: [
        'rgba(34, 211, 238, 0.8)',
        'rgba(59, 130, 246, 0.8)',
        'rgba(168, 85, 247, 0.8)',
        'rgba(236, 72, 153, 0.8)',
        'rgba(251, 146, 60, 0.8)',
        'rgba(34, 197, 94, 0.8)',
      ],
      borderWidth: 0,
    },
  ],
};

const customerSatisfaction = {
  labels: ['5 Stars', '4 Stars', '3 Stars', '2 Stars', '1 Star'],
  datasets: [
    {
      data: [45, 30, 15, 7, 3],
      backgroundColor: [
        'rgba(34, 197, 94, 0.8)',
        'rgba(59, 130, 246, 0.8)',
        'rgba(251, 146, 60, 0.8)',
        'rgba(239, 68, 68, 0.8)',
        'rgba(239, 68, 68, 0.8)',
      ],
      borderWidth: 0,
    },
  ],
};

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState('12months');
  const [selectedMetric, setSelectedMetric] = useState('revenue');

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: 'rgb(156, 163, 175)',
          font: {
            size: 12,
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'rgb(156, 163, 175)',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
      y: {
        ticks: {
          color: 'rgb(156, 163, 175)',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
  };

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: 'rgb(156, 163, 175)',
          font: {
            size: 12,
          },
        },
      },
    },
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
          <h1 className="text-3xl font-bold text-white">Analytics Dashboard</h1>
          <p className="text-gray-400 mt-2">Comprehensive insights and performance metrics</p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            <option value="7days">Last 7 Days</option>
            <option value="30days">Last 30 Days</option>
            <option value="3months">Last 3 Months</option>
            <option value="6months">Last 6 Months</option>
            <option value="12months">Last 12 Months</option>
          </select>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-xl font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
            Export Report
          </button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Revenue</p>
              <p className="text-2xl font-bold text-cyan-400">$847,500</p>
              <p className="text-green-400 text-sm">+12.5% vs last period</p>
            </div>
            <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
              <span className="text-2xl">💰</span>
            </div>
          </div>
        </div>

        <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Bookings</p>
              <p className="text-2xl font-bold text-blue-400">1,247</p>
              <p className="text-green-400 text-sm">+8.3% vs last period</p>
            </div>
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
              <span className="text-2xl">📅</span>
            </div>
          </div>
        </div>

        <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Active Users</p>
              <p className="text-2xl font-bold text-purple-400">892</p>
              <p className="text-green-400 text-sm">+15.2% vs last period</p>
            </div>
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
              <span className="text-2xl">👥</span>
            </div>
          </div>
        </div>

        <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Avg. Rating</p>
              <p className="text-2xl font-bold text-yellow-400">4.7/5</p>
              <p className="text-green-400 text-sm">+0.2 vs last period</p>
            </div>
            <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center">
              <span className="text-2xl">⭐</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Charts Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {/* Revenue Chart */}
        <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">Revenue Trends</h3>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
              <span className="text-sm text-gray-400">Monthly Revenue</span>
            </div>
          </div>
          <div className="h-64">
            <Line data={monthlyRevenue} options={chartOptions} />
          </div>
        </div>

        {/* Booking Trends */}
        <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">Booking Trends</h3>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              <span className="text-sm text-gray-400">Monthly Bookings</span>
            </div>
          </div>
          <div className="h-64">
            <Bar data={bookingTrends} options={chartOptions} />
          </div>
        </div>
      </motion.div>

      {/* Distribution Charts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {/* Trip Categories */}
        <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Trip Category Distribution</h3>
          <div className="h-64 flex items-center justify-center">
            <div className="w-48 h-48">
              <Doughnut data={tripCategoryDistribution} options={doughnutOptions} />
            </div>
          </div>
        </div>

        {/* Customer Satisfaction */}
        <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Customer Satisfaction</h3>
          <div className="h-64 flex items-center justify-center">
            <div className="w-48 h-48">
              <Doughnut data={customerSatisfaction} options={doughnutOptions} />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Performance Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        {/* Top Performing Trips */}
        <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Top Performing Trips</h3>
          <div className="space-y-4">
            {[
              { name: 'Luxury Bali Adventure', revenue: '$89,500', bookings: 45 },
              { name: 'Swiss Alps Explorer', revenue: '$76,200', bookings: 38 },
              { name: 'Tokyo City Break', revenue: '$68,900', bookings: 34 },
              { name: 'Santorini Sunset', revenue: '$62,400', bookings: 31 },
              { name: 'Paris Explorer', revenue: '$58,700', bookings: 29 },
            ].map((trip, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                <div>
                  <p className="text-white font-medium">{trip.name}</p>
                  <p className="text-gray-400 text-sm">{trip.bookings} bookings</p>
                </div>
                <p className="text-cyan-400 font-bold">{trip.revenue}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Demographics */}
        <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Customer Demographics</h3>
          <div className="space-y-4">
            {[
              { age: '18-25', percentage: 15, color: 'bg-cyan-400' },
              { age: '26-35', percentage: 35, color: 'bg-blue-400' },
              { age: '36-45', percentage: 28, color: 'bg-purple-400' },
              { age: '46-55', percentage: 15, color: 'bg-pink-400' },
              { age: '55+', percentage: 7, color: 'bg-orange-400' },
            ].map((demo, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-white text-sm">{demo.age}</span>
                  <span className="text-gray-400 text-sm">{demo.percentage}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                    className={`${demo.color} h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${demo.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { action: 'New booking', detail: 'Luxury Bali Adventure', time: '2 min ago' },
              { action: 'Payment received', detail: '$2,499 from John Smith', time: '15 min ago' },
              { action: 'Review posted', detail: '5 stars for Tokyo City Break', time: '1 hour ago' },
              { action: 'Trip confirmed', detail: 'Santorini Sunset for Maria G.', time: '2 hours ago' },
              { action: 'New user registered', detail: 'david.kim@email.com', time: '3 hours ago' },
            ].map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-white/5 rounded-xl">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-white text-sm font-medium">{activity.action}</p>
                  <p className="text-gray-400 text-xs">{activity.detail}</p>
                  <p className="text-gray-500 text-xs">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
