# Real Estate Dashboard

A modern, responsive real estate dashboard built with React, TypeScript, and Tailwind CSS. This application provides a comprehensive interface for managing and viewing real estate properties, NFTs, and investment statistics.

## 🌟 Features

### Dashboard Overview
- **Investment Statistics**: Real-time tracking of total investments, weekly returns, and expenses
- **Balance Card**: Dynamic display of current balance and monthly profits
- **NFT Portfolio**: Track owned NFTs with price changes and trends
- **Distribution Charts**: Visual representation of portfolio performance over time
- **Top Picks**: Curated list of recommended properties with price and ETH values
- **Featured Properties**: Showcase of available properties with detailed information

### User Interface
- **Dark Mode**: Toggle between light and dark themes for comfortable viewing
- **Responsive Design**: Fully responsive layout that works on all device sizes
- **Animated Elements**: Smooth transitions and animations using Framer Motion
- **Interactive Components**: Hover effects and click animations for better user engagement

### Navigation
- **Sidebar Navigation**: Easy access to different sections (Dashboard, History, Portfolio, Calendar, Settings)
- **Quick Actions**: Notification system and user profile access
- **Property Filtering**: Browse and filter property listings efficiently

## 🛠 Technical Implementation

### Core Technologies
- **React 18**: Latest version of React for optimal performance
- **TypeScript**: Type-safe development environment
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Framer Motion**: Animation library for smooth transitions
- **Recharts**: Responsive charting library for data visualization
- **Lucide React**: Modern icon library

### Architecture Highlights

#### Component Structure
```
src/
├── components/
│   ├── Dashboard.tsx    # Main dashboard layout
│   ├── PropertyCard.tsx # Reusable property card component
│   └── Sidebar.tsx     # Navigation sidebar
├── data/
│   └── mockData.ts     # Sample data for development
└── types/
    └── index.ts        # TypeScript interfaces
```

#### Key Design Patterns
1. **Component Composition**: Breaking down the UI into reusable components
2. **State Management**: React hooks for local state management
3. **Dark Mode Implementation**: Tailwind's dark mode utility with React state
4. **Responsive Design**: Mobile-first approach using Tailwind's responsive classes
5. **Animation System**: Framer Motion for consistent animations

### Styling Approach
- **Utility-First CSS**: Using Tailwind's utility classes for rapid development
- **Dark Mode**: Implemented using Tailwind's dark: variant
- **Custom Colors**: Extended Tailwind theme for brand colors
- **Responsive Classes**: Mobile-first breakpoints for all screen sizes

### Performance Optimizations
- **Component Lazy Loading**: Load components as needed
- **Optimized Images**: Using proper image sizing and formats
- **Animation Performance**: Hardware-accelerated animations
- **Responsive Images**: Proper sizing for different viewports

## 🎨 UI/UX Considerations

### Design System
- **Color Palette**: Purple-based theme with supporting colors
- **Typography**: Clear hierarchy with responsive font sizes
- **Spacing**: Consistent spacing using Tailwind's spacing scale
- **Shadows**: Subtle shadows for depth and hierarchy
- **Rounded Corners**: Consistent border radius for UI elements

### Interactive Elements
- **Hover States**: Clear feedback for interactive elements
- **Loading States**: Smooth transitions for data loading
- **Animations**: Subtle animations for better user experience
- **Feedback**: Visual feedback for user actions

### Accessibility
- **Color Contrast**: WCAG compliant color combinations
- **Semantic HTML**: Proper use of HTML elements


## 🚀 Future Enhancements

### Planned Features
1. **Search Functionality**: Advanced property search
2. **Filters**: Additional filtering options for properties
3. **User Authentication**: Secure login and registration
4. **Real-time Updates**: Live data updates
5. **Property Comparison**: Compare different properties
6. **Favorites System**: Save favorite properties
7. **Notification System**: Real-time notifications
8. **Analytics Dashboard**: Detailed investment analytics



## 📦 Project Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.