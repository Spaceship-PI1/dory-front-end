import React from 'react';

import './style.css';

export default function NavInteresses({ data }) {
  return (
    <div className="interesses-container">
      <p>Seus interesses</p>
      <ul className="interesses-list-tags">
        {data?.map((inter, index) => (
          <li key={index}>{inter}</li>
        ))}
      </ul>
    </div>
  );
}
