import React from "react";
import PropTypes from 'prop-types';
import './ShopCard.css';
const ShopCard = ({ name, border = '#ccc', background = '#fff', color = '#000' }) => {
  return (
    <div
      className="shop-card"
      style={{
        border: `1px solid ${border}`,
        background,
        color,
        padding: '20px',
        borderRadius: '8px',
        textAlign: 'center',
        cursor: 'pointer',
        transition: '0.3s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <h3>{name}</h3>
    </div>
  );
};


ShopCard.propTypes = {
  name: PropTypes.string.isRequired,
  border: PropTypes.string,
  background: PropTypes.string,
  color: PropTypes.string,
};


ShopCard.defaultProps = {
  border: '#ccc',
  background: '#fff',
  color: '#000',
};

export default ShopCard;
