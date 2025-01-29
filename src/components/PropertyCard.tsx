import React from 'react';
import { motion } from 'framer-motion';
import { Property } from '../types';
import { Bed, Bath, Square } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
    >
      <div className="relative">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-48 object-cover"
        />
        {property.featured && (
          <span className="absolute top-2 left-2 bg-purple-600 text-white px-2 py-1 rounded-md text-sm">
            Featured
          </span>
        )}
        {property.sponsored && (
          <span className="absolute top-2 left-2 bg-pink-600 text-white px-2 py-1 rounded-md text-sm">
            Sponsored
          </span>
        )}
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            ${property.price.toLocaleString()}/mo
          </h3>
        </div>
        <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-1">
          {property.name}
        </h4>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
          {property.location}
        </p>

        <div className="flex justify-between text-gray-600 dark:text-gray-400 text-sm">
          <div className="flex items-center">
            <Bed size={16} className="mr-1" />
            <span>{property.beds} bed</span>
          </div>
          <div className="flex items-center">
            <Bath size={16} className="mr-1" />
            <span>{property.baths} bath</span>
          </div>
          <div className="flex items-center">
            <Square size={16} className="mr-1" />
            <span>{property.sqft} sqft</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;