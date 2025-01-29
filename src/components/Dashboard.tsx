import React from 'react';
import { motion } from 'framer-motion';
import { Bell, User, ChevronLeft, ChevronRight, MoreHorizontal, Moon, Sun } from 'lucide-react';
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';
import PropertyCard from './PropertyCard';
import { properties, investmentStats, cardBalance, nftsOwned, topPicks, portfolioData } from '../data/mockData';

interface DashboardProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

const Dashboard = ({ darkMode, onToggleDarkMode }: DashboardProps) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pl-16">
      <header className="bg-white dark:bg-gray-800 p-4 flex justify-between items-center shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onToggleDarkMode}
            className="p-2 text-gray-600 dark:text-gray-400"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 text-gray-600 dark:text-gray-400 relative"
          >
            <Bell size={20} />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2"
          >
            <User size={20} className="text-gray-600 dark:text-gray-400" />
          </motion.button>
        </div>
      </header>

      <main className="p-6 space-y-6">
        {/* Investment Stats and Balance */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Investment Stats
              </h3>
              <button className="text-gray-600 dark:text-gray-400">
                <MoreHorizontal size={20} />
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Total Investment</span>
                <span className="text-green-600 font-semibold">{investmentStats.totalInvestment} ETH</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Weekly Returns</span>
                <span className="text-green-600 font-semibold">{investmentStats.weeklyReturns} ETH</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Expenses</span>
                <span className="text-red-600 font-semibold">{investmentStats.expenses} ETH</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-purple-600 p-6 rounded-xl shadow-sm text-white col-span-2"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Balance</h3>
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-white opacity-60"></div>
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <div className="w-2 h-2 rounded-full bg-white opacity-60"></div>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <span className="text-4xl font-bold">${cardBalance.balance.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Monthly Profit</span>
                <span className="font-semibold">
                  ${cardBalance.monthlyProfit.toLocaleString()}
                  <span className="ml-2 text-green-300">+{cardBalance.percentageChange}%</span>
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* NFTs Owned and Portfolio */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">NFTs owned</h3>
              <button className="text-gray-600 dark:text-gray-400">
                <MoreHorizontal size={20} />
              </button>
            </div>
            <div className="space-y-4">
              {nftsOwned.map((nft) => (
                <div key={nft.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={nft.image}
                      alt={nft.name}
                      className="w-10 h-10 rounded-lg object-cover"
                    />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{nft.name}</p>
                      <p className="text-sm text-gray-500">{nft.price} ETH</p>
                    </div>
                  </div>
                  <span className={`text-sm ${
                    nft.trend === 'up' ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {nft.change}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm col-span-2"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Total Distributions</h3>
              <div className="flex items-center space-x-2">
                <button className="p-1 text-gray-600 dark:text-gray-400">
                  <ChevronLeft size={20} />
                </button>
                <button className="p-1 text-gray-600 dark:text-gray-400">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={portfolioData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#7c3aed" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#7c3aed"
                    fillOpacity={1}
                    fill="url(#colorValue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Top Picks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Top Picks</h3>
            <button className="text-gray-600 dark:text-gray-400">
              <MoreHorizontal size={20} />
            </button>
          </div>
          <div className="space-y-4">
            {topPicks.map((pick) => (
              <div key={pick.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-1 h-12 rounded-full bg-${pick.color}-500`}></div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{pick.name}</p>
                    <p className="text-sm text-gray-500">${pick.price.toLocaleString()}</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">{pick.eth} ETH</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Featured Properties */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Featured Properties</h2>
            <div className="flex items-center space-x-2">
              <button className="p-1 text-gray-600 dark:text-gray-400">
                <ChevronLeft size={20} />
              </button>
              <button className="p-1 text-gray-600 dark:text-gray-400">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;