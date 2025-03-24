import React from 'react';

interface NewsCardProps {
  title: string;
  category: string;
  date: string;
  image: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, category, date, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-secondary font-medium">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </span>
          <span className="text-sm text-gray-500">
            {new Date(date).toLocaleDateString()}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <button className="text-primary hover:text-primary-dark font-medium">
          Leer más →
        </button>
      </div>
    </div>
  );
};

export default NewsCard;