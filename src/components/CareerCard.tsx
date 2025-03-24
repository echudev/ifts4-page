import React, { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';

interface CareerCardProps {
  title: string;
  duration: string;
  description: string;
  icon: ReactNode;
}

const CareerCard: React.FC<CareerCardProps> = ({ title, duration, description, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start space-x-4">
        <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Duración: {duration}</span>
            <button className="flex items-center text-primary hover:text-primary-dark font-medium">
              Ver plan de estudios
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerCard;