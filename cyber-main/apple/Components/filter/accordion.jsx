import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Accordion.css'; // Stil dosyasını ekleyin

const Accordion = ({ name, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='accordion' style={{ width: '256px', overflow: 'hidden' }}>
      <div
        onClick={toggleAccordion}
        className="accordion-header" // CSS sınıfı
        style={{
          cursor: 'pointer',
          height: isOpen ? '400px' : '48px',
          transition: 'height 0.3s ease-in-out',
          background: 'white',
          position: 'relative',
        }}
      >
        <div className='accordion-top'>
          <p>{name}</p>
          <p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                transform: isOpen ? 'rotate(180deg)' : 'none',
                transition: 'transform 0.3s ease-in-out'
              }}
            >
              <path
                d="M16.59 8.29498L12 12.875L7.41 8.29498L6 9.70498L12 15.705L18 9.70498L16.59 8.29498Z"
                fill="black"
              />
            </svg>
          </p>
        </div>
        {isOpen && <div className='accordion-content'>{children}</div>} {/* İçeriği burada gösteriyoruz */}
      </div>
    </div>
  );
};

// Prop türlerini tanımlama
Accordion.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node, // İçerik olarak her tür React bileşeni olabilir
};

export default Accordion;
