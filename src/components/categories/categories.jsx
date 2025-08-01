// categories.jsx
import React from 'react';
import './categories.css';
import { FaCouch, FaBuilding, FaTree, FaChair } from 'react-icons/fa'; // Added FaChair

function Categories() {
  const categoryData = [
    {
      title: 'Home Furniture',
      icon: <FaCouch className="category-icon" />,
    },
    {
      title: 'Office Furniture',
      icon: <FaBuilding className="category-icon" />,
    },
    {
      title: 'Outdoor Furniture',
      icon: <FaTree className="category-icon" />,
    },
    {
      title: 'Commercial Furniture',
      icon: <FaChair className="category-icon" />,
    },
  ];

  return (
    <section className="categories-section">
      <h2 className="section-title">Shop by Category</h2>
      <div className="categories-container">
        {categoryData.map((category, index) => (
          <div className="category-box" key={index}>
            {category.icon}
            <h3>{category.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
