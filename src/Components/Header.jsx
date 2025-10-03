import React from "react";

export default function Navbar() {
  return (
<div className="fixed top-0 left-0 w-full z-50" style={{
  mixBlendMode: "hard-light"
}}>
    <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.2rem 2rem', backgroundColor: '#1e3a8a', height: '48px' }}>
      {/* Logo and Company Name */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ width: '32px', height: '32px', backgroundColor: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: '#1e3a8a', fontWeight: 'bold', fontSize: '14px' }}>PG</span>
        </div>
        <span style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>Prashv-Gems</span>
      </div>

      {/* Navigation Links */}
      <div style={{ display: 'flex', gap: '52px' }}>
        <a href="home" style={{ color: 'white', textDecoration: 'none', transition: 'all 0.3s ease', padding: '8px 16px', borderBottom: '2px solid white' }} 
           onMouseEnter={(e) => { e.target.style.backgroundColor = 'rgba(255,255,255,0.2)'; e.target.style.transform = 'scale(1.05)'; }}
           onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.transform = 'scale(1)'; }}>Home</a>
        <a href="about" style={{ color: 'white', textDecoration: 'none', transition: 'all 0.3s ease', padding: '8px 16px', borderBottom: '2px solid transparent' }}
           onMouseEnter={(e) => { e.target.style.backgroundColor = 'rgba(255,255,255,0.2)'; e.target.style.transform = 'scale(1.05)'; }}
           onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.transform = 'scale(1)'; }}>About</a>
        <a href="more" style={{ color: 'white', textDecoration: 'none', transition: 'all 0.3s ease', padding: '8px 16px', borderBottom: '2px solid transparent' }}
           onMouseEnter={(e) => { e.target.style.backgroundColor = 'rgba(255,255,255,0.2)'; e.target.style.transform = 'scale(1.05)'; }}
           onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.transform = 'scale(1)'; }}>More</a>
      </div>

      {/* Order Button */}
      <button style={{ backgroundColor: 'white', color: '#1e3a8a', padding: '4px 20px', borderRadius: '24px', fontWeight: '600', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease' }}
              onMouseEnter={(e) => { e.target.style.backgroundColor = '#f0f0f0'; e.target.style.transform = 'scale(1.05)'; }}
              onMouseLeave={(e) => { e.target.style.backgroundColor = 'white'; e.target.style.transform = 'scale(1)'; }}>
        Order
      </button>
    </nav>
</div>
  );
}