import React, { useEffect, useState } from 'react';

const Dummyjson = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch('./Components/records.json')
      .then(res => res.json())
      .then(data => setRecords(data));
  }, []);

  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', margin: '2rem' }}>
      {records.map(record => (
        <div key={record.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', width: '200px' }}>
          <h3>{record.title}</h3>
          <p>{record.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Dummyjson;