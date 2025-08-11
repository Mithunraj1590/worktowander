'use client';

import { motion } from 'framer-motion';

interface StatsCardProps {
  name: string;
  value: string;
  change: string;
  icon: string;
  index?: number;
}

export default function StatsCard({ name, value, change, icon, index = 0 }: StatsCardProps) {
  return (
    <motion.div
      className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm font-medium mb-1">{name}</p>
          <p className="text-3xl font-bold text-white mb-1">{value}</p>
          <p className="text-cyan-400 text-sm">{change} from last month</p>
        </div>
        <div className="w-14 h-14 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-2xl flex items-center justify-center">
          <span className="text-2xl">{icon}</span>
        </div>
      </div>
    </motion.div>
  );
}
