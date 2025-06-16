import React from 'react';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Detail Page</h2>
      <p>Showing details for item with ID: {id}</p>
    </div>
  );
};

export default DetailPage;