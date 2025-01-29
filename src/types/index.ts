export interface Property {
  id: string;
  name: string;
  price: number;
  location: string;
  image: string;
  beds: number;
  baths: number;
  sqft: number;
  featured?: boolean;
  sponsored?: boolean;
}

export interface InvestmentStats {
  totalInvestment: number;
  weeklyReturns: number;
  expenses: number;
}

export interface CardBalance {
  balance: number;
  monthlyProfit: number;
  percentageChange: number;
}

export interface NFT {
  id: string;
  name: string;
  price: number;
  change: string;
  trend: 'up' | 'down';
  image: string;
}

export interface TopPick {
  id: string;
  name: string;
  price: number;
  eth: number;
  color: string;
}

export interface PortfolioDataPoint {
  name: string;
  value: number;
}