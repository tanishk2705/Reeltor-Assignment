import React from 'react';
import { motion } from 'framer-motion';
import { Home, Clock, Briefcase, Calendar, Settings, LogOut } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  const menuItems = [
    { icon: Home, label: 'Dashboard', id: 'dashboard' },
    { icon: Clock, label: 'History', id: 'history' },
    { icon: Briefcase, label: 'Portfolio', id: 'portfolio' },
    { icon: Calendar, label: 'Calendar', id: 'calendar' },
    { icon: Settings, label: 'Settings', id: 'settings' },
  ];

  return (
    <div className="h-screen w-16 bg-white dark:bg-gray-900 fixed left-0 top-0 border-r border-gray-200 dark:border-gray-800">
      <div className="flex flex-col items-center py-4">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mb-8"
        >
          <span className="text-white font-bold">RE</span>
        </motion.div>

        <div className="flex flex-col space-y-6">
          {menuItems.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSectionChange(item.id)}
              className={`p-2 rounded-lg ${
                activeSection === item.id
                  ? 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              <item.icon size={20} />
            </motion.button>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-auto p-2 text-gray-500 dark:text-gray-400"
        >
          <LogOut size={20} />
        </motion.button>
      </div>
    </div>
  );
};

export default Sidebar;