import { useState } from 'react';

export default function DYK({ info }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
        <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ 
            position: 'fixed', 
            bottom: '20px',
            right: '20px',
            padding: '12px 24px',
            fontSize: '16px',
            backgroundColor: '#002170',
            color: '#fff',
            border: 'none',
            borderRadius: '30px',
            cursor: 'pointer',
            boxShadow: '0 2px 10px rgba(0,0,0,0.25)',
            zIndex: 9999,
        }}
        >
        🤔
        </button>

        {isHovered && (
        <div
            style={{
            position: 'fixed',
            bottom: '70px',
            right: '20px', 
            width: '260px',
            padding: '12px 15px',
            background: '#ffffff',
            border: '1px solid #ddd',
            borderRadius: '6px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            zIndex: 10000,
            whiteSpace: 'normal',
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
            }}
        >
            <strong style={{ display: 'block', marginBottom: '5px' }}>Did You Know?</strong>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.4', color: '#333' }}>
            {info}
            </p>
        </div>
        )}
    </div>
  );
}