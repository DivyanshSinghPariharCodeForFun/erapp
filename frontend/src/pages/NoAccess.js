import React from 'react';

const NoAccess = () => (
  <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <h2 style={{ color: '#c0392b', fontSize: '2rem', marginBottom: '1rem' }}>You Don't Have Access</h2>
    <p style={{ fontSize: '1.2rem', color: '#555' }}>You are not authorized to view this page.<br/>If you believe this is a mistake, please contact IT support.</p>
  </div>
);

export default NoAccess;