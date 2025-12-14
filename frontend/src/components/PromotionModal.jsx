import React from 'react';
import defaultPieces from './pieces';

const PromotionModal = ({ color, options, onSelect, piecesMap, darkMode }) => {
  const pieces = piecesMap || defaultPieces;
  
  const pieceNames = {
    'N': 'Knight',
    'R': 'Rook',
    'B': 'Bishop',
    'Q': 'Queen'
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: darkMode ? '#1E293B' : 'white',
        border: `2px solid ${darkMode ? '#334155' : '#ccc'}`,
        borderRadius: '16px',
        padding: '32px',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
        maxWidth: '400px',
        width: '90%'
      }}>
        <h2 style={{
          fontSize: '28px',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '24px',
          color: darkMode ? 'white' : '#333'
        }}>
          ♟️ Promote Pawn
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '16px'
        }}>
          {options.map((pieceType) => (
            <button
              key={pieceType}
              onClick={() => onSelect(pieceType)}
              style={{
                padding: '16px',
                borderRadius: '10px',
                border: `2px solid ${darkMode ? '#334155' : '#ddd'}`,
                backgroundColor: darkMode ? '#0F172A' : '#f5f5f5',
                color: darkMode ? '#e5e7eb' : '#333',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                fontWeight: '600',
                fontSize: '16px'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = darkMode ? '#1E293B' : '#e8e8e8';
                e.target.style.borderColor = '#22C55E';
                e.target.style.color = '#22C55E';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = darkMode ? '#0F172A' : '#f5f5f5';
                e.target.style.borderColor = darkMode ? '#334155' : '#ddd';
                e.target.style.color = darkMode ? '#e5e7eb' : '#333';
                e.target.style.transform = 'scale(1)';
              }}
            >
              <img
                src={pieces[color + pieceType]}
                alt={pieceNames[pieceType]}
                style={{
                  width: '48px',
                  height: '48px',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                }}
              />
              <span>{pieceNames[pieceType]}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromotionModal;
